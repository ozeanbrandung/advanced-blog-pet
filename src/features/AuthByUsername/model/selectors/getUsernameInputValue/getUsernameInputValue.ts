import { StateSchema } from 'app/providers/StoreProvider';

export const getUsernameInputValue = (state: StateSchema | undefined) => state?.authForm?.usernameInputValue || '';
