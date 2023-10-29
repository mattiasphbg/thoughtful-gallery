import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const post = createTRPCRouter({
    allPost: publicProcedure.query(({ ctx }) => {
        const posts = ctx.db.post.findMany();
        // Validate the response using the Zod schema
        // PostSchema.parse(posts);

        return posts;
    }),
});
