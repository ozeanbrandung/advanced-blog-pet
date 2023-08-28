import { userActions, userReducer } from './userSlice';
import { UserSchema } from '../types/user';

describe('userSlice', () => {
    test('test removeAuthData', () => {
        const mockState:DeepPartial<UserSchema> = {
            authData: {
                id: '123',
                username: 'Natalya'
            }
        };
        expect(userReducer(mockState as UserSchema, userActions.removeAuthData))
            .toEqual({authData: undefined});
    });

    test('test setAuthData', () => {
        const mockState:DeepPartial<UserSchema> = {
            authData: undefined
        };
        expect(userReducer(mockState as UserSchema, userActions.setAuthData({ id: '123', username: 'Natalya' })))
            .toEqual({authData: { id: '123', username: 'Natalya' } });
    });

    test('test without initial state', () => {
        expect(userReducer(undefined, userActions.setAuthData({ id: '123', username: 'Natalya' })))
            .toEqual(expect.objectContaining({authData: { id: '123', username: 'Natalya' } }));
    });
});
