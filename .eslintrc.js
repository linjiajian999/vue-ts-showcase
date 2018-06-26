module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-eval': 'error',
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    camelcase: 'error',
    'multiline-ternary': [
      'error',
      'always'
    ],
    'no-trailing-spaces': [
      'error',
      {
        ignoreComments: true
      }
    ],
    'no-whitespace-before-property': 'error',
    'semi-spacing': 'error',
    'space-infix-ops': 'error',
    'no-var': 'error',
    'prefer-rest-params': 'error',
    semi: [
      'error',
      'never'
    ],
    'semi-style': [
      'error',
      'first'
    ],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'one-var': [
      'error',
      'never'
    ],
    'no-undefined': 'error',
    'no-undef-init': 'error',
    'no-script-url': 'error',
    'vue/attribute-hyphenation': [
      'error',
      'always'
    ],
    'vue/html-end-tags': 'error',
    'vue/html-indent': [
      'error',
      2
    ],
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/attributes-order': 'error',
    'vue/html-quotes': [
      'error',
      'double'
    ],
    'vue/order-in-components': 'error'
  }
}