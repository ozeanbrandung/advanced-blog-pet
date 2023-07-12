import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {
    getArticlesInited,
} from '../../selectors/articlesSelectors';
import {articlesActions} from '../../slice/articlesSlice';
import {fetchArticles} from '../fetchArticles/fetchArticles';

export const initArticlesPage =
    createAsyncThunk<void, undefined, ThunkConfig<string>>(
        'articlesPage/initArticlesPage',
        async (_, thunkAPI) => {
            const {getState, dispatch} = thunkAPI;

            const articlesStoreInited = getArticlesInited(getState());


            if (!articlesStoreInited) {
                //принципиально чтобы сначала шла инициализация - установка лимита там происходит
                dispatch(articlesActions.initializeArticles());
                //а уж потом первый запрос на сервер, поскольку там этот лимит используется (берется из стейта)
                dispatch(fetchArticles({pageToLoad: 1}));
            }
        }
    );
