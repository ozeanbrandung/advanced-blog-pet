import { StoryFn } from '@storybook/react';
import React from 'react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { authFormReducer } from 'features/AuthByUsername/model/slice/authFormSlice';
//TODO: убрать отсюда и скрыть редьюсеры во внутренностях - конкретно тут для тестом можно выцеплять и не из api
import { profileReducer } from 'features/EditableProfile';
import { articleReducer } from 'entities/Article';
import {addCommentReducer} from 'features/AddCommentForm/model/slice/addCommentSlice';
import {articleDetailsCommentsReducer} from 'pages/ArticleDetailsPage/model/slice/articleDetailsSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    authForm: authFormReducer,
    profile: profileReducer,
    article: articleReducer,
    addComment: addCommentReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
};

export const StoreDecorator = (
    initialState: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => (Story:StoryFn) => (
    <StoreProvider initialState={initialState} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
    </StoreProvider>
);
