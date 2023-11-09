import { feedback } from '~/server/api/routers/feedback';
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod"

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
    add: publicProcedure
    .input(
      z.object({
        id: z.string().optional(),
        text: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const todo = await ctx.db.feedback.create({
        data: input,
      });
      return todo;
    }),
