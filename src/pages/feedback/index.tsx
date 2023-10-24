import type { ReactElement } from "react";
import Layout from "../../components/layout";
import NestedLayout from "../../components/nested-layout";
import type { NextPageWithLayout } from "../_app";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import Image from "next/image";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <section className="p-6 md:p-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-3xl font-bold">Our Team</h2>
          <div className="mb-8 grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <Image
                alt="Team member"
                className="mx-auto mb-2 rounded-full"
                height={100}
                src="https://res.cloudinary.com/dxhfq1g84/image/upload/v1698164979/thoughtful-gallery/noImage_byy3zm.jpg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width={100}
              />
              <h3 className="font-bold">Jane Doe</h3>
              <p className="text-gray-500">Curator</p>
            </div>
            <div className="text-center">
              <Image
                alt="Team member"
                className="mx-auto mb-2 rounded-full"
                height={100}
                src="https://res.cloudinary.com/dxhfq1g84/image/upload/v1698164979/thoughtful-gallery/noImage_byy3zm.jpg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width={100}
              />
              <h3 className="font-bold">John Smith</h3>
              <p className="text-gray-500">Art Historian</p>
            </div>
            <div className="text-center">
              <Image
                alt="Team member"
                className="mx-auto mb-2 rounded-full"
                height={100}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width={100}
              />
              <h3 className="font-bold">Emily Johnson</h3>
              <p className="text-gray-500">Marketing Director</p>
            </div>
          </div>
          <h2 className="mb-4 text-3xl font-bold">Contact Us</h2>
          <form className="grid gap-4">
            <div>
              <Label className="text-base" htmlFor="name">
                Name
              </Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div>
              <Label className="text-base" htmlFor="email">
                Email
              </Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div>
              <Label className="text-base" htmlFor="message">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                rows={4}
              />
            </div>
            <Button className="w-full md:w-auto" type="submit">
              Submit
            </Button>
          </form>
        </div>
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
