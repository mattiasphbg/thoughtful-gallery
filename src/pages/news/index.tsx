import { ReactElement } from "react";
import Image from "next/image";
import Layout from "../../components/layout";
import NestedLayout from "../../components/nested-layout";
import { NextPageWithLayout } from "../_app";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Input />
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
