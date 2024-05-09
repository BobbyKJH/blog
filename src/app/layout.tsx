import React from "react";

import type { Metadata } from "next";

import { Inter } from "next/font/google";

import { Blog } from "@/utils/type";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BobbyKJH Blog",
  description: "Generated by create next app",
};

const RootLayout: React.FC<Blog.Layout> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
