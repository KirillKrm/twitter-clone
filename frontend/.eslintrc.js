const prettierOptions = require('../.prettierrc.js')

module.exports = {
  extends: ['react-app', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)', '**/*.js?(x)'],
      rules: {
        'prettier/prettier': ['warn', prettierOptions],
      },
    },
  ],
}
