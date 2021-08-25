module.exports = {
  "extends": ["airbnb/base", "prettier"],
  "plugins": ["fsd", "prettier"],
  "rules": {
    "linebreak-style": ["error", "windows"],
    "fsd/hof-name-prefix": "error",
    "fsd/no-heavy-constructor": "error",
    "fsd/jq-cache-dom-elements": "error",
    "fsd/jq-use-js-prefix-in-selector": "error",
    "fsd/no-function-declaration-in-event-listener": "error",
    "fsd/split-conditionals": "error"
  },
  "env": {
      "browser": true,
      "node": true,
      "jquery": true
  },
  "globals": {
      "Inputmask": "readonly"
  }
}