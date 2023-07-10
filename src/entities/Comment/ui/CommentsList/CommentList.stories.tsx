// Replace your-framework with the name of your framework
import type {Meta, StoryObj} from '@storybook/react';
import {CommentsList} from './CommentsList';


const meta: Meta<typeof CommentsList> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'entities/Comment/CommentsList',
    component: CommentsList,
};

export default meta;
type Story = StoryObj<typeof CommentsList>;

//👇 Throws a type error it the args don't match the component props
export const Default: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'sefdlk',
                articleId: '1',
                user: {id: '1', username: 'John', avatar: 'sdf'}
            },
            {
                id: '2',
                text: 'h1!@',
                articleId: '1',
                user: {id: '1', username: 'Honey', avatar: 'sdf'}
            }
        ]
    },

};

export const Loading: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'sefdlk',
                articleId: '1',
                user: {id: '1', username: 'John', avatar: 'sdf'}
            },
            {
                id: '2',
                text: 'h1!@',
                articleId: '1',
                user: {id: '1', username: 'Honey', avatar: 'sdf'}
            }
        ],
        isLoading: true,
    },

};


