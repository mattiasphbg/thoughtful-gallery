import { z } from "zod";

const getOneInputSchema = z.object({
    name: z.string(),
});

import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
} from "~/server/api/trpc";

export const userIdentity = createTRPCRouter({
    getAll: publicProcedure.query(({ ctx }) => {
        const users = ctx.db.userIdentity.findMany();
        // Validate the response using the Zod schema
        // zDataChecker.parse(items);

        return users;
    }),
    getOneIName: protectedProcedure.query(async ({ ctx, input }) => {
        const user = await ctx.db.userIdentity.findFirst({
            where: {
                name: input,
            },
        });

        if (!user) {
            // Handle the case where the item is not found
            throw new Error("Item not found");
        }

        // Validate the response using the Zod schema if needed
        // itemResponseSchema.parse(item);

        return user;
    }),
    // eslint-disable-next-line @typescript-eslint/require-await
    getUserIdentity: protectedProcedure.query(async ({ ctx }) => {
        return ctx.session?.identity;
    }),
});
