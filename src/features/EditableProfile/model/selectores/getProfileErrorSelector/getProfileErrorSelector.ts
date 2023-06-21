import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileErrorSelector = (state: StateSchema) => state.profile?.error;
