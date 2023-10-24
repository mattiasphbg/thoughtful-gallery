import type { ReactElement } from "react";
import NestedLayout from "../components/nested-layout";
import type { NextPageWithLayout } from "./_app";
import RootLayout from "~/components/rootLayot";
import Link from "next/link";
import Image from "next/image";
const Page: NextPageWithLayout = () => {
  return (
    <>
      <main className="flex-1">
        <section className="w-full bg-zinc-100 py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Welcome to the Virtual Museum
            </h1>
            <p className="my-4 max-w-[600px] text-zinc-500 dark:text-zinc-400 md:text-xl">
              Explore our digital collections and experience history from the
              comfort of your home.
            </p>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
              href="#"
            >
              Begin Tour
            </Link>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Exhibits
            </h2>
            <div className="my-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="animate-fadeIn">
                <Image
                  alt="Exhibit"
                  className="mx-auto aspect-[1/1] overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="300"
                  src="/placeholder.svg"
                  width="300"
                />
                <h3 className="mt-2 text-xl font-bold">Exhibit One</h3>
              </div>
              <div className="animate-fadeIn delay-100">
                <Image
                  alt="Exhibit"
                  className="mx-auto aspect-[1/1] overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="300"
                  src="/placeholder.svg"
                  width="300"
                />
                <h3 className="mt-2 text-xl font-bold">Exhibit Two</h3>
              </div>
              <div className="animate-fadeIn delay-200">
                <Image
                  alt="Exhibit"
                  className="mx-auto aspect-[1/1] overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="300"
                  src="/placeholder.svg"
                  width="300"
                />
                <h3 className="mt-2 text-xl font-bold">Exhibit Three</h3>
              </div>
              <div className="animate-fadeIn delay-300">
                <Image
                  alt="Exhibit"
                  className="mx-auto aspect-[1/1] overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="300"
                  src="/placeholder.svg"
                  width="300"
                />
                <h3 className="mt-2 text-xl font-bold">Exhibit Four</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
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
