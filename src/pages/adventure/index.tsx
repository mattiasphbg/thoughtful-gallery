import type { ReactElement } from "react";
import Layout from "../../components/layout";
import NestedLayout from "../../components/nested-layout";
import type { NextPageWithLayout } from "../_app";
import MyTwoCanvas from "~/components/ui/twoDBackground";
const Page: NextPageWithLayout = () => {
  return (
    <>
      <section className=" h-screen">
        <div className="container">
          <MyTwoCanvas />
        </div>
      </section>

      <section className="h-screen">
        <div>Content of the third section</div>
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
