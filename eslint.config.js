// eslint.config.js

module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'next/core-web-vitals',
    ],
    parser: '@babel/eslint-parser', // If you're using babel
    plugins: ['react', 'react-hooks', 'jsx-a11y', 'import'],
    rules: {
      // Disable the "React must be in scope when using JSX" rule
      'react/react-in-jsx-scope': 'off',
      // Disable the "Missing props validation" rule
      'react/prop-types': 'off',
      // You can add other rules to disable as needed
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the version of React
      },
    },
  };