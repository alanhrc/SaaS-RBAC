/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@rocketseat/eslint-config/next'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
  },
  // ignorePatterns: [
  //   // Ignore dotfiles
  //   "node_modules/",
  // ],
  // overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
}
