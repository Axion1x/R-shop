import React, {useState} from 'react';
import {cartActions} from "@/features/cart/cartSlice";
import {useDispatch} from "react-redux";
import Image from 'next/image';

const CartItem = (element) => {
    const item = element.item;
    const dispatch = useDispatch();
    
    const handleClickButtonStop = (e) =>{
        e.stopPropagation();
        dispatch(cartActions.removeCart(item));
    }

    return (
        <div className='cartItemContent'>
            <Image 
                src={item.images[0]} 
                className='cartItemImg' 
                alt={item.name} 
                width={50} 
                height={200} 
                layout="responsive" 
            />
            <div className='cartItemContainer'>
                <div className="cartItemHeader">
                    {item.name}
                    <div className="cartListButton" onClick={handleClickButtonStop}></div>
                </div>
                <div className="cartItemFooter">
                    <div className="counter">
                        <button
                            className={`minus ${item.count === 1 ? "disabled" : ''}`}
                            onClick={() => {
                                if (item.count > 1) {
                                    dispatch(cartActions.countCartMinus(item));
                                }
                            }}></button>
                        <div className="count">{item.count}</div>
                        <button
                            className={`plus ${item.count === 10 ? "disabled" : ''}`}
                            onClick={() => {
                                if (item.count < 10) {
                                    dispatch(cartActions.countCartPlus(item));
                                }
                            }}
                        ></button>
                    </div>
                    <div className="price">{item.price * item.count}</div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
