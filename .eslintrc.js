// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
  ],
  globals: {
    '__DEV__': true,
  },
  env: {
    'browser': true,
  },
  rules: {
    'no-confusing-arrow': 0,
    'react/jsx-quotes': 0,
    'jsx-quotes': [
      2,
      'prefer-double'
    ],
    'global-require': 0,
    'no-fallthrough': 0,
    'no-underscore-dangle': 0,
    'react/jsx-no-bind': 0,
    'arrow-parens': [
      2,
      'as-needed'
    ],
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': [
      2,
      {
        'devDependencies': true,
      }
    ],
    'import/no-unresolved': [
      2,
      {
        caseSensitive: false,
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': [
          '.js',
          '.jsx'
        ]
      }
    ],
    'generator-star-spacing': 0,
    'require-yield': 0,
    'import/extensions': 0,
    'react/no-danger': 0,
    'react/forbid-prop-types': 0,
    'react/sort-comp': 0,
    'no-constant-condition': 0,
  }
};
