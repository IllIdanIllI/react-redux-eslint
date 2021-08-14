module.exports = {
  env: { browser: true, es6: true },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly' },
  parserOptions:
 {
   ecmaFeatures: { jsx: true },
   ecmaVersion: 2018,
   sourceType: 'module',
 },
  plugins: [
    'import-newlines',
    'react',
    'react-hooks',
  ],
  rules:
 {
   'import-newlines/enforce': ['error', { items: 2 }],
   'react-hooks/rules-of-hooks': 'error',
   'react-hooks/exhaustive-deps': 'warn',
   'no-use-before-define': 'off',
   'no-unused-vars': ['error'],
   'no-shadow': 'off',
   'no-unused-expressions': ['error', { allowTernary: true }],
   'array-callback-return': ['warn'],
   'import/prefer-default-export': 'off',
   'import/no-extraneous-dependencies': 'off',
   'react/react-in-jsx-scope': 'off',
   'react/destructuring-assignment': 'warn',
   'no-underscore-dangle': 'warn',
   'no-plusplus': 'warn',
   'jsx-a11y/anchor-is-valid': 'off',
   'import/extensions':
    ['error',
      'ignorePackages',
      {
        js: 'never', jsx: 'never', ts: 'never', tsx: 'never',
      }],
   'import/order':
    ['error',
      {
        groups:
         ['builtin',
           'external',
           'internal',
           'sibling',
           'parent',
           'index',
           'unknown'],
        'newlines-between': 'always',
      }],
   'padding-line-between-statements':
    ['error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'continue' },
      { blankLine: 'always', prev: '*', next: 'break' },
      { blankLine: 'always', prev: 'while', next: '*' },
      { blankLine: 'always', prev: '*', next: 'while' },
      { blankLine: 'always', prev: 'switch', next: '*' },
      { blankLine: 'always', prev: '*', next: 'switch' },
      { blankLine: 'always', prev: 'if', next: '*' },
      { blankLine: 'always', prev: '*', next: 'if' }],
   'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
   'no-tabs': ['error', { allowIndentationTabs: true }],
   quotes: ['error', 'single'],
   'indent' : ['error', 2, { SwitchCase: 1, MemberExpression: 1 }],
   'comma-dangle': ['error', 'always-multiline'],
   'consistent-return': ['warn'],
   'no-mixed-spaces-and-tabs': 'off',
   'object-curly-newline': ['error', {
     ImportDeclaration: { minProperties: 3, consistent: false },
   }],
   'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
 },
};