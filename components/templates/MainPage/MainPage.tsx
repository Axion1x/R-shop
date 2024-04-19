'use client'

import React from 'react';
import Hero from "@/components/modules/MainPage/Hero/Hero";
import '@/app/globalStyles/mainPage.scss';
import Categories from "@/components/modules/MainPage/Categories/Categories";
import Test from "@/components/modules/bestsellers/Test";

const MainPage = () => {
    return (
        <main className='main'>
            <Hero />
            <Categories />
            <Test />
        </main>
    );
};

export default MainPage;