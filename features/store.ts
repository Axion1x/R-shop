import {configureStore} from "@reduxjs/toolkit";
import langReducer from './lang/langSlice'
import menuReducer from './menu/menuSlice'
import mobileCatalogReducer from './menu/mobileCatalog'
import searchReducer from './menu/headerSearch'
import productsReducer from './products/productsSlice'
export const store = configureStore({
    reducer:{
        lang: langReducer,
        menu: menuReducer,
        mobileCatalog: mobileCatalogReducer,
        search: searchReducer,
        products: productsReducer,
    },

})


