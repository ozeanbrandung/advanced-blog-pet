// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from '../index';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';



const meta: Meta<typeof Navbar> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'widgets/Navbar',
    component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

//👇 Throws a type error it the args don't match the component props
export const Light: Story = {
    args: {},
    decorators: [RouterDecorator]
};

export const Outlined: Story = {
    args: {},
    decorators: [RouterDecorator, StyleDecorator(Theme.DARK)]
};
