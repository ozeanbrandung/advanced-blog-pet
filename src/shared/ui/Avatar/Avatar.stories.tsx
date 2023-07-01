// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, AvatarModes } from './Avatar';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/providers/ThemeProvider';


const meta: Meta<typeof Avatar> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'shared/Avatar',
    component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

//👇 Throws a type error it the args don't match the component props
export const Small: Story = {
    args: {
        mode: AvatarModes.SMALL,
        src: 'https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg'
    },
    decorators: []
};

export const Big: Story = {
    args: {
        mode: AvatarModes.BIG,
        src: 'https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg'
    },
    decorators: [StyleDecorator(Theme.DARK)]
};
