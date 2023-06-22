import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, ValidateProfileError } from '../../types/profile';
import { validateProfileData } from '../../services/validateProfileData/validateProfileData';

export const saveProfileChanges =
    createAsyncThunk<Profile, Profile, ThunkConfig<ValidateProfileError[]>>(
        'profile/saveProfileChanges',
        async (data, thunkAPI) => {
            try {
                const errors = validateProfileData(data);

                if (errors.length) {
                    return thunkAPI.rejectWithValue(errors);
                }

                const response = await thunkAPI.extra.api.put<Profile>(
                    '/profile', data);

                // if (!response.data) {
                //     throw new Error();
                // }

                return response.data;
            } catch (e) {
                return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
            }
        }
    );
