import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import axios from 'axios';
import { LOCAL_STORAGE_AUTH_KEY } from 'shared/consts/localStorage';

interface LoginProps {
    password: string;
    username: string;
}

export const loginThunk = createAsyncThunk<User, LoginProps, {rejectValue: string}>(
    'authForm/login',
    async (authData/* {password, username}*/, thunkAPI) => {
        try {
            const response = await axios.post<User>(
                'http://localhost:8000/login',
                /* {password, username} */
                authData,
                // {
                //     headers: {'Access-Control-Allow-Origin': }
                // }
            );
            if (!response.data) {
                throw new Error();
            }
            const userData:User = {
                id: response.data.id,
                username: response.data.username,
            };
            thunkAPI.dispatch(userActions.setAuthData(userData));
            localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, JSON.stringify(userData));
            return userData;
            //по умолчанию тут thunkAPI.fulfillWithValue(response.data)
        } catch (e) {
            //throw new Error('Ошибка при аутентификации');
            //return thunkAPI.rejectWithValue(i18n.t('authError', {ns: 'default'}));
            return thunkAPI.rejectWithValue('Error');
        }
    }
);
