import { getUsernameInputValue } from './getUsernameInputValue';
import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

describe('get auth form usernameInputValue selector', () => {
    test('test name', () => {
        const mockState:DeepPartial<StateSchema> = {
            authForm: {
                //isLoading: true,
                //error: 'error',
                usernameInputValue: 'asdad',
                //passwordInputValue: 'asdasd',
            }
        };
        expect(getUsernameInputValue(mockState as StateSchema))
            .toEqual('asdad');
    });

    test('without state', () => {
        expect(getUsernameInputValue(undefined))
            .toEqual('');
    });
});
