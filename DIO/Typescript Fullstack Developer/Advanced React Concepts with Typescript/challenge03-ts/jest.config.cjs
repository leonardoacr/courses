module.exports = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    moduleNameMapper: {
        "\\.(css|scss)$": "identity-obj-proxy"
    }
}