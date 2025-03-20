import { configureStore } from '@reduxjs/toolkit';
import auth from './auth/slice.js';

const store = configureStore({
  reducer: {
    auth,
  },
});

export default store;
