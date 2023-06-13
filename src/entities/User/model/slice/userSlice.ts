import { createSlice } from '@reduxjs/toolkit';
import {UserSchema} from '../types/user';

const initialState: UserSchema = {
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const { actions: userActions } = userSlice;

//export default counterSlice.reducer;
export const { reducer: userReducer } = userSlice;
