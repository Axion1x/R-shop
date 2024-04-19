import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNewProducts, getBestsellerProducts} from "@/api/main-page";

function Test() {
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
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <h2>New Products</h2>
            <ul>
                {newProducts.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
            <h2>Bestseller Products</h2>
            <ul>
                {bestsellerProducts.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Test;
