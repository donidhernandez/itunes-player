module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
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
    plugins: ['react'],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
    },
}
