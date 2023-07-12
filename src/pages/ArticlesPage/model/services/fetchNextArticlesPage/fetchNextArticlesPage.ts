import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {
    getArticlesCurrentPage,
    getArticlesHasArticlesToLoad,
    getArticlesPageLoading
} from '../../selectors/articlesSelectors';
import {articlesActions} from '../../slice/articlesSlice';
import {fetchArticles} from '../fetchArticles/fetchArticles';

export const fetchNextArticlesPage =
    createAsyncThunk<void, undefined, ThunkConfig<string>>(
        'articlesPage/fetchNextArticlesPage',
        async (_, thunkAPI) => {
            const {getState, dispatch} = thunkAPI;

            const hasArticlesToLoad = getArticlesHasArticlesToLoad(getState());
            const isLoading = getArticlesPageLoading(getState());
            const currentPage = getArticlesCurrentPage(getState());


            if (hasArticlesToLoad && !isLoading) {
                dispatch(articlesActions.setCurrentPage());
                dispatch(fetchArticles({pageToLoad: currentPage + 1}));
            }
        }
    );
