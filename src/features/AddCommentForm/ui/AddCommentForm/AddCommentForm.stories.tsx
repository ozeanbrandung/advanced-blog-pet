// Replace your-framework with the name of your framework
import type {Meta, StoryObj} from '@storybook/react';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import AddCommentForm from './AddCommentForm';
import {action} from '@storybook/addon-actions';


const meta: Meta<typeof AddCommentForm> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'features/AddCommentForm',
    component: AddCommentForm,
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

//👇 Throws a type error it the args don't match the component props
export const Default: Story = {
    args: {
        handleAddNewComment: action('handleAddNewComment')
    },
    decorators: [StoreDecorator({addComment: {textValue: 'some text'}})]
    // @ts-ignore
    //decorators: [StoreDecorator({profile: mockState} as StateSchema)]
};

export const Errored: Story = {
    args: {
        handleAddNewComment: action('handleAddNewComment')
    },
    decorators: [StoreDecorator({addComment: {textValue: '', error: 'error'}})]
};

export const Loading: Story = {
    args: {
        handleAddNewComment: action('handleAddNewComment')
    },
    decorators: [StoreDecorator({addComment: {textValue: '', isLoading: true}})]
};


