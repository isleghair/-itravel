import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
    loading: boolean;
    error: string | null;
    token: string | null;
}

const initialState: UserState = {
    loading: false,
    error: null,
    token: null
}

export const signIn = createAsyncThunk(
    "user/signIn",
    async (paramaters: {
        email: string,
        password: string,
    }, thunkAPI) => {
        const { data } = await axios.get(
            `http://localhost:3001/login`
        );
        console.log(data)
        return data;
    }
)

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logOut: (state) => {
            state.token = null;
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: {
        [signIn.pending.type]: (state) => {
            state.loading = true
        },
        [signIn.fulfilled.type]: (state, action) => {
            state.token = action.payload;
            state.loading = false;
            state.error = null;
        },
        [signIn.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
    }
})
