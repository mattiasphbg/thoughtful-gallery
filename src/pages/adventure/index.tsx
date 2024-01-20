import type { ReactElement } from "react";
import Layout from "../../components/layout";
import NestedLayout from "../../components/nested-layout";
import type { NextPageWithLayout } from "../_app";
import ImageWithFrames from "~/components/ui/imageWithFrames";

import { api } from "~/utils/api";

const { data } = api.category.getAll.useQuery();

const pexel = (id: number) =>
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;
const images = [
    // Front
    { position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(1103970) },
    // Back
    {
        position: [-0.8, 0, -0.6],
        rotation: [0, 0, 0],
        url: "https://res.cloudinary.com/dxhfq1g84/image/upload/v1704992053/thoughtful-gallery/hmkdkssu9fdpxzk1fxrr.jpg",
    },
    { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(310452) },
    // // Left
    {
        position: [-1.75, 0, 0.25],
        rotation: [0, Math.PI / 2.5, 0],
        url: pexel(327482),
    },
    {
        position: [-2.15, 0, 1.5],
        rotation: [0, Math.PI / 2.5, 0],
        url: pexel(325185),
    },
    {
        position: [-2, 0, 2.75],
        rotation: [0, Math.PI / 2.5, 0],
        url: pexel(358574),
    },
    // // Right
    {
        position: [1.75, 0, 0.25],
        rotation: [0, -Math.PI / 2.5, 0],
        url: pexel(227675),
    },
    {
        position: [2.15, 0, 1.5],
        rotation: [0, -Math.PI / 2.5, 0],
        url: pexel(911738),
    },
    {
        position: [2, 0, 2.75],
        rotation: [0, -Math.PI / 2.5, 0],
        url: pexel(1738986),
    },
];

const Page: NextPageWithLayout = () => {
    return (
        <>
            <section className=" h-screen">
                <ImageWithFrames images={images} />
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
