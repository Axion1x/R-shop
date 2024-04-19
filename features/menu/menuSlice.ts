import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    menuIsOpen: false,
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
      toggleMenu(state){
          state.menuIsOpen = !state.menuIsOpen;
      }
    },
})
export const {toggleMenu} = menuSlice.actions;
export default menuSlice.reducer;