import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {IArticle} from 'entities/Article';
import {ArticleDetailsRecommendationsSchema} from '../types/articleDetailsRecommendations';
import {fetchRecommendations} from '../services/fetchRecomendations/fetchRecommendations';

export const recommendationsAdapter = createEntityAdapter<IArticle>({
    // Assume IDs are stored in a field other than `book.id`
    selectId: (recommendation) => recommendation.id,
    // Keep the "all IDs" array sorted based on book titles
    //sortComparer: (a, b) => a.title.localeCompare(b.title),
});

export const articleDetailsRecommendationSlice = createSlice({
    name: 'articleDetailsRecommendationsSchema',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
        ids: [],
        entities: {},

        error: '',
        isLoading: false,
    }),
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecommendations.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchRecommendations.fulfilled, (state, action) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { actions: articleDetailsRecommendationsActions } = articleDetailsRecommendationSlice;

export const { reducer: articleDetailsRecommendationsReducer } = articleDetailsRecommendationSlice;
