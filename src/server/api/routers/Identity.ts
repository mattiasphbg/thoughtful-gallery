import { Input } from "~/components/ui/input";
import { z } from "zod";

const getOneInputSchema = z.object({
    name: z.string(),
});

const userBioInput = z.string();

import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
} from "~/server/api/trpc";

export const userIdentity = createTRPCRouter({
    getAll: publicProcedure.query(({ ctx }) => {
        const users = ctx.db.userIdentity.findMany();

        return users;
    }),
    getOneIName: protectedProcedure.query(async ({ ctx, input }) => {
        const user = await ctx.db.userIdentity.findFirst({
            where: {
                name: input,
            },
        });

        if (!user) {
            throw new Error("Item not found");
        }

        return user;
    }),
    // eslint-disable-next-line @typescript-eslint/require-await
    getUserIdentity: protectedProcedure.query(async ({ ctx }) => {
        return ctx.session?.identity;
    }),
    updateUserIdentityBio: protectedProcedure
        .input(
            z.object({
                id: z.number().optional(),
                userBio: z.string().min(1),
            }),
        )
        .mutation(({ ctx, input }) => {
            const { userBio } = input;
            const userId = ctx.session?.userId;

            const updatedUser = ctx.db.userIdentity.update({
                where: {
                    id: input.id,
                },
                data: {
                    userBio: input.userBio,
                },
            });

            return updatedUser;
        }),
});
