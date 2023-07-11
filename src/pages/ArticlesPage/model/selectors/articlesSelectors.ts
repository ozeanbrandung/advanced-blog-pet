import {StateSchema} from 'app/providers/StoreProvider';
import {articlesAdapter} from '../slice/articlesSlice';
import {ArticlesViewMode} from 'entities/Article';

export const articlesSelector = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articles || articlesAdapter.getInitialState()
);

export const getArticlesPageLoading = (state:StateSchema) => state.articles?.isLoading || false;

export const getArticlesPageError = (state:StateSchema) => state.articles?.error || '';

export const getArticlesViewMode = (state:StateSchema) => state.articles?.viewMode || ArticlesViewMode.GRID;