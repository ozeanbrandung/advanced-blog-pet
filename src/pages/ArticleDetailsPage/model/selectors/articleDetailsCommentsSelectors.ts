import {StateSchema} from 'app/providers/StoreProvider';
import {commentsAdapter} from '../slice/articleDetailsCommentsSlice';

export const articleDetailsSelector = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
);
//export const getArticleDetailsComments = (state:StateSchema) => state.articleDetailsComments?.data;

export const getArticleDetailsLoading = (state:StateSchema) => state.articleDetailsPage?.comments?.isLoading;

export const getArticleDetailsError = (state:StateSchema) => state.articleDetailsPage?.comments?.error;