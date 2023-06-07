// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import { AppLink } from './AppLink';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { AppLinkThemes } from 'shared/ui/AppLink/AppLink';



const meta: Meta<typeof AppLink> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'shared/AppLink',
    component: AppLink,
    //этот пропс прокидывается в каждую сторис
    args: {
        to: '/',
    }
};

export default meta;
type Story = StoryObj<typeof AppLink>;

//👇 Throws a type error it the args don't match the component props
export const PrimaryLight: Story = {
    args: {
        theme: AppLinkThemes.PRIMARY,
        children: 'Главная'
    },
    decorators: [RouterDecorator]
};

export const PrimaryDark: Story = {
    args: {
        theme: AppLinkThemes.PRIMARY,
        children: 'Главная'
    },
    decorators: [RouterDecorator, StyleDecorator(Theme.DARK)]
};

export const SecondaryLight: Story = {
    args: {
        theme: AppLinkThemes.SECONDARY,
        children: 'Главная'
    },
    decorators: [RouterDecorator]
};

export const SecondaryDark: Story = {
    args: {
        theme: AppLinkThemes.SECONDARY,
        children: 'Главная'
    },
    decorators: [RouterDecorator, StyleDecorator(Theme.DARK)]
};
