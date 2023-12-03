import { useState, useEffect, type ReactElement, ChangeEvent } from "react";
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
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "~/components/ui/alert-dialog";

import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { clerkClient, useUser } from "@clerk/nextjs";
import { api } from "~/utils/api";

const Page: NextPageWithLayout = () => {
    const { data } = api.identity.getUserIdentity.useQuery();
    const { mutate } = api.identity.updateUserIdentityBio.useMutation();
    const [updatedBio, setUpdatedBio] = useState("");
    const [letterCount, setLetterCount] = useState<number>(0);

    const { user } = useUser();

    if (!user) return null;
    const updateUser = async () => {
        const t = user.id;
        const tt = await clerkClient.users.deleteUser(t);
    };

    // const deleteUser = async () => {
    //     try {
    //         await cl.delete();
    //         console.log("User deleted successfully");
    //     } catch (error) {
    //         console.error("Error deleting user:", error);
    //     }
    // };

    const handleBioChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const bio: string = e.target.value;
        setUpdatedBio(bio);

        const letters: string[] = bio.split("");
        const filteredLetters: string[] = letters.filter((l) => /\w/.test(l));
        setLetterCount(filteredLetters.length);
    };

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
                                            onChange={handleBioChange}
                                        />
                                        <div className="-mt-4 flex justify-end">
                                            {letterCount}/2500
                                        </div>
                                        <DialogFooter>
                                            <Button
                                                type="submit"
                                                disabled={letterCount > 2500}
                                            >
                                                Save changes
                                            </Button>
                                        </DialogFooter>
                                    </form>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className="space-y-1">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="outline">
                                    Delete account
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        Are you absolutely sure?
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will
                                        permanently delete your account and
                                        remove your data from our servers.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction
                                        onClick={() =>
                                            console.log(updateUser())
                                        }
                                    >
                                        Yes, delete account
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
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
