import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const profileThunk =
    createAsyncThunk<Profile, undefined, ThunkConfig<string>>(
        'profile/getProfile',
        async (_, thunkAPI) => {
            try {
                const response = await thunkAPI.extra.api.get<Profile>(
                    '/profile');

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return thunkAPI.rejectWithValue('Error');
            }
        }
    );
