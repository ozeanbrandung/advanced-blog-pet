import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PreservedScrollPositionSchema} from '../types/preservedScrollPosition';

const initialState: PreservedScrollPositionSchema = {
    scroll: {}
};

export const preservedScrollPositionSlice = createSlice({
    name: 'preservedScrollPosition',
    initialState,
    reducers: {
        setNewScrollPosition: (state, {payload}:PayloadAction<{pageAddress: string, scrollTopPosition: number}>) => {
            state.scroll[payload.pageAddress] = payload.scrollTopPosition;
        },
    },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const { actions: preservedScrollPositionActions } = preservedScrollPositionSlice;

//export default counterSlice.reducer;
export const { reducer: preservedScrollPositionReducer } = preservedScrollPositionSlice;
