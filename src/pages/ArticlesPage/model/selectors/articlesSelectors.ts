import {StateSchema} from 'app/providers/StoreProvider';
import {articlesAdapter} from '../slice/articlesSlice';
import {ArticlesViewMode} from 'entities/Article';

export const articlesSelector = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articles || articlesAdapter.getInitialState()
);

export const getArticlesPageLoading = (state:StateSchema) => state.articles?.isLoading || false;

export const getArticlesPageError = (state:StateSchema) => state.articles?.error || '';

export const getArticlesViewMode = (state:StateSchema) => state.articles?.viewMode || ArticlesViewMode.GRID;

export const getArticlesLimit = (state:StateSchema) => state.articles?.limit || 9;

export const getArticlesCurrentPage = (state:StateSchema) => state.articles?.currentPage || 1;

export const getArticlesHasArticlesToLoad = (state:StateSchema) => state.articles?.hasArticlesToLoad;

export const getArticlesInited = (state:StateSchema) => state.articles?._inited;

