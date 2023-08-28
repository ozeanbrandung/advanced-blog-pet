import { profileActions, profileReducer } from './profileSlice';
import { ProfileStateSchema, ValidateProfileError } from '../types/profile';
import { fetchProfile } from '../services/fetchProfile/fetchProfile';

const mockState = {
    form: {
        name: 'John',
        lastname: 'Doe',
        age: 12,
        city: 'Abc',
        country: 'Japan',
        currency: 'YEN',
        username: 'Hey',
        avatar: 'sdfsdf',
    }
};

describe('profileSlice', () => {
    test('test change name at form', () => {
        expect(profileReducer(mockState as ProfileStateSchema, profileActions.updateProfile({name: 'Julya'}))).toEqual({form: {...mockState.form, name: 'Julya'}});
    });

    test('test reset profile form', () => {
        expect(profileReducer(mockState as ProfileStateSchema, profileActions.resetForm)).toEqual({
            form: Object.fromEntries(Object.keys(mockState.form).map(key => [key, undefined])),
            readonly: true,
            validateError: [],
        });
    });

    test('undefined state', () => {
        expect(profileReducer(undefined, profileActions.setEditMode())).toEqual(expect.objectContaining({
            readonly: false
        }));
    });

    test('test async action', () => {
        expect(profileReducer(
            {isLoading: false, validateError: [ValidateProfileError.INCORRECT_AGE]} as ProfileStateSchema,
            fetchProfile.pending
        )).toEqual(expect.objectContaining({validateError: [], isLoading: true}));
    });
});
