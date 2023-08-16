import {StateSchema} from 'app/providers/StoreProvider';
import {recommendationsAdapter} from '../slice/articleDetailsRecommendationsSlice';

export const getRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) =>
        state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
);

export const getRecommendationsLoading = (state:StateSchema) =>
    state.articleDetailsPage?.recommendations?.isLoading || false;

export const getRecommendationsError = (state:StateSchema) =>
    state.articleDetailsPage?.recommendations?.error;