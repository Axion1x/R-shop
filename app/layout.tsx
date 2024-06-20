'use client'
import "bootstrap/dist/css/bootstrap.css";
import "./globalStyles/globals.css";
import "./globalStyles/header.scss";
import React from "react";
import Layout from "@/components/layouts/Layout";
import {Next13ProgressBar} from 'next13-progressbar'
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ua"
              suppressHydrationWarning
        >
        <body>
        <Next13ProgressBar height='4px' color='orange' showOnShallow></Next13ProgressBar>
        <Layout>{children}</Layout>
        </body>
        </html>
    );
}
