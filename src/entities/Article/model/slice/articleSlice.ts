import { createSlice } from '@reduxjs/toolkit';
import { ArticleStateSchema } from '../types/article';
import { fetchArticle } from '../services/fetchArticle';

const initialState: ArticleStateSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticle.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticle.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticle.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { actions: articleActions } = articleSlice;
export const { reducer: articleReducer } = articleSlice;
