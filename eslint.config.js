import pluginJs from "@eslint/js";
import pluginPrettier from "eslint-plugin-prettier/recommended";
import pluginSvelte from "eslint-plugin-svelte";
import globals from "globals";

export default [
  { ignores: [".svelte-kit"] },

  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },

  pluginJs.configs.recommended,
  pluginPrettier,
  ...pluginSvelte.configs["flat/recommended"],
];
