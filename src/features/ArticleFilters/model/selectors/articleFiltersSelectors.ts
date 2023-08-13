import {StateSchema} from 'app/providers/StoreProvider';
import {Order, Sort} from '../types/articleFiltersTypes';
import {ArticleTypes} from 'entities/Article';

export const getSortValue = (state: StateSchema) => state.articleFilters?.sort ?? Sort.DATE;

export const getOrderValue = (state: StateSchema) => state.articleFilters?.order ?? Order.DESC;

export const getSearchValue = (state: StateSchema) => state.articleFilters?.search ?? '';

export const getArticleType = (state: StateSchema) => state.articleFilters?.type ?? ArticleTypes.ALL;