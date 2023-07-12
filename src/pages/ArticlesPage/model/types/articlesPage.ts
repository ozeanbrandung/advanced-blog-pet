import {EntityState} from '@reduxjs/toolkit';
import {IArticle, ArticlesViewMode} from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<IArticle> {
    isLoading: boolean;
    error?: string;
    
    viewMode: ArticlesViewMode;

    //pagination
    currentPage: number;
    //how many will be downloaded
    limit?: number;
    hasArticlesToLoad: boolean;

    _inited?: boolean;
}