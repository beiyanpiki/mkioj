module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['plugin:vue/essential', 'google', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 12,
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	plugins: ['vue', '@typescript-eslint'],
	rules: {},
}