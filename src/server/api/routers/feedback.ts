import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { db } from "~/server/db";

export const feedback = createTRPCRouter({
    getAll: publicProcedure.query(({ ctx }) => {
        const items = ctx.db.feedback.findMany();
        return items;
    }),
    add: publicProcedure
        .input(
            z.object({
                id: z.string().uuid().optional(),
                name: z.string(),
                email: z.string().email(),
                message: z.string().min(1),
            }),
        )
        .mutation(async ({ input }) => {
            const feedback = await db.feedback.create({
                data: {
                    id: input.id !== undefined ? parseInt(input.id) : undefined,
                    name: input.name,
                    email: input.email,
                    message: input.message,
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    message: true,
                    createdAt: true,
                },
            });
            return feedback;
        }),
});
