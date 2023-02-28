import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductSearchState {
    loading: boolean;
    error: string | null;
    data: any;
    pagination: any
}

const initialState: ProductSearchState = {
    loading: true,
    error: null,
    data: null,
    pagination: null
}

export const searchProduct = createAsyncThunk(
    "productSearch/searchProduct",
    async (paramaters: {
        keywords: string,
        nextPage: string | number,
        pageSize: string | number,
    }, thunkAPI) => {
        let url = `http://localhost:3001/touristRoutes?pageNumber=${paramaters.nextPage}&pageSize=${paramaters.pageSize}`
        if (paramaters.keywords) {
            url += `&keyword=${paramaters.keywords}`
        }
        console.log(url)
        const response = await axios.get(url);
        console.log(response.data)
        return {
            data: response.data,
            // pagination: JSON.parse(response.headers["x-pagination"])
            pagination: 10
        };
    }
)

export const productSearchSlice = createSlice({
    name: "productSearch",
    initialState,
    reducers: {},
    extraReducers: {
        [searchProduct.pending.type]: (state) => {
            state.loading = true
        },
        [searchProduct.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.data = action.payload.data;
            state.pagination = action.payload.pagination;
            state.error = null;
        },
        [searchProduct.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
    }
})