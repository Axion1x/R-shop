
import api from './apiInstance'
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getNewProducts = createAsyncThunk(
    'products/getNewProducts',
    async () => {
        const response = await api.get('/api/goods/new');
        return response.data;
    }
);

export const getBestsellerProducts = createAsyncThunk(
    'products/getBestsellerProducts',
    async () => {
        const response = await api.get('/api/goods/bestsellers');
        return response.data;
    }
);