import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const post = createTRPCRouter({
    allPost: publicProcedure.query(({ ctx }) => {
        const posts = ctx.db.post.findMany();

        return posts;
    }),
});
