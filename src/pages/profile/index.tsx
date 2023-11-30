import { useState, type ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import NestedLayout from "../../components/nested-layout";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import RootLayout from "~/components/rootLayot";

import { api } from "~/utils/api";

const Page: NextPageWithLayout = () => {
    const { data } = api.identity.getUserIdentity.useQuery();
    const { mutate } = api.identity.updateUserIdentityBio.useMutation();

    const [updatedBio, setUpdatedBio] = useState("");
    // Define a function to handle bio update
    const handleBioUpdate = () => {
        try {
            if (!data) {
                console.error("User data not available");
                return;
            }

            const updatedUserBioData = mutate({
                id: data?.id,
                userBio: updatedBio,
            });

            console.log("User bio updated:", updatedUserBioData);
            // Consider how to handle the success scenario, for example, updating local state or displaying a success message
        } catch (error) {
            console.error("Error updating user bio:", error);
            // Consider how to handle the error scenario, for example, displaying an error message to the user
        }
    };

    return (
        <>
            <div className="mx-auto w-full max-w-2xl space-y-8 p-6">
                <div className="flex items-center space-x-4">
                    <Avatar className="h-24 w-24">
                        <AvatarImage
                            alt="User profile avatar"
                            src={`${data?.imageUrl}`}
                        />
                        <AvatarFallback>{data?.name}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h1 className="text-2xl font-bold">{data?.name}</h1>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            Member since {data?.updatedAt?.toDateString()}
                        </p>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="space-y-1">
                        <h2 className="text-xl font-bold">Bio</h2>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            {data?.userBio}
                        </p>
                    </div>
                    <div className="space-y-1">
                        <h2 className="text-xl font-bold">
                            Contact Information
                        </h2>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            {data?.email}
                        </p>
                    </div>
                    <div className="space-y-1">
                        <h2 className="text-xl font-bold">
                            Update Information
                        </h2>
                        <form onSubmit={handleBioUpdate}>
                            <input
                                type="text"
                                value={updatedBio}
                                onChange={(e) => setUpdatedBio(e.target.value)}
                                placeholder="Enter new bio"
                            />
                            <button type="submit">Update Bio</button>
                        </form>
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
