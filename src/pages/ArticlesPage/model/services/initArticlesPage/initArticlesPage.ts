import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {
    getArticlesInited,
} from '../../selectors/articlesSelectors';
import {articlesActions} from '../../slice/articlesSlice';
import {fetchArticles} from '../fetchArticles/fetchArticles';
import {articleFiltersActions} from 'features/ArticleFilters/model/slice/articleFiltersSlice';
import {Order, Sort} from 'features/ArticleFilters/model/types/articleFiltersTypes';
import {ArticleTypes} from 'entities/Article';

export const initArticlesPage =
    createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
        'articlesPage/initArticlesPage',
        async (searchParams, thunkAPI) => {
            const {getState, dispatch} = thunkAPI;

            const articlesStoreInited = getArticlesInited(getState());


            if (!articlesStoreInited) {
                const orderFromUrl = searchParams.get('order') as Order;
                const searchFromUrl = searchParams.get('search');
                const sortFromUrl = searchParams.get('sort') as Sort;
                const typeFromUrl = searchParams.get('type') as ArticleTypes;

                if (orderFromUrl) {
                    dispatch(articleFiltersActions.setOrder(orderFromUrl));
                }
                if (searchFromUrl) {
                    dispatch(articleFiltersActions.setSearch(searchFromUrl));
                }
                if (sortFromUrl) {
                    dispatch(articleFiltersActions.setSort(sortFromUrl));
                }
                if (typeFromUrl) {
                    dispatch(articleFiltersActions.setType(typeFromUrl));
                }
                //принципиально чтобы сначала шла инициализация - установка лимита там происходит
                dispatch(articlesActions.initializeArticles());
                //а уж потом первый запрос на сервер, поскольку там этот лимит используется (берется из стейта)
                dispatch(fetchArticles(/* {pageToLoad: 1}*/{}));
            }
        }
    );
