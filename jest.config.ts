import type { Config } from "@jest/types";

/**
 * All files
 */
const srcDir = "<rootDir>/srv";
const baseTestDir = "<rootDir>/test/jest";

const config: Config.InitialOptions = {
	preset: "ts-jest",
	testEnvironment: "node",
	verbose: true,
	globalSetup: `${baseTestDir}/setup.ts`,
	collectCoverage: true,
	collectCoverageFrom: [`${srcDir}/**/*.ts`],
	testMatch: [`${baseTestDir}/**/*.test.ts`],
	testTimeout: 99999999,
	transform: {
		// '^.+\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`
		// '^.+\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`
		"^.+\\.tsx?$": [
			"ts-jest",
			{
				tsconfig: "./test/jest/tsconfig.json",
			},
		],
	},
};

export default config;
