import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './appService';

//Get user (data) from localStorage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: user ? user : null,
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
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});


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
    extraReducers: (builder) => {
        //thunk function
        builder
            .addCase(register.pending, (state) => {
            state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true;
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action) => { 
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload
            })
    },
});

export default authSlice.reducer;
export const { reset } = authSlice.actions; 