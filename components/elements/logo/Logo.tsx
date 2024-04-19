import React from 'react';
import Link from "next/link";
import "@/app/globalStyles/globals.css";

const Logo = () => {
    return (
        <Link className="logo" href='/'>
            <img src="/img/logo.svg" alt="Rusty logo"/>
        </Link>
    );
};

export default Logo;