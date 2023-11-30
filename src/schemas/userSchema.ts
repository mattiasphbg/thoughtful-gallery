import { z } from "zod";

const RoleEnum = z.enum(["USER", "ADMIN", "EDITOR"]);

export const userIdentitySchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string(),
    jobTitle: z.string().optional(),
    imageUrl: z
        .string()
        .default(
            "https://res.cloudinary.com/dxhfq1g84/image/upload/v1698164979/thoughtful-gallery/noImage_byy3zm.jpg",
        ),
    globalAdmin: z.boolean().optional().default(false),
    clerkId: z.string().optional(),
    createdAt: z
        .string()
        .optional()
        .default(() => new Date().toISOString()), // Adjusted default value
    updatedAt: z.string().optional(),
    userBio: z.string().optional(),
    role: RoleEnum.default("USER"),
    posts: z.array(z.unknown()), // Assuming the type of Post[]
    profile: z.unknown(), // Assuming the type of Profile
    artworks: z.array(z.unknown()), // Assuming the type of Artwork[]
});

export const userBioSchema = z.object({
    id: z.number(),
    userBio: z.string().optional(),
});
