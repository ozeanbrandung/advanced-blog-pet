import { StateSchema } from 'app/providers/StoreProvider';

export const getUserAuthDataSelector = (state: StateSchema) => state.user.authData;
