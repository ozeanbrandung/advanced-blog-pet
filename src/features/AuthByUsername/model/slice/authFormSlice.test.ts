import { authFormActions, authFormReducer } from './authFormSlice';
import { AuthFormSchema } from '../types/authFormSchema';

describe('authFormSlice', () => {
    test('test undefined state, set password input value', () => {
        //const mockState: DeepPartial<StateSchema> =
        expect(authFormReducer(undefined, authFormActions.setPasswordInputValue('abc'))).toEqual({
            usernameInputValue: '',
            passwordInputValue: 'abc',
            isLoading: false,
            error: null,
        });
    });

    test('test set username input value', () => {
        const mockState:DeepPartial<AuthFormSchema> = {
            usernameInputValue: '',
            //passwordInputValue: 'abc',
            //isLoading: true,
            //error: 'Error'
        };
        expect(authFormReducer(mockState as AuthFormSchema, authFormActions.setUsernameInputValue('abc'))).toEqual({
            usernameInputValue: 'abc',
            //passwordInputValue: 'abc',
            //isLoading: true,
            //error: 'Error'
        });
    });
});
