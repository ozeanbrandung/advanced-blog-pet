import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { LOCAL_STORAGE_AUTH_KEY } from 'shared/consts/localStorage';

const initialState: UserSchema = {
    authData: undefined,
    _initilized: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //initAuthData: () => localStorage.getItem
        removeAuthData: (state) => {
            state.authData = undefined;
            //TODO: редьюсер чистая функция перенести бы это куда-то отсюда?
            localStorage.removeItem(LOCAL_STORAGE_AUTH_KEY);
        },

        setAuthData: (state, action:PayloadAction<User>) => {
            state.authData = action.payload;
        },

        initAuthData: (state, action:PayloadAction<User>) => {
            state.authData = action.payload;
            state._initilized = true;
        }
    },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const { actions: userActions } = userSlice;

//export default counterSlice.reducer;
export const { reducer: userReducer } = userSlice;
