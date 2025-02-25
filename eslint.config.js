import pluginJs from "@eslint/js";
import eslintConfigPrettier from "@vue/eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  importPlugin.flatConfigs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      "no-console": "off",
      "no-debugger": "off",
      "import/named": "off",
      "import/no-unresolved": "off",
      "sort-imports": [
        "error",
        {
          ignoreDeclarationSort: true,
        },
      ],
      "import/order": [
        "error",
        {
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          "newlines-between": "always",
        },
      ],
    },
  },
  {
    files: ["**/*.{ts,vue}"],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
];
