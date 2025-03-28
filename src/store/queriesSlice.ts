/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { Query, QueryResult } from '../types';

// Simulate API call delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock data for demonstration
const mockResults: QueryResult = {
    data: [
        { name: 'Jan', value: 400 },
        { name: 'Feb', value: 300 },
        { name: 'Mar', value: 600 },
        { name: 'Apr', value: 800 },
        { name: 'May', value: 700 }
    ],
    summary: 'Analysis shows an upward trend in user engagement over the past 5 months.'
};

export const processQuery = createAsyncThunk(
    'queries/process',
    async (_query: string) => {
        await delay(1500); // Simulate API call
        if (Math.random() > 0.9) { // 10% chance of error
            throw new Error('Failed to process query');
        }
        return mockResults;
    }
);

const initialState = {
    items: [] as Query[],
    suggestions: [
        'Show me user engagement trends',
        'Analyze conversion rates',
        'Compare performance metrics',
    ],
    isLoading: false,
    error: null as string | null,
};

const queriesSlice = createSlice({
    name: 'queries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(processQuery.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
                state.items.unshift({
                    id: Date.now().toString(),
                    text: action.meta.arg,
                    timestamp: Date.now(),
                    status: 'pending'
                });
            })
            .addCase(processQuery.fulfilled, (state, action) => {
                state.isLoading = false;
                const query = state.items[0];
                if (query) {
                    query.status = 'success';
                    query.result = action.payload;
                }
            })
            .addCase(processQuery.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'An error occurred';
                const query = state.items[0];
                if (query) {
                    query.status = 'error';
                }
            });
    },
});

export default queriesSlice.reducer;