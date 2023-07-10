import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {Profile, ValidateProfileError} from '../../types/profile';
import {validateProfileData} from '../../services/validateProfileData/validateProfileData';
import {
    getProfileFormSelector
} from 'features/EditableProfile/model/selectores/getProfileDataSelector/getProfileDataSelector';

export const saveProfileChanges =
    createAsyncThunk<Profile, Profile, ThunkConfig<ValidateProfileError[]>>(
        'profile/saveProfileChanges',
        async (/* data, */_, thunkAPI) => {
            try {
                const data = getProfileFormSelector(thunkAPI.getState());
                //не нужно у нас есть уже data
                //const authData = getUserAuthDataSelector(thunkAPI.getState());
                
                //if (!authData) {
                //return thunkAPI.rejectWithValue([]);
                //}

                const errors = validateProfileData(data);

                if (errors.length) {
                    return thunkAPI.rejectWithValue(errors);
                }

                const response = await thunkAPI.extra.api.put<Profile>(
                    `/profile/${data?.id}`, data);

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
            }
        }
    );
