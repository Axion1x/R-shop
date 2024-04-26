
import "bootstrap/dist/css/bootstrap.css";
import "./globalStyles/globals.css";
import "./globalStyles/header.scss";
import React from "react";
import Layout from "@/components/layouts/Layout";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ua"
              suppressHydrationWarning
        >
        <body><Layout>{children}</Layout></body>
        </html>
    );
}
