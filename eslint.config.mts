//@ts-expect-error no types available
import cds from "@sap/cds/eslint.config.mjs";
//@ts-expect-error no types available
import cdsPlugin from "@sap/eslint-plugin-cds";
import tseslint from "typescript-eslint";
import pluginJest from "eslint-plugin-jest";
import { defineConfig } from "eslint/config";
import msgfoodEslintPlugin from "@msggroup-softproviding/eslint-plugin";

export default defineConfig([
	...tseslint.configs.recommended,
	...tseslint.configs.stylistic,
	{
		rules: {
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/no-unused-expressions": "off",
			"@typescript-eslint/no-unused-vars": "warn",
			"@typescript-eslint/array-type": [
				"error",
				{
					default: "array-simple",
				},
			],
		},
	},
	{
		ignores: [
			"**/app/**/*.js",
			"**/srv/external/*",
			"**/gen/",
			"test/wdi5/**/*",
		],
	},
	{
		// enable jest rules on test files
		files: ["*/**/*.test.ts"],

		...pluginJest.configs["flat/recommended"],
		...pluginJest.configs["flat/style"],
	},
	...cds.recommended,
	cdsPlugin.configs.recommended, // init cdsPlugin
	{ rules: { "no-unused-vars": "off" } }, // turn off duplicate rule by eslint and @typescript-eslint
	{
		files: ["srv/**/*.ts"],
		...msgfoodEslintPlugin.recommended,
	},
]);
