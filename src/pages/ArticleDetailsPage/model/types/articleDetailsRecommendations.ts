import {EntityState} from '@reduxjs/toolkit';
import {IArticle} from 'entities/Article';

export interface ArticleDetailsRecommendationsSchema extends EntityState<IArticle> {
    //ids: string[];
    //entities: ...

    isLoading: boolean;
    error?: string;
}