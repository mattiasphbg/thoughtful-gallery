import type { ReactElement } from "react";
import Layout from "../../components/layout";
import NestedLayout from "../../components/nested-layout";
import type { NextPageWithLayout } from "../_app";
import { Textarea } from "~/components/ui/textarea";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import Image from "next/image";
import { Input } from "~/components/ui/input";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <section className="p-6 md:p-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold">About Us</h1>
          <p className="mb-8 text-lg leading-relaxed">
            Welcome to our virtual museum. We are dedicated to bringing the
            experience of a physical museum into your digital space. Our mission
            is to make art and historical artifacts accessible to everyone,
            regardless of location. Since our founding in 2020, we have strived
            to curate and present high-quality digital reproductions of
            significant works of art and historical artifacts from around the
            world.
          </p>
          <h2 className="mb-4 text-3xl font-bold">Our Team</h2>
          <div className="mb-8 grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <Image
                alt="Team member"
                className="mx-auto mb-2 rounded-full"
                height={100}
                src="/placeholder.svg"
                objectFit="cover"
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
                src="/placeholder.svg"
                objectFit="cover"
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
                objectFit="cover"
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
