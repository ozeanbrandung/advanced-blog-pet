import { DefinePlugin } from 'webpack';
import {Environment} from '../build/types/config';
const path = require('path');

const srcUrl =  path.resolve(__dirname, '../../src');

module.exports = {
    'core': {
        builder: 'webpack5'
    },
    'stories': ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    'addons': [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-mdx-gfm',
        'storybook-css-modules',
        '@storybook/preset-scss'
    ],
    'framework': {
        name: '@storybook/react-webpack5',
        options: {}
    },
    docs: {
        autodocs: false
    },
    webpackFinal: async (config, { configType }) => {
        config.resolve.modules = [
            srcUrl,
            'node_modules',
        ];
        // Disable the Storybook internal-`.svg`-rule for components loaded from our app.
        const svgRule = config.module.rules.find((rule) => 'test.svg'.match(rule.test));
        svgRule.exclude = [ srcUrl ];

        config.module.rules.push({
            test: /\.svg$/i,
            include: [ srcUrl ],
            use: ['@svgr/webpack'],
        });

        config.plugins.push(
            new DefinePlugin({
                __IS_DEV__: true,
                __API__: JSON.stringify(''),
                __PROJECT__: JSON.stringify(Environment.STORYBOOK),
            })
        );

        return config;
    }
};
