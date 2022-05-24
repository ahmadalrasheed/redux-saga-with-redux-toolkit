import { createSlice } from '@reduxjs/toolkit';

interface UsersState {
    entities: [];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    currentRequestId: undefined;
    error: [];
    userInfo: {};
}

const initialState = {
    loading: 'idle',
    entities: {},
    currentRequestId: undefined,
    error: [],
    userInfo: {},
} as UsersState;

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetAction: () => {
            return initialState;
        },
        requestAuth: (state, action) => {
            state.userInfo = action.payload;
            state.loading = 'pending';
        },
        succeededAuth: (state, action) => {
            state.entities = action.payload;
            state.loading = 'succeeded';
        },
        failedAuth: (state) => {
            state.loading = 'failed';
        },
    },
});
