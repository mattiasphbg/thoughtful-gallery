import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { db } from "~/server/db";

export const category = createTRPCRouter({
    getAll: publicProcedure.query(({ ctx }) => {
        const category = ctx.db.category.findMany();
        return category;
    }),
});

