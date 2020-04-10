module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint", // ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended" // This will display prettier errors as ESLint errors. Must be last extend.
  ],
  parserOptions: {
    sourceType: "module" ,// Allows for the use of imports
    ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  // rule overrides
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": ["error", { "allowExpressions": true }],
  },
  settings: {
    react: {
      version: "detect" // Automatically detect the version of React to use
    }
  }
};