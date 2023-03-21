module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        // Add any custom ESLint rules here
    },
};
