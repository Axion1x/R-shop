import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    catalogIsOpen: false,
}

const menuSlice = createSlice({
    name: 'mobileCatalog',
    initialState,
    reducers: {
        toggleMobileCatalog(state){
            state.catalogIsOpen = !state.catalogIsOpen;
        }
    },
})
export const {toggleMobileCatalog} = menuSlice.actions;
export default menuSlice.reducer;