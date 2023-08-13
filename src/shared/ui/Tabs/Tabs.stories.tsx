// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './Tabs';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import {action} from '@storybook/addon-actions';


const meta: Meta<typeof Tabs> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'shared/Tabs',
    component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

//👇 Throws a type error it the args don't match the component props
export const TabsLight: Story = {
    args: {
        tabs: [
            {value: '1', label: 'tab 1'},
            {value: '2', label: 'tab 2'},
            {value: '3', label: 'tab 3'}
        ],
        selectedTabValue: '2',
        onTabClick: action('onTabClick')
    },
    decorators: [StyleDecorator(Theme.LIGHT)]
};

export const TabsDark: Story = {
    args: {
        tabs: [
            {value: '1', label: 'tab 1'},
            {value: '2', label: 'tab 2'},
            {value: '3', label: 'tab 3'},
            {value: '3', label: 'tab 4'}
        ],
        selectedTabValue: '1',
        onTabClick: action('onTabClick')
    },
    decorators: [StyleDecorator(Theme.DARK)]
};
