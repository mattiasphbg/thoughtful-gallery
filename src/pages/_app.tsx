import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Header from "~/components/headfoot/Header";

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
        <ClerkProvider {...pageProps}>
            <Header />
            <Component {...pageProps} />
        </ClerkProvider>,
    );
}
export default api.withTRPC(MyApp);
