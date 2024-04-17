module.exports = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "babel-jest"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test))\\.(jsx?|tsx?)$",
    moduleFileExtensions: ["ts", "tsx", "js"],
    moduleNameMapper: {
        "\\.(svg|css)$": "<rootDir>/src/__mocks__/file-mock.js"
    }
};