import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, ValidateProfileError } from '../../types/profile';

export const fetchProfile =
    createAsyncThunk<Profile, undefined, ThunkConfig<ValidateProfileError[]>>(
        'profile/fetchProfile',
        async (_, thunkAPI) => {
            try {
                const response = await thunkAPI.extra.api.get<Profile>(
                    '/profile');

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
            }
        }
    );
