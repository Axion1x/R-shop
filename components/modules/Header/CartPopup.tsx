import {withClickOutside} from "@/components/hocs/withClickOutside";
import React, {forwardRef, useEffect, useState} from "react";
import {IWrappedComponentProps} from "@/types/hocs";
import Link from "next/link";
import "@/app/globalStyles/menu.scss"
import {useLang} from "@/hooks/useLang";
import {AnimatePresence} from "framer-motion";
import { motion } from "framer-motion"
import {useSelector} from "react-redux";
import CartItem from "@/components/modules/Header/CartItem";


const CartPopup = forwardRef<HTMLDivElement, IWrappedComponentProps>(
    ({open,setOpen}, ref) =>{
        const {lang, translations} = useLang();
        const cartList = useSelector((state)=> state.cart.cartList);
        const totalPrice = cartList.reduce((total, item) => {
            return total + (item.price * item.count);
        }, 0);
        const handleShowPopup = () => {
            setOpen(true);
        }
        const handleHidePopup = () => {
            setOpen(false);
        }

        return (
            <div className='cartPopup' ref={ref}>
                <Link
                    href='/cart'
                    className="headerItemLink headerItemLink--bucket"
                    onMouseEnter={handleShowPopup} // Move onMouseEnter event here
                />
                <AnimatePresence >
                    {open && (

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className='customContainer'
                            onMouseLeave={handleHidePopup}
                        >
                            <div className="cartHeader">
                                <div className="cartTitle" >{translations[lang].breadcrumbs.cart}</div>
                                <button className="closeButton" onClick={handleHidePopup}></button>
                            </div>
                            <div className='cartContent'>
                                {cartList.length ? (
                                    cartList.map((el, index) => (
                                        <CartItem key={index} item={el} />
                                    ))) : (<div className='empty'></div>)}
                            </div>

                            <div className="cartFooter">
                                <div className="cartFooterContent">
                                    <div className="cartFooterTitle">{translations[lang].common.order_price}:</div>
                                    <div className="cartPrice">{totalPrice}</div>
                                </div>
                                <button className="getOrder">
                                    {translations[lang].breadcrumbs.order}
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        )
    }
)

CartPopup.displayName = 'CartPopup';
export default withClickOutside(CartPopup);

