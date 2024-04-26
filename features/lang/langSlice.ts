
import { createSlice } from "@reduxjs/toolkit";

const initialState:LangSchema = {
    currentLanguage: "ua",
};
export type LangSchema = {
    currentLanguage: string
}

const langSlice = createSlice({
    name: "lang",
    initialState,
    reducers: {
        changeLanguage(state) {
            state.currentLanguage = state.currentLanguage === 'en' ? 'ua' : 'en';
        },
    },
});

export const { actions: langActions } = langSlice;
export const { reducer: langReducer } = langSlice;