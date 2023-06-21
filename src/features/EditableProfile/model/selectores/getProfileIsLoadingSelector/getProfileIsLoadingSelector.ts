import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileIsLoadingSelector = (state: StateSchema) => state.profile?.isLoading;
