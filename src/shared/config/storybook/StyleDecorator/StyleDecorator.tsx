import 'app/styles/index.scss';
import React from 'react';
import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';


export const StyleDecorator = (theme: Theme) => (Story:StoryFn) => (
    <div className={`app ${theme}`}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
    </div>
);
