import { createSlice } from '@reduxjs/toolkit';
import { register, login, refreshUser, logout } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: '',
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: {
    [register.pending]() {},
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isRefreshing = false;
      state.isLoggedIn = true;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
    [logout.fulfilled](state) {
      state.user = {
        name: null,
        email: null,
      };
      state.token = '';
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
