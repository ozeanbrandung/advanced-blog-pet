// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/providers/ThemeProvider';


const meta: Meta<typeof Text> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'shared/Text',
    component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

//👇 Throws a type error it the args don't match the component props
export const ThemeLight: Story = {
    args: {
        title: 'Заголовок',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Ultrices tincidunt arcu non sodales. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet.'
    },
    decorators: []
};

export const ThemeDark: Story = {
    args: {
        title: 'Заголовок',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Ultrices tincidunt arcu non sodales. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet.'
    },
    decorators: [StyleDecorator(Theme.DARK)]
};

export const WithoutTitle: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Ultrices tincidunt arcu non sodales. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet.'
    },
    decorators: [StyleDecorator(Theme.DARK)]
};

export const WithoutText: Story = {
    args: {
        title: 'Заголовок',
    },
    decorators: [StyleDecorator(Theme.DARK)]
};

export const Error: Story = {
    args: {
        title: 'Заголовок',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Ultrices tincidunt arcu non sodales. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet.',
        isError: true,
    },
    decorators: []
};

