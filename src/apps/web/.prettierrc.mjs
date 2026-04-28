const prettierConfig = {
	endOfLine: "auto",
	printWidth: 150,
	quoteProps: "as-needed",
	semi: true,
	singleQuote: false,
	tabWidth: 4,
	trailingComma: "none",
	useTabs: true,
	overrides: [
		{
			files: "*.yml",
			options: {
				tabWidth: 2,
				useTabs: false
			}
		}
	]
};

export default prettierConfig;
