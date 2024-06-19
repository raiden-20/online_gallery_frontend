import type {Metadata} from "next";
import {Roboto} from "next/font/google";
import React, {Suspense} from "react";

import '@/scss/globals/globals.scss'
import '@/scss/globals/pages.scss'
import {ProviderMain} from "../../utils/providerMain";
import {YandexMetric} from "../../utils/YandexMetric";

const inter = Roboto({weight: '400', subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Lindéro | online gallery",
    description: "Online gallery for sale of paintings",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ProviderMain>
            <Suspense>
                <YandexMetric/>
            <html lang="en">
            <head>
                <link rel="icon" href="/main_icon.ico" />
            </head>
            <body className={inter.className}>{children}</body>
            </html>
            </Suspense>
        </ProviderMain>
    );
}
