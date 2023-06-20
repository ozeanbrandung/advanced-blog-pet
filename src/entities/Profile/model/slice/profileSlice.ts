import { createSlice } from '@reduxjs/toolkit';
import { ProfileStateSchema } from '../types/profile';
import { profileThunk } from 'entities/Profile/model/services/profileThunk/profileThunk';


const initialState: ProfileStateSchema = {
    readonly: true,
    isLoading: false,
    error: null,
    data: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        //  : (state) => {
        //
        //  },
        // : (state) => {
        //
        //  },
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
            })
            .addCase(profileThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
