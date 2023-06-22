import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const saveProfileChanges =
    createAsyncThunk<Profile, Profile, ThunkConfig<string>>(
        'profile/saveProfileChanges',
        async (data, thunkAPI) => {
            try {
                const response = await thunkAPI.extra.api.put<Profile>(
                    '/profile', data);

                // if (!response.data) {
                //     throw new Error();
                // }

                return response.data;
            } catch (e) {
                return thunkAPI.rejectWithValue('Error');
            }
        }
    );
