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
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-eval': 'error',
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'camelcase': 'error',
    'multiline-ternary': ['error', 'always'],
    'no-trailing-spaces': ['error', {
      'ignoreComments': true
    }],
    'no-whitespace-before-property': 'error',
    // 'eslint nonblock-statement-body-position': ['error', 'beside'],
    'semi-spacing': 'error',
    'space-infix-ops': 'error',
    'no-var': 'error',
    'prefer-rest-params': 'error',
    'semi': ['error', 'never'],
    'semi-style': ['error', 'first'],
    'arrow-spacing': ['error', {
      'before': true,
      'after': true
    }],
    'one-var': ['error', 'never'],
    'no-undefined': 'error',
    'no-undef-init': 'error',
    'no-script-url': 'error'
  }
}