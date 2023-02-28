import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ActivityDetailState {
    loading: boolean;
    error: string | null;
    data: any
}

const initialState: ActivityDetailState = {
    loading: true,
    error: null,
    data: null
}

export const getActivityDetail = createAsyncThunk(
    "activityDetail/getActivityDetail",
    async (activityId: string) => {
        const { data } = await axios.get(
            `http://localhost:3001/activityDetail/${activityId}`
        );
        return data;
    }
)

export const activityDetailSlice = createSlice({
    name: "activityDetail",
    initialState,
    reducers: { // 正常的action写在这里

    },
    extraReducers: {
        [getActivityDetail.pending.type]: (state) => {
            state.loading = true
        },
        [getActivityDetail.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        },
        [getActivityDetail.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})