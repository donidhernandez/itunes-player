module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'standard-with-typescript',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react', 'react-hooks'],
    rules: {
        // Possible errors
        'no-console': 'warn',
        // Best practices
        'dot-notation': 'error',
        'no-else-return': 'error',
        'no-floating-decimal': 'error',
        'no-sequences': 'error',
        // Stylistic
        'array-bracket-spacing': 'error',
        'computed-property-spacing': ['error', 'never'],
        curly: 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'array-callback-return': 'off',
        'prefer-const': 'error',
        'import/prefer-default-export': 'off',
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
            },
        ],
        'no-lonely-if': 'error',
        // 'no-nested-ternary': 'error',
        'no-unneeded-ternary': 'error',
        'one-var-declaration-per-line': 'error',
        quotes: [
            'error',
            'single',
            {
                allowTemplateLiterals: false,
                avoidEscape: true,
            },
        ],
        'no-unused-expressions': 'off',
        'no-prototype-builtins': 'off',
        'react/jsx-uses-react': 'off',
        'jsx-a11y/href-no-hash': [0],
        'react/display-name': 0,
        'react/no-deprecated': 'error',
        'react/no-unsafe': [
            'error',
            {
                checkAliases: true,
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 0,
        '@typescript-eslint/strict-boolean-expressions': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}
