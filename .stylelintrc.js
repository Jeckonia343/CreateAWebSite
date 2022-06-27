module.exports = {
  extends: ['@titicaca/eslint-config-triple/stylelint'],

  overrides: [
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      customSyntax: '@stylelint/postcss-css-in-js',
    },
  ],
}
