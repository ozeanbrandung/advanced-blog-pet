// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonThemes } from './Button';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/providers/ThemeProvider';



const meta: Meta<typeof Button> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'shared/Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

//👇 Throws a type error it the args don't match the component props
export const Initial: Story = {
    args: {
        theme: ButtonThemes.INITIAL,
        children: 'текст'
    },
    decorators: [StyleDecorator(Theme.DARK)]
};

export const Outlined: Story = {
    args: {
        theme: ButtonThemes.OUTLINE,
        children: 'текст'
    },
};
