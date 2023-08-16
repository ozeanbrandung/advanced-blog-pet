import {combineReducers} from '@reduxjs/toolkit';
import {articleDetailsCommentsReducer} from './articleDetailsCommentsSlice';
import {articleDetailsRecommendationsReducer} from './articleDetailsRecommendationsSlice';
import {ArticleDetailsPageSchema} from '../types';

export const articleDetailsReducer = combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsRecommendationsReducer,
});