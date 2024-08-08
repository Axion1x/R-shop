import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import "@/app/globalStyles/globals.css";

const Logo = () => {
    return (
        <Link className="logo" href='/' passHref>
            <Image src="/img/logo.svg" alt="Rusty logo" width={200} height={100} />
        </Link>
    );
};

export default Logo;
