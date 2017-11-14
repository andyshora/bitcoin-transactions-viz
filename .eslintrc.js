// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  'extends': ['airbnb'],
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    // allow async-await
    'generator-star-spacing': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'indent': ['error', 2, {'SwitchCase': 1}],
    'jsx-quotes': ['error', 'prefer-single'],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'max-len': ['error', 120],
    'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 2 }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-inline-comments': ['error'],
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    'operator-linebreak': ['error', 'before'],
    'semi': 0
  }
}
