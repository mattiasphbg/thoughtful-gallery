import type { ReactElement } from "react";
import Layout from "../../components/layout";
import NestedLayout from "../../components/nested-layout";
import type { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return <div>Content of the third section</div>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default Page;
