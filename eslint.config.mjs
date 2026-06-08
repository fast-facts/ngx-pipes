import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import angular from "angular-eslint";

export default defineConfig([
    globalIgnores(["**/node_modules/", "**/e2e/", "src/environments/"]),
    {
        files: ["**/*.ts"],
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            ...tseslint.configs.stylistic,
            ...angular.configs.tsRecommended,
        ],
        processor: angular.processInlineTemplates,
        languageOptions: {
            parserOptions: {
                project: ["src/tsconfig.app.json", "src/tsconfig.spec.json"],
            },
        },
        rules: {
            eqeqeq: ["error", "always", { null: "ignore" }],
            "no-return-await": "error",
            "prefer-arrow-callback": "error",
            "quote-props": ["error", "as-needed"],
            semi: ["error", "always"],
            "@typescript-eslint/no-deprecated": "error",
            "@typescript-eslint/no-empty": "off",
            "@typescript-eslint/no-empty-function": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unused-expressions": "off",
            "@typescript-eslint/no-unused-vars": "off",
        },
    },
    {
        files: ["**/*.html"],
        extends: [
            ...angular.configs.templateRecommended,
        ],
    },
]);