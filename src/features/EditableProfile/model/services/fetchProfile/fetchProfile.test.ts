import axios from 'axios';
import { fetchProfile } from './fetchProfile';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk';

jest.mock('axios');
//глубокий мок - используем эту конструкцию для того чтобы typescript подхватил добавленные замоканному аксиосу методы
const mockedAxios = jest.mocked(axios, true);

const mockData = {
    name: 'John',
    lastname: 'Doe',
    age: 12,
    city: 'Abc',
    country: 'Japan',
    currency: 'YEN',
    username: 'Hey',
    avatar: 'sdfsdf',
};

describe('fetchProfile with helper tester', () => {

    test('success fetch profile', async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({ data: mockData }));

        const thunk = new TestAsyncThunk(fetchProfile);
        const result = await thunk.callThunk(undefined);
        //запрос на сервер вообще был отправлен
        expect(thunk.api.get).toHaveBeenCalled();
        //success
        expect(result.meta.requestStatus).toBe('fulfilled');
        //а тут у нас payload = userValue (т е dispatch type = fulfilled, payload = userValue)
        expect(result.payload).toEqual(mockData);
    });

    test('error fetch profile', async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({status: 403}));

        const thunk = new TestAsyncThunk(fetchProfile);
        const result = await thunk.callThunk(undefined);
        expect(result.meta.requestStatus).toBe('rejected');
    });

});

