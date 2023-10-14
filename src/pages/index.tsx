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
      <section className="h-screen">
        <div className="relative">
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

      <section className="h-screen">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="max-w-screen-lg text-gray-500 dark:text-gray-400 sm:text-lg">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Powering innovation at{" "}
              <span className="font-extrabold">200,000+</span> companies
              worldwide
            </h2>
            <p className="mb-4 font-light">
              Track work across the enterprise through an open, collaborative
              platform. Link issues across Jira and ingest data from other
              software development tools, so your IT support and operations
              teams have richer contextual information to rapidly respond to
              requests, incidents, and changes.
            </p>
            <p className="mb-4 font-medium">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </p>
            <a
              href="#"
              className="text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700 inline-flex items-center font-medium"
            >
              Learn more
              <svg
                className="ml-1 h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="h-screen">
        <div className="mx-auto max-w-screen-xl p-5 dark:bg-gray-800 dark:text-gray-100">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div
              className="relative flex h-96 w-full items-end justify-start bg-cover bg-center text-left dark:bg-gray-500"
              style={{
                backgroundImage:
                  'url("https://source.unsplash.com/random/240x320")',
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b dark:from-gray-900 dark:via-transparent dark:to-gray-900"></div>
              <div className="absolute left-0 right-0 top-0 mx-5 mt-3 flex items-center justify-between">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="tracki bgundefined px-3 py-2 text-xs font-semibold uppercase dark:text-gray-100"
                >
                  Politics
                </a>
                <div className="flex flex-col justify-start text-center dark:text-gray-100">
                  <span className="leadi tracki text-3xl font-semibold">
                    04
                  </span>
                  <span className="leadi uppercase">Aug</span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-md font-medium hover:underline dark:text-gray-100"
                >
                  {" "}
                  Autem sunt tempora mollitia magnam non voluptates
                </a>
              </h2>
            </div>
            <div
              className="relative flex h-96 w-full items-end justify-start bg-cover bg-center text-left dark:bg-gray-500"
              style={{
                backgroundImage:
                  'url("https://source.unsplash.com/random/241x320")',
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b dark:from-gray-900 dark:via-transparent dark:to-gray-900"></div>
              <div className="absolute left-0 right-0 top-0 mx-5 mt-3 flex items-center justify-between">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="tracki bgundefined px-3 py-2 text-xs font-semibold uppercase dark:text-gray-100"
                >
                  Health
                </a>
                <div className="flex flex-col justify-start text-center dark:text-gray-100">
                  <span className="leadi tracki text-3xl font-semibold">
                    01
                  </span>
                  <span className="leadi uppercase">Aug</span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-md font-medium hover:underline dark:text-gray-100"
                >
                  Inventore reiciendis aliquam excepturi
                </a>
              </h2>
            </div>
            <div
              className="relative flex h-96 w-full items-end justify-start bg-cover bg-center text-left dark:bg-gray-500"
              style={{
                backgroundImage:
                  'url("https://source.unsplash.com/random/242x320")',
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b dark:from-gray-900 dark:via-transparent dark:to-gray-900"></div>
              <div className="absolute left-0 right-0 top-0 mx-5 mt-3 flex items-center justify-between">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="tracki bgundefined px-3 py-2 text-xs font-semibold uppercase dark:text-gray-100"
                >
                  Science
                </a>
                <div className="flex flex-col justify-start text-center dark:text-gray-100">
                  <span className="leadi tracki text-3xl font-semibold">
                    28
                  </span>
                  <span className="leadi uppercase">Jul</span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-md font-medium hover:underline dark:text-gray-100"
                >
                  Officiis mollitia dignissimos commodi optio vero animi
                </a>
              </h2>
            </div>
            <div
              className="relative flex h-96 w-full items-end justify-start bg-cover bg-center text-left dark:bg-gray-500"
              style={{
                backgroundImage:
                  'url("https://source.unsplash.com/random/243x320")',
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b dark:from-gray-900 dark:via-transparent dark:to-gray-900"></div>
              <div className="absolute left-0 right-0 top-0 mx-5 mt-3 flex items-center justify-between">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="tracki bgundefined px-3 py-2 text-xs font-semibold uppercase dark:text-gray-100"
                >
                  Sports
                </a>
                <div className="flex flex-col justify-start text-center dark:text-gray-100">
                  <span className="leadi tracki text-3xl font-semibold">
                    19
                  </span>
                  <span className="leadi uppercase">Jul</span>
                </div>
              </div>
              <h2 className="z-10 p-5">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-md font-medium hover:underline dark:text-gray-100"
                >
                  Doloribus sit illo necessitatibus architecto exercitationem
                  enim
                </a>
              </h2>
            </div>
          </div>
        </div>
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
