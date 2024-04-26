import { getNewProducts, getBestsellerProducts } from "@/api/main-page";
import {createSlice} from "@reduxjs/toolkit";
import {IProduct} from "@/types/modules";

const initialState:ProductsSchema = {
    newProducts: [],
    bestsellerProducts: [],
    loading: false,
    error: null
};
export type ProductsSchema = {
    newProducts: IProduct[],
    bestsellerProducts: IProduct[],
    loading: boolean,
    error: string | null,
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getNewProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getNewProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.newProducts = action.payload;
            })
            .addCase(getNewProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || null;
            })
            .addCase(getBestsellerProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getBestsellerProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.bestsellerProducts = action.payload;
            })
            .addCase(getBestsellerProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || null;
            });
    }
});

export const { actions: productsActions } = productsSlice;
export const { reducer: productsReducer } = productsSlice;