import {createSelector} from '@reduxjs/toolkit';
import {getArticleData} from 'entities/Article';
import {getUserAuthDataSelector} from 'entities/User';

export const getArticleEditSelector = createSelector(
    getArticleData,
    getUserAuthDataSelector,
    (article, auth) => {
        if (!article && !auth) {
            return false;
        }
        return article?.user.id === auth?.id;
    }
);