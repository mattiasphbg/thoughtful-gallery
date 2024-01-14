import { z } from "zod";

export const CategorySchema = z.object({
    id: z.number(),
    name: z.string(),
    img: z
        .string()
        .default(
            "https://res.cloudinary.com/dxhfq1g84/image/upload/v1698164979/thoughtful-gallery/noImage_byy3zm.jpg",
        )
        .optional(),
});

