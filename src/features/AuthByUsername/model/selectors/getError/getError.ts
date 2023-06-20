import { StateSchema } from 'app/providers/StoreProvider';

export const getError = (state: StateSchema | undefined) => state?.authForm?.error || null;
