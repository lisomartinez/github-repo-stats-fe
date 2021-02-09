module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "jest/globals": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style"
  ],
  "parser": "@typescript-eslint/parser",
  "settings": {
    "react": {
      "version": "detect"   // Automatically detect the react version
    }
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "jest"
  ],
  "rules": {
    "indent": [
      "error",
      4
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "never"
    ],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },
  "globals": {
    "React": "writable"
  }
}
