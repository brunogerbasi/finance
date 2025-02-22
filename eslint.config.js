import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect", 
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      semi: ["error", "never"],
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
      indent: ["error", 2]
    },
  },
]
