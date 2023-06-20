import { StateSchema } from 'app/providers/StoreProvider';

export const getIsLoading = (state: StateSchema | undefined) => state?.authForm?.isLoading || false;
