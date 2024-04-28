import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNewProducts, getBestsellerProducts} from "@/api/main-page";
import ProductListItem from "@/components/modules/MainPage/ProductListItem/ProductListItem";
import styles from '@/styles/product-list-item/index.module.scss'
function ProductList() {
    const newProducts = useSelector(state => state.products.newProducts);
    const bestsellerProducts = useSelector(state => state.products.bestsellerProducts);
    const loading = useSelector(state => state.products.loading);
    const error = useSelector(state => state.products.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNewProducts());
        dispatch(getBestsellerProducts());
    }, [dispatch]);

    return (
        <div className={styles.container}>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <h2 className='site-title'>New Products</h2>
            <ul className ={styles.productsList}>
                {newProducts.map((product,id) => (
                    <ProductListItem key={id} item={product}/>
                ))}
            </ul>
            <h2 className='site-title' >Bestseller Products</h2>
            <ul className ={styles.productsList}>
                {bestsellerProducts.map((product,id) => (
                    <ProductListItem key={id} item={product}/>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
