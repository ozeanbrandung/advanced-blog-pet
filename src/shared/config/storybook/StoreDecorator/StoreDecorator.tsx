import { StoryFn } from '@storybook/react';
import React from 'react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { authFormReducer } from 'features/AuthByUsername/model/slice/authFormSlice';
import { profileReducer } from 'entities/Profile';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    // @ts-ignore
    authForm: authFormReducer,
    // @ts-ignore
    profile: profileReducer,
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
