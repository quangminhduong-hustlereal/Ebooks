// .eslintrc.cjs
module.exports = {
    root: true,
    env: { browser: true, es2021: true, node: true },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
      'plugin:tailwindcss/recommended',
      'prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
    parser: '@typescript-eslint/parser',

    plugins: [
      '@typescript-eslint',
      'react',
      'react-hooks',
      'tailwindcss',
      'prettier',
    ],
    rules: {
      'prettier/prettier': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'tailwindcss/no-custom-classname': 'warn',
      'tailwindcss/classnames-order': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  }
