import { getPasswordInputValue } from './getPasswordInputValue';
import { StateSchema } from 'app/providers/StoreProvider';

describe('get auth form passwordInputValue selector', () => {
    test('test name', () => {
        const mockState:DeepPartial<StateSchema> = {
            authForm: {
                //isLoading: true,
                //error: 'error',
                //usernameInputValue: 'asdad',
                passwordInputValue: 'asdasd',
            }
        };
        expect(getPasswordInputValue(mockState as StateSchema))
            .toEqual('asdasd');
    });

    test('without state', () => {
        expect(getPasswordInputValue(undefined))
            .toEqual('');
    });
});
