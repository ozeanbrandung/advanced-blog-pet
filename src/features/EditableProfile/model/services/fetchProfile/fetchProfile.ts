import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, ValidateProfileError } from '../../types/profile';

export const fetchProfile =
    createAsyncThunk<Profile, {id: string}, ThunkConfig<ValidateProfileError[]>>(
        'profile/fetchProfile',
        async ({id}, thunkAPI) => {
            try {
                const response = await thunkAPI.extra.api.get<Profile>(
                    '/profile/' + id);

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
            }
        }
    );
