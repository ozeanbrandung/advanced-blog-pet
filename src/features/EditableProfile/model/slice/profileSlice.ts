import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileStateSchema } from '../types/profile';
import { profileThunk } from '../services/profileThunk/profileThunk';


const initialState: ProfileStateSchema = {
    readonly: true,
    isLoading: false,
    error: null,
    data: undefined,
    form: {},
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
            state.form = state.data || {};
            state.readonly = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(profileThunk.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(profileThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(profileThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
