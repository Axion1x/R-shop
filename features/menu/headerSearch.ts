import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    searchIsOpen: false,
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

export const {toggleSearch} = searchSlice.actions;
export default searchSlice.reducer;