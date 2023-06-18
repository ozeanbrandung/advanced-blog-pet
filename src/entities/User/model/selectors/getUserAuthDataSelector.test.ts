import { getUserAuthDataSelector } from './getUserAuthDataSelector';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getUserAuthDataSelector', () => {
    test('test name', () => {
        const state:Partial<StateSchema> = {
            user: {
                authData: {
                    id: '1',
                    username: 'Natalya',
                }
            }
        };
        expect(getUserAuthDataSelector(state as StateSchema))
            .toEqual({ id: '1', username: 'Natalya' });
    });
});
