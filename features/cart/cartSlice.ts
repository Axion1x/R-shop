import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartList: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart(state, action) {
            if (!state.cartList.some(item=> item._id === action.payload._id)) {
                state.cartList.push(action.payload);
            }
        },
        removeCart(state, action) {
            const itemToRemove = action.payload;
            state.cartList = state.cartList.filter(item => item._id !== itemToRemove._id);
        },
        countCartPlus(state, action) {
            state.cartList.forEach(item => {
                if (item._id === action.payload._id) {
                    item.count += 1; // Збільшуємо лічильник
                }
            });
        },
        countCartMinus(state, action) {
            state.cartList.forEach(item => {
                if (item._id === action.payload._id) {
                    item.count -= 1; // Збільшуємо лічильник
                }
            });
        },



    }
});

export const { actions: cartActions } = cartSlice;
export const { reducer: cartReducer } = cartSlice;
