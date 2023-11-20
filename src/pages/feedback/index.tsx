import { useState, type ReactElement } from "react";
import Layout from "../../components/layout";
import NestedLayout from "../../components/nested-layout";
import type { NextPageWithLayout } from "../_app";

import AutoForm, { AutoFormSubmit } from "~/components/ui/auto-form";
import * as z from "zod";

import Image from "next/image";

import { api } from "~/utils/api";

const schema = z.object({
    name: z.string().nonempty({ message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    message: z.string().nonempty({ message: "Message is required" }),
});

const Page: NextPageWithLayout = () => {
    const { data } = api.identity.getAll.useQuery();
    const { mutate, isLoading, isSuccess } = api.feedback.add.useMutation();

    const onSubmit = () => {
        try {
            const updatedValues = {
                message: values.message ?? "",
                name: values.name ?? "",
                email: values.email ?? "",
            };

            const result = mutate(updatedValues);
        } catch (error) {
            // Handle the error
        }
    };

    const initialValues = {
        name: "",
        email: "",
        message: "",
    };

    const [values, setValues] =
        useState<Partial<z.infer<typeof schema>>>(initialValues);

    return (
        <>
            <section className="p-6 md:p-12">
                <div className="mx-auto max-w-4xl">
                    <h2 className="mb-4 text-3xl font-bold">Our Team</h2>
                    <div className="mb-8 grid gap-6 md:grid-cols-3">
                        {data
                            ?.filter((who) => who.role === "EDITOR")
                            .map((editor) => (
                                <div key={editor.id} className="text-center">
                                    {editor.imageUrl && (
                                        <Image
                                            alt="Team member"
                                            className="mx-auto mb-2 rounded-full"
                                            height={100}
                                            src={editor.imageUrl}
                                            style={{
                                                aspectRatio: "100/100",
                                                objectFit: "cover",
                                            }}
                                            width={100}
                                        />
                                    )}
                                    <h3 className="font-bold">{editor.name}</h3>
                                    <p className="text-gray-500">
                                        {editor.jobTitle}
                                    </p>
                                </div>
                            ))}
                    </div>
                    <h2 className="mb-4 text-3xl font-bold">Contact Us</h2>

                    <AutoForm
                        formSchema={schema}
                        values={values}
                        onSubmit={onSubmit}
                        onValuesChange={setValues}
                        fieldConfig={{
                            name: {
                                description: "Your name",
                            },
                            email: {
                                description: "Your email address",
                            },
                            message: {
                                description: "Your message",
                            },
                        }}
                    >
                        <AutoFormSubmit>
                            {" "}
                            {isLoading ? "Sending..." : "Send now"}
                        </AutoFormSubmit>
                        {isSuccess && " Success! \u2714"}
                    </AutoForm>
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
