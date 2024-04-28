import {createSlice} from "@reduxjs/toolkit";

const initialState:SearchSchema = {
    searchIsOpen: false,
}
export type SearchSchema = {
    searchIsOpen: boolean,
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers:{
        toggleSearch(state){
            state.searchIsOpen = !state.searchIsOpen;
        }
    }
})


export const { actions: searchActions } = searchSlice;
export const { reducer: searchReducer } = searchSlice;