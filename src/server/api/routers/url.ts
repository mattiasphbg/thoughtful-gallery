// import { z } from "zod"; you can use zod for type-saftety

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const urlRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.routes.findMany();
  }),
});
