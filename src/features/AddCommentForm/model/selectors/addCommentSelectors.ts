import {StateSchema} from 'app/providers/StoreProvider';

export const getTextValue = (state: StateSchema) => state.addComment?.textValue || '';

export const getAddCommentError = (state: StateSchema) => state.addComment?.error;

export const getAddCommentLoading = (state: StateSchema) => state.addComment?.isLoading;