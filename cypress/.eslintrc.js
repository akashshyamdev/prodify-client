module.exports = {
  root: true,
  plugins: ['eslint-plugin-cypress'],
  env: { 'cypress/globals': true },
  extends: ['kentcdodds', 'kentcdodds/import', 'plugin:cypress/recommended'],
};
