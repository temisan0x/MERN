import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//Get user from localStorage
const user = localStorage.getItem('user');

const initialState = {
    user: user ? null : undefined,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = "";
        }
    },
    extraReducers: {},
});

export default authSlice.reducer;
export const { reset } = authSlice.actions;