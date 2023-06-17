import { StoryFn } from '@storybook/react';
import React from 'react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';


export const StoreDecorator = (initialState: DeepPartial<StateSchema>) => (Story:StoryFn) => (
    <StoreProvider initialState={initialState}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
    </StoreProvider>
);
