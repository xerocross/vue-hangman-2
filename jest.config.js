
/* global module */
module.exports = {
    moduleFileExtensions : ["js", "jsx", "ts", "tsx", "json", "vue"],
    preset : "ts-jest",
    testEnvironment : "jsdom",
    testEnvironmentOptions : {
        customExportConditions : ["node", "node-addons"]
    },
    transform : {
        "^.+\\.vue$" : "@vue/vue3-jest",
        "^.+\\.tsx?$" : "ts-jest",
        "^.+\\.(js|jsx)$" : "babel-jest"
    },
    moduleNameMapper : {
        "^@/(.*)$" : "<rootDir>/src/$1"
    },
    testMatch : ["**/*.spec.(js|jsx|ts|tsx)"],
    transformIgnorePatterns : ["/node_modules/"],
    collectCoverageFrom : ["src/**/*.{js,jsx,ts,tsx,vue}", "!src/main.ts"],
    coverageReporters : ["html", "text-summary"]
};