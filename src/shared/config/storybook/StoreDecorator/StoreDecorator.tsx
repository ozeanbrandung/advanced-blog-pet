import { StoryFn } from '@storybook/react';
import React from 'react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { authFormReducer } from 'features/AuthByUsername/model/slice/authFormSlice';
//TODO: убрать отсюда и скрыть редьюсеры во внутренностях
import { profileReducer } from 'features/EditableProfile';
import { articleReducer } from 'entities/Article';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    authForm: authFormReducer,
    profile: profileReducer,
    article: articleReducer,
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
