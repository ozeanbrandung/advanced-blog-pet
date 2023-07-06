// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/providers/ThemeProvider';


const meta: Meta<typeof Skeleton> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'shared/Skeleton',
    component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

//👇 Throws a type error it the args don't match the component props
export const Circle: Story = {
    args: {
        width: 100,
        height: 100,
        radius: '50%'
    },
    decorators: []
};

export const Light: Story = {
    args: {
        width: '10rem',
        height: '5rem',
        radius: '20px'
    },
    decorators: []
};

export const Dark: Story = {
    args: {
        width: '10rem',
        height: '5rem',
    },
    decorators: [StyleDecorator(Theme.DARK)]
};

export const Magenta: Story = {
    args: {
        width: '10rem',
        height: '5rem',
    },
    decorators: [StyleDecorator(Theme.MAGENTA)]
};
