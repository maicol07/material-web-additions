import { defineConfig, globalIgnores } from "eslint/config";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import wc from "eslint-plugin-wc";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([
    globalIgnores(["**/node_modules", "*/dist", "**/*.d.ts", "*/*-css.ts", "**/karma.*.js"]),
    {
        extends: compat.extends(
            "eslint:recommended",
            "google",
            "plugin:wc/recommended",
            "plugin:n/recommended",
        ),

        plugins: {
            "@typescript-eslint": typescriptEslint,
            wc,
        },

        languageOptions: {
            globals: {
                ...globals.jasmine,
                ...globals.browser,
                goog: false,
                assert: false,
            },

            parser: tsParser,
            ecmaVersion: 2020,
            sourceType: "module",
        },

        settings: {
            wc: {
                elementBaseClasses: ["BaseElement", "LitElement", "FormElement"],
            },
        },

        rules: {
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/indent": "off",
            indent: "off",
            "max-len": "off",
            "block-spacing": "off",

            "@typescript-eslint/explicit-member-accessibility": ["error", {
                accessibility: "no-public",
            }],

            "no-new": "warn",

            quotes: ["error", "single", {
                avoidEscape: true,
            }],

            "no-var": "error",
            "no-floating-decimal": "error",

            "no-unused-vars": ["error", {
                varsIgnorePattern: "^(?:(?:MDC(?:(?:[A-Z][a-z0-9]+)+)Adapter)|(?:(?:(?:[A-Z][a-z0-9]+)+)Type))$",
            }],

            "require-jsdoc": "off",
            "valid-jsdoc": "off",
            "prefer-const": "error",
            "comma-dangle": "off",
            "n/no-missing-import": "warn",
        },
    },
    {
        files: ["**/*.ts"],

        rules: {
            "no-unused-vars": "off",
            "no-invalid-this": "off",
            "new-cap": "off",
        },
    },
    {
        files: ["**/test/*.ts"],

        rules: {
            "@typescript-eslint/no-non-null-assertion": "off",
        },
    },
]);