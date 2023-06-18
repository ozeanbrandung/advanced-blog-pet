// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from '../index';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';



const meta: Meta<typeof Navbar> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'widgets/Navbar',
    component: Navbar,
    decorators: [StoreDecorator({})]
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

export const AuthNavbar: Story = {
    args: {},
    decorators: [RouterDecorator, StoreDecorator({user: {authData: {id: '1', username: 'Natalya'}}})]
};

