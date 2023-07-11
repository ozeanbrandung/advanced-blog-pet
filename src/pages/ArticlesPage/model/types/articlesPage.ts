import {EntityState} from '@reduxjs/toolkit';
import {IArticle, ArticlesViewMode} from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<IArticle> {
    isLoading: boolean;
    error?: string;
    
    viewMode: ArticlesViewMode;
}