import { UserProfile, useUser } from "@clerk/nextjs";

import type { ReactElement } from "react";
import NestedLayout from "../../components/nested-layout";
import type { NextPageWithLayout } from "../_app";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

import RootLayout from "~/components/rootLayot";

import { api } from "~/utils/api";

const Page: NextPageWithLayout = () => {
    // const { user } = useUser();
    const { data } = api.identity.getUserIdentity.useQuery();

    return (
        <>
            <div className="mx-auto w-full max-w-2xl space-y-8 p-6">
                <div className="flex items-center space-x-4">
                    <Avatar className="h-24 w-24">
                        <AvatarImage
                            alt="User profile avatar"
                            src="/placeholder-avatar.jpg"
                        />
                        <AvatarFallback>UP</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h1 className="text-2xl font-bold">Username</h1>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            Member since 2023
                        </p>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="space-y-1">
                        <h2 className="text-xl font-bold">Bio</h2>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            This is a user bio. It contains a brief summary
                            about the user profile.
                        </p>
                    </div>
                    <div className="space-y-1">
                        <h2 className="text-xl font-bold">
                            Contact Information
                        </h2>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            {data?.email}
                        </p>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            +1 234 567 890
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <RootLayout>
            <NestedLayout>{page}</NestedLayout>
        </RootLayout>
    );
};

export default Page;
