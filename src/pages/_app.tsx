import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Header from "~/components/headfoot/Header";
import { Analytics } from "@vercel/analytics/react";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans();

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page);

    return getLayout(
        <main className={openSans.className}>
            <ClerkProvider {...pageProps}>
                <Header />
                <Component {...pageProps} />
                <Analytics />
            </ClerkProvider>
            ,
        </main>,
    );
}
export default api.withTRPC(MyApp);
