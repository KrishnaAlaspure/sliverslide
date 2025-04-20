import { configureStore } from '@reduxjs/toolkit';
import AuthStateSlice from '../slices/AuthStateSlice';

    export const store = configureStore({
      reducer: {
        AuthState : AuthStateSlice,
      },
    });