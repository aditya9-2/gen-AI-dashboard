import { configureStore } from '@reduxjs/toolkit';
import queriesReducer from './queriesSlice';

export const store = configureStore({
    reducer: {
        queries: queriesReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;