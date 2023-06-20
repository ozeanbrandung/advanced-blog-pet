import axios from 'axios';
import { loginThunk } from './loginThunk';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk';

jest.mock('axios');
//глубокий мок - используем эту конструкцию для того чтобы typescript подхватил добавленные замоканному аксиосу методы
const mockedAxios = jest.mocked(axios, true);

describe('loginThunk with helper tester', () => {

    test('success login', async () => {
        const userValue = { username: '123', id: '2' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const thunk = new TestAsyncThunk(loginThunk);
        const result = await thunk.callThunk({ username: '123', password: '123' });
        //запрос на сервер вообще был отправлен
        expect(thunk.api.post).toHaveBeenCalled();
        //проверяем что вызвался диспатч именно с таким экшном
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        //success
        expect(result.meta.requestStatus).toBe('fulfilled');
        //а тут у нас payload = userValue (т е dispatch type = fulfilled, payload = userValue)
        expect(result.payload).toEqual(userValue);
    });

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({status: 403}));

        const thunk = new TestAsyncThunk(loginThunk);
        const result = await thunk.callThunk({ username: '123', password: '123' });
        //запрос на сервер вообще был отправлен
        expect(thunk.api.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        //проверим что тут payload = 'Error', (т е dispatch type = rejected, payload = 'Error')
        expect(result.payload).toBe('Error');
    });

});

