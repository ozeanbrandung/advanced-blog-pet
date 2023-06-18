// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { SuspenseDecorator } from 'shared/config/storybook/SuspenseDecorator/SuspenseDecorator';

const meta: Meta<typeof LoginForm> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'features/LoginForm',
    component: LoginForm,
    decorators: [StoreDecorator({authForm: {usernameInputValue: '', passwordInputValue: '', error: null, isLoading: false}}), SuspenseDecorator]
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

//👇 Throws a type error it the args don't match the component props
export const Light: Story = {
    args: {},
    //decorators: []
};

export const Dark: Story = {
    args: {},
    decorators: [StyleDecorator(Theme.DARK)]
};

export const WithState: Story = {
    args: {},
    decorators: [StoreDecorator(
        {authForm: {
            usernameInputValue: 'abc',
            passwordInputValue: '123',
            error: 'Error',
            isLoading: false
        }}
    )]
};
