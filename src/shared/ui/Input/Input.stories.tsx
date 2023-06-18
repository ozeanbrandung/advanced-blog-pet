// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/providers/ThemeProvider';


const meta: Meta<typeof Input> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'shared/Input',
    component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

//👇 Throws a type error it the args don't match the component props
export const Light: Story = {
    args: {
        placeholder: 'placeholder'
    },
    decorators: []
};

export const Dark: Story = {
    args: {
        placeholder: 'placeholder'
    },
    decorators: [StyleDecorator(Theme.DARK)]
};


export const WithoutPlaceholder: Story = {
    args: {},
    //decorators: []
};

export const IsFocused: Story = {
    args: {
        placeholder: 'placeholder',
        autoFocus: true,
    },
    //decorators: []
};

export const WithValue: Story = {
    args: {
        placeholder: 'placeholder',
        autoFocus: true,
        value: 'value'
    },
    //decorators: []
};
