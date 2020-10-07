module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [ "eslint:recommended",
    "plugin:react/recommended",
  ],
  "env": {
    "es6": true
  },
  rules: {
    semi: 1,
    quotes: [ 2, "single" ],
    "react/prop-types": 2,
    'react/jsx-max-props-per-line': 1,
    "arrow-parens": "error",
    "no-undef": 0,
    "prettier/prettier": [ error ],

  },
  plugins: [ 'prettier' ],
};
