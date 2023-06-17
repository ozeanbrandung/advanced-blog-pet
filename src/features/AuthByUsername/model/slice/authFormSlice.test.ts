import { authFormActions, authFormReducer } from './authFormSlice';
import { AuthFormSchema } from 'features/AuthByUsername';

describe('authFormSlice', () => {
    test('test undefined state, set password input value', () => {
        expect(authFormReducer(undefined, authFormActions.setPasswordInputValue('abc'))).toEqual({
            usernameInputValue: '',
            passwordInputValue: 'abc',
            isLoading: false,
            error: null,
        });
    });

    test('test set username input value', () => {
        const mockState:AuthFormSchema = {
            usernameInputValue: '',
            passwordInputValue: 'abc',
            isLoading: true,
            error: 'Error'
        };
        expect(authFormReducer(mockState, authFormActions.setUsernameInputValue('abc'))).toEqual({
            usernameInputValue: 'abc',
            passwordInputValue: 'abc',
            isLoading: true,
            error: 'Error'
        });
    });
});
