import {createSlice} from "@reduxjs/toolkit";

const initialState:MenuSchema = {
    menuIsOpen: false,
}

export type MenuSchema = {
    menuIsOpen: boolean,
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

export const { actions: menuActions } = menuSlice;
export const { reducer: menuReducer } = menuSlice;