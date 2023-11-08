import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const feedback = createTRPCRouter({
    getAll: publicProcedure.query(({ ctx }) => {
        const items = ctx.db.feedback.findMany();
        // Validate the response using the Zod schema
        // zDataChecker.parse(items);

        return items;
    }),
    getOneIName: publicProcedure.query(async ({ ctx, input }) => {
        const item = await ctx.db.feedback.findFirst({
            where: {
                name: input,
            },
        });

        if (!item) {
            // Handle the case where the item is not found
            throw new Error("Item not found");
        }

        // Validate the response using the Zod schema if needed
        // itemResponseSchema.parse(item);

        return item;
    }),
    create: publicProcedure.mutation(({ ctx, input }) => {
        if (input) {
            const newItem = ctx.db.feedback.create({
                data: {
                    name: input.name,
                    email: input.email,
                    message: input.message,
                    createdAt: new Date(),
                    // You can also pass the createdAt value from the input if needed
                },
            });

            return newItem;
        }
    }),
});
