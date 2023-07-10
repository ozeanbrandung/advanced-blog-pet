import {StateSchema} from 'app/providers/StoreProvider';
import {commentsAdapter} from '../slice/articleDetailsSlice';

export const articleDetailsSelector = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
);
//export const getArticleDetailsComments = (state:StateSchema) => state.articleDetailsComments?.data;

export const getArticleDetailsLoading = (state:StateSchema) => state.articleDetailsComments?.isLoading;

export const getArticleDetailsError = (state:StateSchema) => state.articleDetailsComments?.error;