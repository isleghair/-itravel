import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductDetailState {
    loading: boolean;
    error: string | null;
    data: any
}

const initialState: ProductDetailState = {
    loading: true,
    error: null,
    data: null
}

export const getProductDetail = createAsyncThunk(
    "procductDetail/getProductDetail", // 第一个代表命名空间，第二个代表action
    async (touristRouteId: string, thunkAPI) => {
        const { data } = await axios.get(
            `http://localhost:3001/touristRoutes/${touristRouteId}`
        );
        return data;
    }
)

export const productDetailSlice = createSlice({
    name: "procductDetail",
    initialState,
    reducers: {},
    extraReducers: {
        [getProductDetail.pending.type]: (state) => {
            state.loading = true
        },
        [getProductDetail.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        },
        [getProductDetail.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
    }
})
