import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
//import axios from 'axios';
import { LOCAL_STORAGE_AUTH_KEY } from 'shared/consts/localStorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

//import { $api } from 'shared/api/api';

interface LoginProps {
    password: string;
    username: string;
}

//User - return, LoginProps - arguments, error returned value
//3-й аргумент это thunkApi
export const loginThunk =
    createAsyncThunk<User, LoginProps, ThunkConfig<string>/* {rejectValue: string, extra: ThunkExtraArg} */>(
        'authForm/login',
        async (authData/* {password, username}*/, thunkAPI) => {
            try {
                const response = await thunkAPI.extra.api.post<User>(
                //'http://localhost:8000/login',
                    '/login',
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
                thunkAPI.extra.navigate('/profile');
                //по умолчанию тут thunkAPI.fulfillWithValue(response.data)
                //вообще тут происходит dispatch вот этого fulfilled статуса
                //(т е dispatch type = fulfilled, payload = userData)
                return userData;
            } catch (e) {
            //throw new Error('Ошибка при аутентификации');
            //return thunkAPI.rejectWithValue(i18n.t('authError', {ns: 'default'}));
            //вообще тут происходит dispatch вот этого rejected статуса с payload Error
            // (т е dispatch type = rejected, payload = 'Error')
                return thunkAPI.rejectWithValue('Error');
            }
        }
    );
