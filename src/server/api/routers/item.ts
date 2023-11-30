import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const item = createTRPCRouter({
    getAll: publicProcedure.query(({ ctx }) => {
        const items = ctx.db.item.findMany();

        return items;
    }),
    getOneIName: publicProcedure.query(async ({ ctx, input }) => {
        const item = await ctx.db.item.findFirst({
            where: {
                name: input,
            },
        });

        if (!item) {
            throw new Error("Item not found");
        }

        return item;
    }),
});
