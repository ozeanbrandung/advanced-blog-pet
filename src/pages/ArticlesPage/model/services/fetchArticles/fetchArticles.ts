import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {IArticle} from 'entities/Article';
import {getArticlesLimit} from '../../selectors/articlesSelectors';

interface FetchArticlesListProps {
     pageToLoad?: number
}

export const fetchArticles =
    createAsyncThunk<IArticle[], FetchArticlesListProps, ThunkConfig<string>>(
        'articlesPage/fetchArticles',
        async (args, thunkAPI) => {
            const {extra, rejectWithValue, getState} = thunkAPI;
            const {pageToLoad = 1} = args;
            const limit = getArticlesLimit(getState())

            try {
                const response = await extra.api.get<IArticle[]>(
                    '/articles', {
                        params: {
                            _expand: 'user',
                            //how many pages will be loaded new time
                            _limit: limit,
                            //next page
                            _page: pageToLoad,
                        }
                    });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue((e as Error).message);
            }
        }
    );
