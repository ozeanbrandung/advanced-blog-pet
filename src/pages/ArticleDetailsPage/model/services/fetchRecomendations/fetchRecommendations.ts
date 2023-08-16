import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {IArticle} from 'entities/Article';

export const fetchRecommendations =
    createAsyncThunk<IArticle[], undefined, ThunkConfig<string>>(
        'articleDetailsPage/fetchRecommendations',
        async (/*args*/_, thunkAPI) => {
            const {extra, rejectWithValue} = thunkAPI;

            try {
                const response = await extra.api.get<IArticle[]>(
                    '/articles', {
                        params: {
                            _limit: 4,
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
