import type { ReactElement } from "react";
import NestedLayout from "../../components/nested-layout";
import type { NextPageWithLayout } from "../_app";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import RootLayout from "~/components/rootLayot";
import Image from "next/image";

import { api } from "~/utils/api";

const Page: NextPageWithLayout = () => {
    const { data, error, isLoading } = api.AllPost.useQuery();
    console.log(typeof data);
    // Add an if statement to check if the data has been fetched
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Handle errors
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!data) {
        return null;
    }
    return (
        <div>
            <section className="w-full py-8 md:py-16 lg:py-24">
                <div className="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                        News
                    </h1>
                    <p className="mt-2 text-lg text-zinc-500 md:text-xl lg:text-2xl">
                        Stay updated with the latest news from our museum
                    </p>
                    <form className="mt-6 flex space-x-4">
                        <Input
                            className="flex-1"
                            placeholder="Search articles"
                            type="text"
                        />
                        <Button type="submit">Search</Button>
                    </form>
                    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {data?.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col items-start space-y-4"
                            >
                                <Image
                                    alt="Placeholder"
                                    className="w-full rounded-lg object-cover shadow-lg"
                                    height={200}
                                    src={item.imageUrl}
                                    style={{
                                        aspectRatio: "400/250",
                                        objectFit: "cover",
                                    }}
                                    width={400}
                                />
                                <h2 className="text-2xl font-bold">
                                    {item.title}
                                </h2>
                                <p className="text-zinc-500">
                                    {item.description}
                                </p>
                                <Button variant="outline">Read more</Button>
                            </div>
                        ))}
                    </div>
                    <form className="mt-10 flex space-x-4">
                        <Input
                            className="flex-1"
                            placeholder="Subscribe for more updates"
                            type="email"
                        />
                        <Button type="submit">Subscribe</Button>
                    </form>
                </div>
            </section>
        </div>
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
