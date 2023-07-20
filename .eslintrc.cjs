/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root : true,
    extends : [
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential",
        "@vue/eslint-config-prettier/skip-formatting"
    ],
    parser : "vue-eslint-parser",
    parserOptions : {
        parser : "@typescript-eslint/parser"
    },
    plugins : ["@typescript-eslint", "vue"],
    "rules" : {
        "vue/prop-name-casing" : 1,
        "no-debugger" : process.env.NODE_ENV === "production" ? 2 : 0,
        "indent" : ["error", 4, { "SwitchCase" : 1 }],
        "comma-dangle" : ["error", "never"],
        "vue/html-indent" : ["error", 4, {
            "attribute" : 1,
            "closeBracket" : 0,
            "alignAttributesVertically" : true,
            "ignores" : []
        }],
        "key-spacing" : ["error", {
            "beforeColon" : true,
            "afterColon" : true,
            "mode" : "strict"
        }],
        "vue/html-self-closing" : "off",
        "space-before-function-paren" : ["error", "always"],
        "arrow-spacing" : ["error", { before : true, after : true }],
        "no-case-declarations" : 0,
        "no-prototype-builtins" : 0,
        "quotes" : ["error", "double", { "allowTemplateLiterals" : true }],
        "semi" : ["error", "always"],
        "jest/no-done-callback" : "off",
        "jest/no-conditional-expect" : "off",
        "comma-spacing" : ["error", { "after" : true }],
        "@typescript-eslint/no-explicit-any" : "off"
    }
};
