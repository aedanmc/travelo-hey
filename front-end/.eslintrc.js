module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
  ],
  rules: {
    'object-curly-newline': 0,
    'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx"] }],
    'linebreak-style': 0,
  },
};
