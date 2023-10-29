import { item } from "~/server/api/routers/item";
import { post } from "~/server/api/routers/post";

import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    allItems: item.getAll,
    getoneItem: item.getOneIName,
    AllPost: post.allPost,
});

// export type definition of API
export type AppRouter = typeof appRouter;
