import axios from 'axios';
import { saveProfileChanges } from './saveProfileChanges';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk';
import { Profile, ValidateProfileError } from 'features/EditableProfile/model/types/profile';
import { Country, Currency } from 'shared/consts/common';

jest.mock('axios');
//глубокий мок - используем эту конструкцию для того чтобы typescript подхватил добавленные замоканному аксиосу методы
const mockedAxios = jest.mocked(axios, true);

const mockData:Profile = {
    name: 'John',
    lastname: 'Doe',
    age: 12,
    city: 'Abc',
    country: Country.GERMANY,
    currency: Currency.RUB,
    username: 'Hey',
    avatar: 'sdfsdf',
};

describe('saveProfileChanges with helper tester', () => {

    test('success fetch profile', async () => {
        const thunk = new TestAsyncThunk(saveProfileChanges, {profile: {form: mockData}});
        mockedAxios.put.mockReturnValue(Promise.resolve({ data: mockData }));
        const result = await thunk.callThunk({ } as Profile);
        //запрос на сервер вообще был отправлен
        expect(thunk.api.put).toHaveBeenCalled();
        //success
        expect(result.meta.requestStatus).toBe('fulfilled');
        //а тут у нас payload = userValue (т е dispatch type = fulfilled, payload = userValue)
        expect(result.payload).toEqual(mockData);
    });

    test('error fetch profile', async () => {
        const thunk = new TestAsyncThunk(saveProfileChanges, {profile: {form: mockData}});
        mockedAxios.put.mockReturnValue(Promise.resolve({status: 403}));

        const result = await thunk.callThunk(mockData);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('error invalid data', async () => {
        const thunk = new TestAsyncThunk(saveProfileChanges, {profile: {form: {...mockData, age: undefined}}});
        //mockedAxios.put.mockReturnValue(Promise.resolve({status: 403}));

        const result = await thunk.callThunk(mockData);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

});

