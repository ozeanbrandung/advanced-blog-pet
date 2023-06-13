module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'jest': true,
        'node': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended'
    ],
    'overrides': [
        {
            files: [
                // How to target the inline-template of just *.spec.ts files?
                '**/src/**/*.{test,stories}.{ts,tsx}'
            ],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off'
            }
        },
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks'
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'warn',
            'always'
        ],
        'max-len': ['error', {'ignoreComments': true, 'code': 100}],
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/ban-ts-comment': 'warn',
        'i18next/no-literal-string': [
            'error',
            {markupOnly: true, ignoreAttribute: ['data-testid', 'to']}
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/display-name': 'off',
        'react/prop-types': 'off',
    },

};
