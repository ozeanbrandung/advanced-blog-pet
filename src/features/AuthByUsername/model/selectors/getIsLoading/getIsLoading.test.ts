import { getIsLoading } from './getIsLoading';
import { StateSchema } from 'app/providers/StoreProvider';

describe('get auth form isLoading selector', () => {
    test('test name', () => {
        const mockState:DeepPartial<StateSchema> = {
            authForm: {
                isLoading: true,
                //error: 'error',
                //usernameInputValue: 'asdad',
                //passwordInputValue: 'asdasd',
            }
        };
        expect(getIsLoading(mockState as StateSchema))
            .toEqual(true);
    });

    test('without state', () => {
        expect(getIsLoading(undefined))
            .toEqual(false);
    });
});
