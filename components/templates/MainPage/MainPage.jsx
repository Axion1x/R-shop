'use client'

import React from 'react';
import Hero from "@/components/modules/MainPage/Hero/Hero";
import '@/app/globalStyles/mainPage.scss';
import Categories from "@/components/modules/MainPage/Categories/Categories";
import ProductList from "@/components/modules/MainPage/ProducList/ProductList";

const MainPage = () => {
    return (
        <main className='main'>
            <Hero />
            <Categories />
            <ProductList />
        </main>
    );
};

export default MainPage;