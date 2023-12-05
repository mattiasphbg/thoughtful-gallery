import { clerkClient } from "@clerk/nextjs";
import { getAuth, buildClerkProps } from "@clerk/nextjs/server";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { userId } = getAuth(ctx.req);

    const user = userId
        ? await clerkClient.users.deleteUser(userId)
        : undefined;

    return { props: { ...buildClerkProps(ctx.req, { user }) } };
};
