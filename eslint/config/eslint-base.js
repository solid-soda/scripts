module.exports = {
  plugins: ['eslint-plugin-import-helpers'],
  extends: ['airbnb-base', 'prettier'],
  rules: {
    'no-undef': 0,
    'no-restricted-syntax': 0,
    'class-methods-use-this': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          'module',
          ['/^app/', '/^lib/', '/^config/', '/^src/', '/^ui/'],
          ['/^$/', '/^&/'],
          ['/^@shared/', '/^@app/', '/^@back/', '/^@front/'],
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'ignore', ignoreCase: true },
      },
    ],
  },
};
