import { getAuthFormStateSelector } from './getAuthFormStateSelector';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getAuthFormSelector', () => {
    test('test name', () => {
        const mockState:Partial<StateSchema> = {
            authForm: {
                isLoading: true,
                error: null,
                usernameInputValue: 'asdad',
                passwordInputValue: 'asdasd',
            }
        };
        expect(getAuthFormStateSelector(mockState as StateSchema))
            .toEqual({
                isLoading: true,
                error: null,
                usernameInputValue: 'asdad',
                passwordInputValue: 'asdasd',
            });
    });
});

