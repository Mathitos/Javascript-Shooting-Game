module.exports = {
  root: false,
  env: {
    node: true
  },
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    semi: ['error', 'never'],
    'no-console': 'off',
    'no-undef': 'off'
  },
  ignorePatterns: ['dist/*']
}
