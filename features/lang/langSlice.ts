
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentLanguage: "ua",
};

const langSlice = createSlice({
    name: "lang",
    initialState,
    reducers: {
        changeLanguage(state) {
            state.currentLanguage = state.currentLanguage === 'en' ? 'ua' : 'en';
        },
    },
});

export const { changeLanguage } = langSlice.actions;
export default langSlice.reducer;