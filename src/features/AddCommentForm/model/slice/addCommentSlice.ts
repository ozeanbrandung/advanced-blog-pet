import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AddCommentFormSchema} from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
    textValue: '',
    error: '',
    isLoading: false,
};

export const addCommentSlice = createSlice({
    name: 'addCommentSlice',
    initialState,
    reducers: {
        setTextValue: (state, action:PayloadAction<string>) => {
            state.textValue = action.payload;
        },

        clearForm: () => initialState
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginThunk.pending, (state) => {
    //             state.error = null;
    //             state.isLoading = true;
    //         })
    //         .addCase(loginThunk.fulfilled, (state) => {
    //             state.isLoading = false;
    //             //const dispatch = useDispatch();
    //             //dispatch(userActions.setAuthData(action.payload));
    //             //в качестве токена просто установим объект юзеоа с бд
    //         })
    //         .addCase(loginThunk.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload || null;
    //         });
    // }
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const { actions: addCommentActions } = addCommentSlice;

//export default counterSlice.reducer;
export const { reducer: addCommentReducer } = addCommentSlice;
