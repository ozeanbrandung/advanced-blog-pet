import { StateSchema } from 'app/providers/StoreProvider';

export const getPasswordInputValue = (state: StateSchema) => state?.authForm?.passwordInputValue || '';
