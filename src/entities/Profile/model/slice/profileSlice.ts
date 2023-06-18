import { createSlice } from '@reduxjs/toolkit';
import { ProfileStateSchema } from '../types/profile';


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
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
