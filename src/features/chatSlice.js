import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const CONVERSATION_ENDPOINT = `${process.env.REACT_APP_API_ENDPOINT}/conversation`;

const initialState = {
    status: '', // Loading status for async actions
    error: '', // Error message if any
    conversations: [], // List of all conversations
    activeConversation: {}, // Currently active conversation
    notifications: [], // List of notifications
};

// Fetch all conversations
export const getConversations = createAsyncThunk(
    'conversations/all',
    async (token, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(CONVERSATION_ENDPOINT, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.error?.message || 'Une erreur est survenue');
        }
    }
);

// Open or create a conversation
export const open_create_conversation = createAsyncThunk(
    'conversations/open_create',
    async (values, { rejectWithValue }) => {
        const { token, receiver_id } = values;
        try {
            const { data } = await axios.post(
                CONVERSATION_ENDPOINT,
                { receiver_id }, // Send receiver_id in the body
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.error?.message || 'Une erreur est survenue');
        }
    }
);

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        // Manually set the active conversation
        setActiveConversation: (state, action) => {
            state.activeConversation = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // Handle getConversations
            .addCase(getConversations.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getConversations.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.conversations = action.payload;
            })
            .addCase(getConversations.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })

            // Handle open_create_conversation
            .addCase(open_create_conversation.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(open_create_conversation.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Only set `activeConversation` if it is not already set by the user
                if (!state.activeConversation?._id) {
                    state.activeConversation = action.payload;
                }
            })
            .addCase(open_create_conversation.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

// Export actions and reducer
export const { setActiveConversation } = chatSlice.actions;
export default chatSlice.reducer;
