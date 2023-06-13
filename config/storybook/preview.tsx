//import '../../src/app/styles/index.scss';
// import { Preview } from '@storybook/react';
//
// export const parameters = {
//     actions: { argTypesRegex: '^on[A-Z].*' },
//     controls: {
//         matchers: {
//             color: /(background|color)$/i,
//             date: /Date$/,
//         },
//     },
//     decorators: [
//         (Story) => (
//             <div className="app light">
//                 <Story />
//             </div>
//         )
//     ]
// };

// .storybook/preview.tsx

//import React from 'react';

import { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';

const preview: Preview = {
    parameters: {
        layout: 'fullscreen'
    },
    decorators: [
        StyleDecorator(Theme.LIGHT)
    ],
};

export default preview;

