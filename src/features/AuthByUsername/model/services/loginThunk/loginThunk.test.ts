import axios from 'axios';
import { loginThunk } from './loginThunk';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';

jest.mock('axios');
//глубокий мок - используем эту конструкцию для того чтобы typescript подхватил добавленные замоканному аксиосу методы
const mockedAxios = jest.mocked(axios, true);

describe('loginThunk', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    //мокаем функции которые нужно передать в action
    beforeEach(()=> {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('success login', async () => {
        const userValue = {username: '123', id: '2'};
        mockedAxios.post.mockReturnValue(Promise.resolve({data: userValue}));
        //thunk - это action creator который возвращает асинхронный action, так что получим его
        const action = loginThunk({username: '123', password: '123'});
        //узнаем из типов что этот action в себя принимает и передаем это
        const result = await action(dispatch, getState, undefined);
        console.log(result);
        //запрос на сервер вообще был отправлен
        expect(mockedAxios.post).toHaveBeenCalled();
        //проверяем что вызвался диспатч именно с таким экшном
        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(dispatch).toHaveBeenCalledTimes(3);
        //success
        expect(result.meta.requestStatus).toBe('fulfilled');
        //а тут у нас payload = userValue (т е dispatch type = fulfilled, payload = userValue)
        expect(result.payload).toEqual(userValue);
    });

    test('error login', async () => {
        //запрос выполнился с ошибкой
        mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}));
        const action = loginThunk({username: '123', password: '123'});
        const result = await action(dispatch, getState, undefined);
        console.log(result);
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        //проверим что тут payload = 'Error', (т е dispatch type = rejected, payload = 'Error')
        expect(result.payload).toBe('Error');
    });
});

