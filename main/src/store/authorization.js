import { createSlice } from '@reduxjs/toolkit';

const authorization = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
    },
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
            console.log(state.isAuthenticated);
        },
        logout: (state) => {
            state.isAuthenticated = false;
        },
    },
});

export const { login, logout } = authorization.actions;
export default authorization.reducer;
