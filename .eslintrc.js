module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.vuetify']
      }
    }
  },
  rules: {
    indent: ['error', 2], // Enforces 2-space indentation
    quotes: ['error', 'single'], // Enforces single quotes
    semi: ['error', 'never'], // Requires semicolons
    'no-console': 'off', // Allows console logs
    'comma-dangle': ['error', 'never'], // Trailing commas for multi-line
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'function-paren-newline': 'off'
  }
}
