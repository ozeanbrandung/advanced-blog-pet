import { StateSchema } from 'app/providers/StoreProvider';

export const getReadonlySelector = (state: StateSchema) =>
    typeof state.profile?.readonly === 'undefined' ? true : state.profile.readonly;
