'use client'
import Header from "@/components/modules/Header/Header";
import React, { useEffect, useState } from "react";
import { persistor, store } from "@/features/store";
import { Provider } from "react-redux";
import MobileNavbar from "@/components/modules/Header/MobileNavbar";
import FooterMy from "@/components/modules/Footer/Footer";
import { PersistGate } from 'redux-persist/integration/react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [screenWidth, setScreenWidth] = useState<number | null>(null);

    useEffect(() => {
        const updateScreenWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        // Initial screen width
        updateScreenWidth();

        // Event listener for window resize
        window.addEventListener('resize', updateScreenWidth);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, []);

    // Conditional rendering based on screenWidth if it's not null
    const isMobileView = screenWidth !== null && screenWidth <= 800;

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Header />
                {children}
                <FooterMy />
                {isMobileView && <MobileNavbar />}
            </PersistGate>
        </Provider>
    );
};

export default Layout;
