import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {productsReducer, ProductsSchema} from "@/features/products/productsSlice";
import {langReducer, LangSchema} from "@/features/lang/langSlice";
import {menuReducer, MenuSchema} from "@/features/menu/menuSlice";
import {CatalogSchema, mobileCatalogReducer} from "@/features/menu/mobileCatalog";
import {searchReducer, SearchSchema} from "@/features/menu/headerSearch";
import {cartReducer} from "@/features/cart/cartSlice";
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

const reducers = combineReducers({
    lang: langReducer,
    menu: menuReducer,
    mobileCatalog: mobileCatalogReducer,
    search: searchReducer,
    products: productsReducer,
    cart: cartReducer,
})


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

type StateSchema = {
    lang: LangSchema,
    menu: MenuSchema,
    mobileCatalog: CatalogSchema,
    search: SearchSchema,
    products: ProductsSchema,
}