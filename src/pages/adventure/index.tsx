import type { ReactElement } from "react";
import Layout from "../../components/layout";
import NestedLayout from "../../components/nested-layout";
import type { NextPageWithLayout } from "../_app";
import ImageWithFrames from "~/components/ui/imageWithFrames";
const Page: NextPageWithLayout = () => {
    return (
        <>
            <section className=" h-screen">
                <ImageWithFrames />
            </section>
        </>
    );
};

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    );
};

export default Page;
