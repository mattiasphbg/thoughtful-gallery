import { UserProfile } from "@clerk/nextjs";

import type { ReactElement } from "react";
import NestedLayout from "../../components/nested-layout";
import type { NextPageWithLayout } from "../_app";

import RootLayout from "~/components/rootLayot";

const Page: NextPageWithLayout = () => {
    return (
        <>
            <div className="flex  items-center justify-center">
                <UserProfile />
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
