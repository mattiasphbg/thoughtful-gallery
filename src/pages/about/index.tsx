import type { ReactElement } from "react";
// import Link from "next/link";
import Layout from "../../components/layout";
import RootLayout from "../../components/rootLayot";
import NestedLayout from "../../components/nested-layout";
import type { NextPageWithLayout } from "../_app";
import Image from "next/image";

import { api } from "~/utils/api";

const Page: NextPageWithLayout = () => {
    const { data } = api.allItems.useQuery();
    return (
        <>
            <section className="flex flex-col justify-between">
                <main className="flex flex-col gap-8 p-6 md:p-12">
                    <h1 className="text-3xl font-bold md:text-5xl">
                        About the Museum
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        The Virtual Museum was established in 2023 with the aim
                        of making art and history accessible to all, regardless
                        of geography or mobility. Our mission is to inspire and
                        educate through the digital representation of valuable
                        artworks and historic artifacts.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                        The museum exhibits a vast range of artworks and
                        historic artifacts from all around the world. Every
                        piece in our collection has been meticulously digitized
                        and curated to provide a rich and immersive experience
                        for our visitors.
                    </p>
                    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
                        <div className="flex flex-col gap-4">
                            <Image
                                alt="Artwork 1"
                                className="aspect-square w-full overflow-hidden rounded-lg border border-zinc-200 object-cover dark:border-zinc-800"
                                height={200}
                                src="https://res.cloudinary.com/dxhfq1g84/image/upload/v1698164979/thoughtful-gallery/noImage_byy3zm.jpg"
                                width={200}
                                priority={false}
                            />
                            <h2 className="text-xl font-bold">Artwork 1</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                This is a description of Artwork 1.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Image
                                alt="Artwork 2"
                                className="aspect-square w-full overflow-hidden rounded-lg border border-zinc-200 object-cover dark:border-zinc-800"
                                height={200}
                                src="https://res.cloudinary.com/dxhfq1g84/image/upload/v1698164979/thoughtful-gallery/noImage_byy3zm.jpg"
                                width={200}
                                priority={false}
                            />
                            <h2 className="text-xl font-bold">Artwork 2</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                This is a description of Artwork 2.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Image
                                alt="Artwork 3"
                                className="aspect-square w-full overflow-hidden rounded-lg border border-zinc-200 object-cover dark:border-zinc-800"
                                height={200}
                                src="https://res.cloudinary.com/dxhfq1g84/image/upload/v1698164979/thoughtful-gallery/noImage_byy3zm.jpg"
                                width={200}
                                priority={false}
                            />
                            <h2 className="text-xl font-bold">Artwork 3</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                This is a description of Artwork 3.
                            </p>
                        </div>
                    </section>
                </main>
            </section>
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
