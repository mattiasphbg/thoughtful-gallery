import { UserProfile, useUser } from "@clerk/nextjs";

import type { ReactElement } from "react";
import NestedLayout from "../../components/nested-layout";
import type { NextPageWithLayout } from "../_app";

import RootLayout from "~/components/rootLayot";

// import { api } from "~/utils/api";

const Page: NextPageWithLayout = () => {
    const { user } = useUser();

    return (
        <>
            <div className="flex  items-center justify-center">
                <UserProfile />

                {user?.primaryEmailAddress?.toString()}
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
