import {StateSchema} from 'app/providers/StoreProvider';
import {Order, Sort} from '../types/articleFiltersTypes';

export const getSortValue = (state: StateSchema) => state.articleFilters?.sort ?? Sort.DATE;

export const getOrderValue = (state: StateSchema) => state.articleFilters?.order ?? Order.DESC;

export const getSearchValue = (state: StateSchema) => state.articleFilters?.search ?? '';