import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const AUTH_ENDPOINT = `${process.env.REACT_APP_API_ENDPOINT}/auth`;

console.log("API Endpoint:", process.env.REACT_APP_API_ENDPOINT);

const initialState = {
    status: '',
    error: '',
    user: {
        id: '',
        name: '',
        email: '',
        picture: '',
        status: '',
        token: '',
    }
};

export const registerUser = createAsyncThunk('auth/register', async (values, { rejectWithValue }) => {
    try {
        const { data } = await axios.post(`${AUTH_ENDPOINT}/register`, { ...values });
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data.error.message);
    }
});

export const loginUser = createAsyncThunk('auth/login', async (values, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${AUTH_ENDPOINT}/login`, { ...values });
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error?.message || 'An error occurred');
    }
});

export const userSlice = createSlice({ 
    name: 'user', 
    initialState,
    reducers: {
        logout: (state) => {
            state.status = '';
            state.error = '';
            state.user = {
                id: '',
                name: '',
                email: '',
                picture: '',
                status: '',
                token: '',
            };
        },
        changeStatus: (state, action) => {
            state.status = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = '';
                state.user = {
                    id: action.payload._id,
                    name: action.payload.name,
                    email: action.payload.email,
                    picture: action.payload.picture,
                    status: action.payload.status,
                    token: action.payload.access_token,
                };
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = '';
                state.user = {
                    id: action.payload._id,
                    name: action.payload.name,
                    email: action.payload.email,
                    picture: action.payload.picture,
                    status: action.payload.status,
                    token: action.payload.access_token,
                };
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});


export const { logout, changeStatus } = userSlice.actions;

export default userSlice.reducer;