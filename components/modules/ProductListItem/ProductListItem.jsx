import React from 'react';
import { useLang } from "@/hooks/useLang";
import styles from '@/styles/product-list-item/index.module.scss';
import Image from 'next/image';
import Link from "next/link";
import {useDispatch} from "react-redux";
import { cartActions } from "@/features/cart/cartSlice";

const ProductListItem = ({ item }) => {
    const { lang, translations } = useLang();
    const dispatch = useDispatch();

    const handleClickButton = (e) => {
        const newItem = {...item, count: 1}
        e.stopPropagation();
        dispatch(cartActions.addCart(newItem));

    }

    return (
        <div className={`${styles.card}`}>
            <div className={styles.imageContainer}>
                <Link href='/'>
                        <Image
                            className={styles.image}
                            src={item.images[0]}
                            alt='Cloth'
                            height={500}
                            width={500}
                        />
                </Link>
                <div className={styles.buttonsContainer}>
                    {/*buttons*/}
                </div>
            </div>
            <div className={styles.cardFooter}>
                <div className={styles.descr}>
                    {item.name}
                    {item.popularity}
                </div>
                <div className={styles.priceGroup}>
                    {item.price}
                    <div
                        className={styles.button}
                        onClick={handleClickButton}
                    >{translations[lang].order.total}</div>
                </div>
            </div>
        </div>
    )
};

export default ProductListItem;
