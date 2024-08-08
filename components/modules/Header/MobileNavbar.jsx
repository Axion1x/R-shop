import React from 'react';
import '@/app/globalStyles/mobileNav.scss';
import {useLang} from "@/hooks/useLang";
import Link from "next/link";
import {menuActions} from "@/features/menu/menuSlice";
import {useDispatch} from "react-redux";
import MobileCatalog from "@/components/modules/Header/MobileCatalog";
import {mobileCatalogActions} from "@/features/menu/mobileCatalog";

const MobileNavbar = () => {
    const {lang, translations} = useLang();
    const dispatch = useDispatch();

    const handleMenuClick = () =>{
        dispatch(menuActions.toggleMenu())
    }
    const handleCatalogClick = () =>{
        dispatch(mobileCatalogActions.toggleMobileCatalog());
    }
    return (
        <>
            <MobileCatalog />
            <div className='mobileNavContainer'>
                <ul className='mobileNav'>
                    <Link href='/homepage' className='mobile-navbar__btn mainImg'>
                        {translations[lang].breadcrumbs.main}
                    </Link>
                    <button
                        className='btn-reset mobile-navbar__btn catalogItem'
                        onClick={handleCatalogClick}
                    >
                        {translations[lang].breadcrumbs.catalog}
                    </button>
                    <Link className='btn-reset mobile-navbar__btn favourites' href='/favorites'>
                        {translations[lang].breadcrumbs.favorites}
                    </Link>
                    <Link className='btn-reset mobile-navbar__btn cart' href='/cart'>
                        {translations[lang].breadcrumbs.cart}
                    </Link>
                    <button
                        className='btn-reset mobile-navbar__btn more'
                        onClick={handleMenuClick}
                    >
                        {translations[lang].common.more}
                    </button>

                </ul>
            </div>
        </>
    );
};

export default MobileNavbar;