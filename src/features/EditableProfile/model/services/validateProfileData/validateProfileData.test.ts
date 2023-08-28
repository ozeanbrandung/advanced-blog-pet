import { validateProfileData } from './validateProfileData';
import { Profile, ValidateProfileError } from '../../types/profile';

const mockData = {
    id: '3',
    name: 'John',
    lastname: 'Doe',
    age: 12,
    city: 'Abc',
    country: 'Russia',
    currency: 'EUR',
    username: 'Hey',
    avatar: 'sdfsdf',
};

describe('validateProfileData with helper tester', () => {

    test('incorrect name', async () => {
        expect(validateProfileData({...mockData, name: '', lastname: ''} as Profile)).toEqual([ValidateProfileError.INCORRECT_USER_NAME]);
    });

    test('incorrect country', async () => {
        expect(validateProfileData({...mockData, country: undefined} as Profile)).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('validation success', async () => {
        expect(validateProfileData(mockData as Profile)).toEqual([]);
    });

    test('validation empty', async () => {
        expect(validateProfileData(undefined)).toEqual([ValidateProfileError.NO_DATA]);
    });

});

