import 'app/styles/index.scss';
import React from 'react';
import { StoryFn } from '@storybook/react';
//import { MemoryRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


export const RouterDecorator = (Story:StoryFn) => (
    <BrowserRouter>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
    </BrowserRouter>
);
