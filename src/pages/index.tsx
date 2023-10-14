import type { ReactElement } from "react";
// import Layout from '../components/layout'
import NestedLayout from "../components/nested-layout";
import type { NextPageWithLayout } from "./_app";
// import { useSpring, animated } from '@react-spring/web'
import RootLayout from "~/components/rootLayot";
import { ModeToggle } from "~/components/ui/darkmodeToggle";

// import { api } from "~/utils/api";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <section>
        <div className=" relative">
          <video
            autoPlay
            muted
            loop
            className="absolute left-0 top-0 z-[-100] h-auto min-h-full w-auto min-w-full"
          >
            <source
              src="https://res.cloudinary.com/dxhfq1g84/video/upload/v1696680216/video/pexels-cottonbro-8388279_1080p_jpov9c.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="absolute left-1/2 top-[calc(50%-200px)] flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center rounded-lg">
          <h1 className="text-center text-5xl capitalize text-white ">
            Welcome!
          </h1>
          <h5 className="line-clamp-1 text-center text-white">
            Ready for a new adventure?
          </h5>
        </div>

        <ModeToggle />
      </section>
      <section className=""></section>
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
