import { z } from "zod";

const getOneInputSchema = z.object({
    name: z.string(),
});

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const item = createTRPCRouter({
    getAll: publicProcedure.query(({ ctx }) => {
        const items = ctx.db.item.findMany();
        // Validate the response using the Zod schema
        // zDataChecker.parse(items);

        return items;
    }),
    getOneIName: publicProcedure.query(async ({ ctx, input }) => {
        const validatedInput = getOneInputSchema.parse(input);

        const item = await ctx.db.item.findFirst({
            where: {
                name: validatedInput.name,
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
});
