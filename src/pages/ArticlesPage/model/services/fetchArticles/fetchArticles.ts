import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {IArticle} from 'entities/Article';

export const fetchArticles =
    createAsyncThunk<IArticle[], undefined, ThunkConfig<string>>(
        'articlesPage/fetchArticles',
        async (_, thunkAPI) => {
            try {
                const response = await thunkAPI.extra.api.get<IArticle[]>(
                    '/articles', {
                        params: {
                            _expand: 'user'
                        }
                    });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return thunkAPI.rejectWithValue((e as Error).message);
            }
        }
    );
