import globals from "globals";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  { files: ["**/*.{js, mjs, cjs, jsx}"] },
  { languageOptions: { parserOpitions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginReactConfig,

  {
    rules: {
      "react/prop-types": "off", // Desativa a verificação de prop-types
    },
  },
];
