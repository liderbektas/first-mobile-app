import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
};

const auth = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    _login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    _logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { _login, _logout } = auth.actions;
export default auth.reducer;
