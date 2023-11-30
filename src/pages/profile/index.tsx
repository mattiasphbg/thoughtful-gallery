import { useState, type ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import RootLayout from "~/components/rootLayot";
import NestedLayout from "../../components/nested-layout";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

import { api } from "~/utils/api";

const Page: NextPageWithLayout = () => {
    const { data } = api.identity.getUserIdentity.useQuery();
    const { mutate } = api.identity.updateUserIdentityBio.useMutation();

    const [updatedBio, setUpdatedBio] = useState("");

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
        } catch (error) {
            console.error("Error updating user bio:", error);
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
                        <h2 className="text-xl font-bold"></h2>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">Edit Profile</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Edit profile</DialogTitle>
                                    <DialogDescription>
                                        Make changes to your profile here. Click
                                        save when youre done.
                                    </DialogDescription>
                                </DialogHeader>
                                <Label>Bio </Label>
                                <div className="grid gap-4 py-4">
                                    <form onSubmit={handleBioUpdate}>
                                        <Textarea
                                            placeholder="Enter new bio"
                                            className="mb-5 resize-none "
                                            value={updatedBio}
                                            onChange={(e) =>
                                                setUpdatedBio(e.target.value)
                                            }
                                        />

                                        <DialogFooter>
                                            <Button type="submit">
                                                Save changes
                                            </Button>
                                        </DialogFooter>
                                    </form>
                                </div>
                            </DialogContent>
                        </Dialog>
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
