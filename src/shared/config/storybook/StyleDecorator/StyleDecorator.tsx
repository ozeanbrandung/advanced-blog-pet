import 'app/styles/index.scss';
import React from 'react';
import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

// eslint-disable-next-line react/display-name
export const StyleDecorator = (theme: Theme) => (Story:StoryFn) => {
    document.documentElement.dataset.theme = theme;
    return (
        <div className='app'>
            {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
            <Story />
        </div>
    );
};
