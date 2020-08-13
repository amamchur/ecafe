module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        es6: true,
        jest: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    plugins: [
        'react'
    ],
    settings: {
        react: {
            pragma: 'React',
            version: 'detect'
        }
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'curly': 'error',
        'brace-style': 'error',
        'no-nested-ternary': 'error',
        'eqeqeq': 'error',
        'no-var': 'error',
        'no-use-before-define': 'error',
        'quotes': ['error', 'single'],
        'jsx-quotes': ['error', 'prefer-single'],
        'semi': ['error', 'always'],
        'max-len': ['error', 120],
        'array-bracket-spacing': ['error', 'never'],
        'prefer-const': 'warn',
        'prefer-arrow-callback': 'warn',
        'prefer-rest-params': 'warn',
        'prefer-spread': 'warn',
        'no-console': 'off',
        'react/prop-types': 'off',
        "indent": ["warn", 2]
    }
}
