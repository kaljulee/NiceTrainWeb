module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  plugins: ['prettier', 'react'],
  globals: {
    localStorage: true,
    Blob: true
  },
  rules: {
    'import/no-extraneous-dependencies': 'warn',
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    camelcase: 'warn',
    'func-names': 'warn',
    'global-require': 'warn',
    radix: 'warn',
    'no-restricted-globals': 'warn',
    'react/forbid-prop-types': 'warn',
    'no-unused-vars': 'warn',
    'react/destructuring-assignment': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'prettier/prettier': [
      'error',
      {
        semi: true,
        tabWidth: 2,
        printWidth: 80,
        useTabs: false,
        singleQuote: true,
        bracketSpacing: true,
        arrowParens: 'always',
        trailingComma: 'none'
      }
    ]
  }
};
