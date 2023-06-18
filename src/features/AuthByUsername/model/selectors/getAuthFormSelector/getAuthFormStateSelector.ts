import { StateSchema } from 'app/providers/StoreProvider';

export const getAuthFormStateSelector = (state: StateSchema) => state.authForm;
