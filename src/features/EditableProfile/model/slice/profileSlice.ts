import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileStateSchema } from '../types/profile';
import { fetchProfile } from '../services/fetchProfile/fetchProfile';
import { saveProfileChanges } from '../services/saveProfileChanges/saveProfileChanges';

export const initialForm:Profile = {
    name: undefined,
    lastname: undefined,
    age: undefined,
    city: undefined,
    country: undefined,
    currency: undefined,
    username: undefined,
    avatar: undefined,
};

const initialState: ProfileStateSchema = {
    readonly: true,
    isLoading: false,
    error: null,
    data: undefined,
    form: initialForm,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        // setNameInputValue: (state, action) => {
        //     state.form.name = action.payload;
        // },
        // setLastnameInputValue: (state, action) => {
        //     state.form.lastname = action.payload;
        // },
        // setAgeInputValue: (state, action) => {
        //     state.form.age = action.payload;
        // },
        //Это решение оптимальнее:
        updateProfile: (state, action:PayloadAction<DeepPartial<Profile>>) => {
            state.form = {...state.form, ...action.payload};
        },
        setEditMode: (state) => {
            state.readonly = false;
        },
        resetForm: (state) => {
            state.form = state.data || initialForm;
            state.readonly = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfile.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(fetchProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(saveProfileChanges.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(saveProfileChanges.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
            })
            .addCase(saveProfileChanges.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
