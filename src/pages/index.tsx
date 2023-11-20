import type { ReactElement } from "react";
import NestedLayout from "../components/nested-layout";
import type { NextPageWithLayout } from "./_app";
import RootLayout from "~/components/rootLayot";
import Link from "next/link";
import Image from "next/image";

import { api } from "~/utils/api";

const Page: NextPageWithLayout = () => {
    const { data } = api.posts.allPost.useQuery();
    return (
        <>
            <main className="flex-1">
                <section
                    className="w-full bg-cover bg-center py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48"
                    style={{
                        backgroundImage:
                            "url(https://res.cloudinary.com/dxhfq1g84/image/upload/v1699282206/thoughtful-gallery/pexels-pixabay-460659_bdv15y.jpg)",
                    }}
                >
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                                    Welcome to the Virtual Museum
                                </h1>
                                <p className="max-w-[600px] text-white md:text-xl">
                                    Discover the wonders of art and history from
                                    the comfort of your own home.
                                </p>
                            </div>
                            <Link
                                className=" inline-flex h-10 w-96 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black"
                                href="#"
                            >
                                Start Exploring
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Featured Exhibits
                        </h2>
                        <div className="my-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {data?.map((e) => (
                                <div
                                    key={e.id}
                                    className="animate-fadeIn delay-300"
                                >
                                    <Image
                                        alt={e.title}
                                        className="mx-auto aspect-[1/1] overflow-hidden rounded-xl object-cover object-center sm:w-full"
                                        height="300"
                                        src={e.imageUrl}
                                        width="300"
                                    />
                                    <h3 className="mt-2 text-xl font-bold">
                                        {e.title}
                                    </h3>
                                </div>
                            ))}
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
