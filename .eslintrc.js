module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:all",
        "plugin:react/all"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks"
    ],
    "rules": {
        // Allows to leave commented lines of code
        "capitalized-comments": "off",

        // Allows to use "a", "b" fn parameters for sorting and "i" for loops and "e" for events
        "id-length": ["error", { "exceptions": ["a", "b", "e", "i"] }],

        // Requires to indent with two spaces, and have additional identation on switch statements
        "indent": ["error", 4, { "SwitchCase": 1 }],

        // Allows long urls without line breaks and long classNames in JSX
        "max-len": ["warn", 120, {
            "ignoreUrls": true,
            "ignoreTemplateLiterals": true
        }],

        // Set maximum file length
        "max-lines": ["warn", { "max": 300 }],

        // Set maximum statements
        "max-statements": ["warn", 15],

        // Allows to leave no empty lines before return
        "newline-before-return": "off",

        // Allows to output warn and error messages in console
        "no-console": ["error", { "allow": ["warn", "error"] }],

        // Allows to user both "no-mixed-operators" and "no-extra-parens" by allowing extra parentheses in nested binary expressions
        "no-extra-parens": ["error", "all", {
            "nestedBinaryExpressions": false,
            "ignoreJSX": "multi-line"
        }],

        // Allows use of void 0 and array[array.length - 1]
        "no-magic-numbers": ["error", { "ignore": [0, 1, -1] }],

        // Allows to use ternary operators for `let foo = bar ? bat : 0`
        "no-ternary": "off",

        // Allows multiline-ternary
        "multiline-ternary": "off",

        // Allows to use classNames with `.__active` modificators in JSX
        "no-underscore-dangle": "off",

        // Allows to generate true undefined value
        "no-void": "off",

        // Allows to write TODO comments
        "no-warning-comments": "off",

        // Allows to use several var statements (as appropriate in ES6 with const, let, var)
        "one-var": ["error", "never"],

        // Requires to avoid padded blocks to get more compact code
        "padded-blocks": ["error", "never"],

        // Requires to use single quotes
        "quotes": ["error", "single"],

        // Requires to use quotes on props only when needed)
        "quote-props": ["error", "as-needed"],

        // Requires semicolons
        "semi": ["error", "always"],

        // Allows to not to sort object properties by keys names
        "sort-keys": "off",

        // Requires spacing inside of braces
        "object-curly-spacing": ["error", "always"],

        // Allows consistent line breaks inside braces
        "object-curly-newline": "off",

        // Allows you to pass an array of method
        "class-methods-use-this": "off",

        // Allows no dot-notation for css modules
        "dot-notation": ["error", { "allowPattern": "^[a-z]" }],

        // Requires or disallows trailing commas
        "comma-dangle": ["error", {
            "arrays": "only-multiline",
            "objects": "only-multiline",
            "imports": "only-multiline",
            "exports": "only-multiline",
            "functions": "ignore"
        }],

        // Allow this keywords outside of classes or class-like objects
        "no-invalid-this": "off",

        // Disallow process.env
        "no-process-env": "warn",

        // Allows newline after dot
        "dot-location": ["error", "property"],

        // Allows func declaration
        "func-style": ["error", "declaration", { "allowArrowFunctions": true }],

        // Allows confusing arrow"
        "no-confusing-arrow": "off",

        // Allows not to use jsdoc
        "require-jsdoc": "off",

        // Requires to indent with two spaces
        "react/jsx-indent": ["error", 4],

        // Requires to indent with two spaces
        "react/jsx-indent-props": ["error", 4],

        // Allows `ref={(node) => this.node = node} and arrow functions
        "react/jsx-no-bind": ["error", {
            "ignoreRefs": true,
            "allowArrowFunctions": true
        }],

        // Allows React Components without declaring a shouldComponentUpdate method
        "react/require-optimization": 0,

        // Not enforce stateless React Components to be written as a pure function
        "react/prefer-stateless-function": 1,

        // Enforce state initialization style
        "react/state-in-constructor": "off",

        // Allows dangerouslySetInnerHTML
        "react/no-danger": 0,

        // Allows setState
        "react/no-set-state": "off",

        // Allow use shorthand or standard form for React fragments
        "react/jsx-fragments": "off",

        // Allows certain props on Components
        "react/forbid-component-props": "off",

        "array-element-newline": ["error", "consistent"],

        "react/destructuring-assignment": "off",
        "react/forbid-prop-types": "off",
        "max-lines-per-function": "off",
        "implicit-arrow-linebreak": "off",
        "react/jsx-max-depth": "off",
        "array-bracket-newline": ["error", "consistent"],

        // Checks rules of Hooks
        "react-hooks/rules-of-hooks": "error",
        // Checks effect dependencies
        "react-hooks/exhaustive-deps": "warn"
    }
};
