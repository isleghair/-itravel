import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ActivityState {
    loading: boolean;
    error: string | null;
    data: any
}

const initialState: ActivityState = {
    loading: true,
    error: null,
    data: null
}

export const getActivityList = createAsyncThunk(
    "activity/getActivityList",
    async () => {
        const { data } = await axios.get(
            `http://localhost:3001/activities/`
        );
        return data;
    }
)

export const activitySlice = createSlice({
    name: "activity",
    initialState,
    reducers: { // 正常的action写在这里

    },
    extraReducers: {
        [getActivityList.pending.type]: (state) => {
            state.loading = true
        },
        [getActivityList.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        },
        [getActivityList.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})