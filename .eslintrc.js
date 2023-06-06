module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'jest': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    'overrides': [
        {
            files: [
                // How to target the inline-template of just *.spec.ts files?
                '**/src/**/*.test.{ts,tsx}'
            ],
            rules: {
                'i18next/no-literal-string': 'off'
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
        'i18next'
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
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/ban-ts-comment': 'warn',
        'i18next/no-literal-string': [
            'error',
            {markupOnly: true, ignoreAttribute: ['data-testid', 'to']}
        ]
    },

};
