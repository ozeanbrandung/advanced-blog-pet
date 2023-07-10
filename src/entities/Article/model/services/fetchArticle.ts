import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from '../types/article';

export const fetchArticle =
    createAsyncThunk<IArticle, {id: string | undefined}, ThunkConfig<string>>(
        'article/fetchArticle',
        async (options, thunkAPI) => {
            if (!options.id) {
                thunkAPI.rejectWithValue('There is no article with such id');
            }
            try {
                const response = await thunkAPI.extra.api.get<IArticle>(
                    `/articles/${options.id}`);

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return thunkAPI.rejectWithValue('Some server error');
            }
        }
    );
