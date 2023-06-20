import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileDataSelector = (state: StateSchema) => state.profile?.data;
