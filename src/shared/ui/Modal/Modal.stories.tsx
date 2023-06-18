// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Modal> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'shared/Modal',
    component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

//👇 Throws a type error it the args don't match the component props
export const ModalLight: Story = {
    args: {
        isOpened: true,
        children: <div>sdfs</div>
    },
};

export const ModalDark: Story = {
    args: {
        isOpened: true,
        children: <div>sdfs</div>
    },
    decorators: [StyleDecorator(Theme.DARK)]
};
