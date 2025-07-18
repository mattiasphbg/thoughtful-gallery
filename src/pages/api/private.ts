import { clerkClient, getAuth } from "@clerk/nextjs/server";
import { NextApiRequest, NextApiResponse } from "next";

interface DeleteUserRequest {
    userId: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    // const { userId } = req.body as DeleteUserRequest;
    const { userId } = getAuth(req) as DeleteUserRequest;
    try {
        await clerkClient.users.deleteUser(userId);
        return res.status(200).json({ message: "Success" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error deleting user" });
    }
}
