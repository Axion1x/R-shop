'use client'
import Header from "@/components/modules/Header/Header";
import React, {useEffect, useState} from "react";
import {store} from "@/features/store";
import {Provider} from "react-redux";
import MobileNavbar from "@/components/modules/Header/MobileNavbar";
import FooterMy from "@/components/modules/Footer/Footer";

const Layout = ({children}: { children: React.ReactNode }) => {


    const [screenWidth, setScreenWidth] = useState<number | null>(null);

    useEffect(() => {
        const updateScreenWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        // Initial screen width
        setScreenWidth(window.innerWidth);

        // Event listener for window resize
        window.addEventListener('resize', updateScreenWidth);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, []);

    return (
        <Provider store={store}>
            <Header/>
            {children}
            <FooterMy/>
            <>{screenWidth <= 800 ? <MobileNavbar/> : null}</>
        </Provider>
    );
};

export default Layout;