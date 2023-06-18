import { StateSchema } from 'app/providers/StoreProvider';

export const getUsernameInputValue = (state: StateSchema) => state?.authForm?.usernameInputValue || '';
