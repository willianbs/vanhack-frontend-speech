module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module",
    allowImportExportEverywhere: true,
    ecmaVersion: 2018
  },
  plugins: ["prettier"],
  extends: "plugin:prettier/recommended",
  rules: {}
};
