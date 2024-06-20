import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    catalogCategoryOptions: {
        сategoryOptions: [],
    },
    sizesOptions: [
        { id: 1, size: 'S', checked: false },
        { id: 2, size: 'L', checked: false },
        { id: 3, size: 'M', checked: false },
        { id: 4, size: 'XL', checked: false },
        { id: 5, size: 'XXL', checked: false },
    ],
    colorsOptions: [
        { id: 1, colorCode: 'purple', checked: false, colorText: '' },
        { id: 2, colorCode: 'yellow', checked: false, colorText: '' },
        { id: 3, colorCode: 'orange', checked: false, colorText: '' },
        { id: 4, colorCode: 'black', checked: false, colorText: '' },
        { id: 5, colorCode: 'white', checked: false, colorText: '' },
    ],
    sizes: [],
    colors: [],
    filtersPopup: false,
};

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        setCatalogCategoryOptions: (state, action) => {
            state.catalogCategoryOptions = {
                ...state.catalogCategoryOptions,
                ...action.payload,
            };
        },
        setSizesOptions: (state, action) => {
            state.sizesOptions = action.payload;
        },
        updateSizesOptionBySize: (state, action) => {
            state.sizesOptions = state.sizesOptions.map((item) =>
                item.size === action.payload ? { ...item, checked: true } : item
            );
        },
        setColorsOptions: (state, action) => {
            state.colorsOptions = action.payload;
        },
        updateColorsOptionByCode: (state, action) => {
            state.colorsOptions = state.colorsOptions.map((item) =>
                item.colorCode === action.payload ? { ...item, checked: true } : item
            );
        },
        setSizes: (state, action) => {
            state.sizes = action.payload;
        },
        setColors: (state, action) => {
            state.colors = action.payload;
        },
        setFiltersPopup: (state, action) => {
            state.filtersPopup = action.payload;
        },
    },
});

export const { actions: catalogActions } = catalogSlice;
export const { reducer: catalogReducer } = catalogSlice;