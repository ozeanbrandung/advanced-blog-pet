// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import { AboutPage } from '../index';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { SuspenseDecorator } from 'shared/config/storybook/SuspenseDecorator/SuspenceDecorator';




const meta: Meta<typeof AboutPage> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'pages/AboutPage',
    component: AboutPage,
    decorators: [SuspenseDecorator]
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

//👇 Throws a type error it the args don't match the component props
export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [StyleDecorator(Theme.DARK)]
};
