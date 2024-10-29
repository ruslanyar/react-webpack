import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginImportX from 'eslint-plugin-import-x';
import reactHooks from 'eslint-plugin-react-hooks';

export default tseslint.config(
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	eslintPluginImportX.flatConfigs.recommended,
	eslintPluginImportX.flatConfigs.typescript,
	eslintPluginPrettierRecommended,
	{
		files: ['./src/**/*.{js,jsx,ts,tsx,json}'],
		plugins: {
			react: pluginReact,
			'@typescript-eslint': tseslint.plugin,
			'react-hooks': reactHooks,
			'jsx-a11y': jsxA11y,
		},
		languageOptions: {
			parser: tseslint.parser,
			ecmaVersion: 2020,
			sourceType: 'module',
			globals: globals.browser,
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	{
		rules: {
			quotes: [2, 'single', { avoidEscape: true }],
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': ['error'],
			'@typescript-eslint/no-var-requires': 'off',
			'react/prop-types': 'off',
			'react/jsx-uses-react': 'off',
			'react/react-in-jsx-scope': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'import-x/no-named-as-default-member': 'off',
		},
	},
	{
		ignores: [
			'node_modules',
			'public',
			'.eslintrc.js',
			'storybook-static',
			'build',
			'dist',
			'webpack/*.js',
			'package*.json',
			'**/*.d.ts',
			'postcss.config.js',
			'.prettierrc.js',
		],
	}
);
