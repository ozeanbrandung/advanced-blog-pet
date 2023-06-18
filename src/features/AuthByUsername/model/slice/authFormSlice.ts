import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthFormSchema } from '../types/authFormSchema';
import { loginThunk } from '../services/loginThunk/loginThunk';

const initialState: AuthFormSchema = {
    usernameInputValue: '',
    passwordInputValue: '',
    isLoading: false,
    error: null,
};

export const authFormSlice = createSlice({
    name: 'authForm',
    initialState,
    reducers: {
        setUsernameInputValue: (state, action:PayloadAction<string>) => {
            state.usernameInputValue = action.payload;
        },

        setPasswordInputValue: (state, action:PayloadAction<string>) => {
            state.passwordInputValue = action.payload;
        },

        clearAuthForm: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(loginThunk.fulfilled, (state) => {
                state.isLoading = false;
                //const dispatch = useDispatch();
                //dispatch(userActions.setAuthData(action.payload));
                //в качестве токена просто установим объект юзеоа с бд
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const { actions: authFormActions } = authFormSlice;

//export default counterSlice.reducer;
export const { reducer: authFormReducer } = authFormSlice;
