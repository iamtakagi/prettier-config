module.exports = {
    printWidth: 100,
    tabWidth: ,
    useTabs: false,
    semi: true,
    singleQuote: true,
    quoteProps: "consistent",
    trailingComma: "all",
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: "avoid",
    endOfLine: "lf",
    overrides: [
        {
            files: ["*.yml", "*.yaml", "*.md"],
            options: {
                tabWidth: 2,
            },
        },
    ],
}
