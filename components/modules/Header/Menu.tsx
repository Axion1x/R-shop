'use client'
import React, {useState, useEffect} from 'react';
import '@/app/globalStyles/menu.scss';
import {useDispatch, useSelector} from "react-redux";
import {toggleMenu} from "@/features/menu/menuSlice";
import Logo from "@/components/elements/logo/Logo";
import Accordion from "@/components/modules/Accordion/Accordion";
import {changeLanguage} from "@/features/lang/langSlice";

const Menu = () => {
    const dispatch = useDispatch();
    const toggleMenuState = useSelector((state) => state.menu.menuIsOpen);

    useEffect(() => {
        if (toggleMenuState) {
            document.body.classList.add('stopScroll');
        } else {
            document.body.classList.remove('stopScroll');
        }
    }, [toggleMenuState]);
    const handleClick = () => {
        dispatch(changeLanguage(1))
    }


    const handleMenuToggle = () => {
        dispatch(toggleMenu(!toggleMenuState));
    };

    return (
        <div className={`menuBg ${toggleMenuState ? 'active' : ''}`}>
            <div className="menuContainer">
                <div className="menuContent">
                    <div className="mainCategory">
                        <button className="closeButton" onClick={handleMenuToggle}></button>
                        <Logo/>
                        <div className="menuControl">
                            <button
                                className='translate'
                                onClick={handleClick}
                            >EN
                            </button>
                            <button
                                onClick={handleClick}
                                className='translate'
                            >UA
                            </button>
                        </div>
                        <Accordion/>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Menu;