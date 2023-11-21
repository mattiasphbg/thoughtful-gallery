/**
 * YOU PROBABLY DON'T NEED TO EDIT THIS FILE, UNLESS:
 * 1. You want to modify request context (see Part 1).
 * 2. You want to create a new middleware or type of procedure (see Part 3).
 *
 * TL;DR - This is where all the tRPC server stuff is created and plugged in. The pieces you will
 * need to use are documented accordingly near the end.
 */
import { initTRPC, TRPCError } from "@trpc/server";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";

import { clerkClient } from "@clerk/nextjs";
import { getAuth, User } from "@clerk/nextjs/server";

import { userIdentity } from "@prisma/client";

import { db } from "~/server/db";
import superjson from "superjson";

type CreateContextOptions = {
    session: {
        clerkUser?: User | undefined | null;
        userId?: string | undefined | null;
        identity?: userIdentity | undefined | null;
    };
};

/**
 * 1. CONTEXT
 *
 * This section defines the "contexts" that are available in the backend API.
 *
 * These allow you to access things when processing a request, like the database, the session, etc.
 */

/**
 * This helper generates the "internals" for a tRPC context. If you need to use it, you can export
 * it from here.
 *
 * Examples of things you may need it for:
 * - testing, so we don't have to mock Next.js' req/res
 * - tRPC's `createSSGHelpers`, where we don't have req/res
 *
 * @see https://create.t3.gg/en/usage/trpc#-serverapitrpcts
 */
const createInnerTRPCContext = (_opt: CreateContextOptions) => {
    return {
        db,
        session: _opt.session,
    };
};

/**
 * This is the actual context you will use in your router. It will be used to process every request
 * that goes through your tRPC endpoint.
 *
 * @see https://trpc.io/docs/context
 */
export const createTRPCContext = async (opts: CreateNextContextOptions) => {
    const { req, res } = opts;
    const { userId } = getAuth(req);

    const user = userId ? await clerkClient.users.getUser(userId) : undefined;
    let identity: userIdentity | undefined | null = null;
    if (userId) {
        const id = parseInt(userId, 10);
        if (!isNaN(id)) {
            identity = await db.userIdentity.findUnique({
                where: { id },
            });
        }
    }

    return createInnerTRPCContext({
        session: {
            clerkUser: user,
            userId,
            identity,
        },
    });
};

/**
 * 2. INITIALIZATION
 *
 * This is where the tRPC API is initialized, connecting the context and transformer. We also parse
 * ZodErrors so that you get typesafety on the frontend if your procedure fails due to validation
 * errors on the backend.
 */

const t = initTRPC.context<typeof createTRPCContext>().create({
    transformer: superjson,
    errorFormatter({ shape }) {
        return shape;
    },
});

const isAuthed = t.middleware(async ({ next, ctx }) => {
    const { identity } = ctx.session;

    if (!identity) {
        throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "no identity in db",
        });
    }

    return next({
        ctx: {
            session: { ...ctx.session, identity },
            db: ctx.db!,
        },
    });
});

/**
 * 3. ROUTER & PROCEDURE (THE IMPORTANT BIT)
 *
 * These are the pieces you use to build your tRPC API. You should import these a lot in the
 * "/src/server/api/routers" directory.
 */

/**
 * This is how you create new routers and sub-routers in your tRPC API.
 *
 * @see https://trpc.io/docs/router
 */
export const createTRPCRouter = t.router;

/**
 * Public (unauthenticated) procedure
 *
 * This is the base piece you use to build new queries and mutations on your tRPC API. It does not
 * guarantee that a user querying is authorized, but you can still access user session data if they
 * are logged in.
 */
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuthed);
