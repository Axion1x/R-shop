import {createSlice} from "@reduxjs/toolkit";

const initialState:CatalogSchema = {
    catalogIsOpen: false,
}
export type CatalogSchema = {
    catalogIsOpen: boolean,
}

const mobileCatalogSlice = createSlice({
    name: 'mobileCatalog',
    initialState,
    reducers: {
        toggleMobileCatalog(state){
            state.catalogIsOpen = !state.catalogIsOpen;
        }
    },
})

export const { actions: mobileCatalogActions } = mobileCatalogSlice;
export const { reducer: mobileCatalogReducer } = mobileCatalogSlice;