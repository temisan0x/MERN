import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './appService';

//Get user (data) from localStorage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: user ? null : undefined,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
};

//Register User
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => { 
    try {
        return await authService.register(user)
    } catch (error) {
        
    }
})

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
    extraReducers:() => {
        //thunk function
    },
});

export default authSlice.reducer;
export const { reset } = authSlice.actions;