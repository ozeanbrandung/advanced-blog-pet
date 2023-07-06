// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import { Code } from './Code';


const meta: Meta<typeof Code> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'shared/Code',
    component: Code,
};

export default meta;
type Story = StoryObj<typeof Code>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
    args: {
        codeText: 'const meta: Meta<typeof Code> = {\n' +
            '    /* 👇 The title prop is optional.\n' +
            '     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading\n' +
            '     * to learn how to generate automatic titles\n' +
            '     */\n' +
            '    title: \'Code.stories\',\n' +
            '    component: Code.stories,\n' +
            '};\n' +
            '\n' +
            'export default meta;\n' +
            'type Story = StoryObj<typeof Code>;'
    },
    decorators: []
};
