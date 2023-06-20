import { StateSchema } from 'app/providers/StoreProvider';

export const getPasswordInputValue = (state: StateSchema | undefined) => state?.authForm?.passwordInputValue || '';
