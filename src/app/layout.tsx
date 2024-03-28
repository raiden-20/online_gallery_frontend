import type { Metadata } from "next";
import {Roboto} from "next/font/google";
import React from "react";

import '@/scss/globals/globals.scss'
import '@/scss/globals/pages.scss'

const inter = Roboto({weight: '400' , subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
