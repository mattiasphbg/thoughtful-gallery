import { item } from "~/server/api/routers/item";
import { post } from "~/server/api/routers/post";
import { userIdentity } from "~/server/api/routers/Identity";
import { feedback } from "~/server/api/routers/feedback";

import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    items: item,
    posts: post,
    identity: userIdentity,
    feedback: feedback,
});

// export type definition of API
export type AppRouter = typeof appRouter;
