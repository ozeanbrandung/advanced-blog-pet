import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {IComment} from 'entities/Comment';

export const fetchComments =
    createAsyncThunk<IComment[], {id: string | undefined}, ThunkConfig<string>>(
        'articleDetailsComments/fetchComments',
        async ({id}, thunkAPI) => {
            if (!id) {
                return thunkAPI.rejectWithValue('There are no comments for non-existing article');
            }
            try {
                // const response = await thunkAPI.extra.api.get<IComment[]>(
                //     `/comments?articleId=${id}`);
                const response = await thunkAPI.extra.api.get<IComment[]>(
                    '/comments', {
                        params: {
                            articleId: id,
                            _expand: 'user'
                        }
                    });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return thunkAPI.rejectWithValue('Some server error');
            }
        }
    );
