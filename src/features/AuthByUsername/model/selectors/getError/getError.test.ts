import { getError } from './getError';
import { StateSchema } from 'app/providers/StoreProvider';

describe('get auth form error selector', () => {
    test('test name', () => {
        const mockState:DeepPartial<StateSchema> = {
            authForm: {
                //isLoading: true,
                error: 'error',
                //usernameInputValue: 'asdad',
                //passwordInputValue: 'asdasd',
            }
        };
        expect(getError(mockState as StateSchema))
            .toEqual('error');
    });

    test('without state', () => {
        expect(getError(undefined))
            .toEqual(null);
    });
});

