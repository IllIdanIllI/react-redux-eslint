const config = {
  extends: 'stylelint-config-recommended-scss',
  rules: {
    indentation: 2,
    "selector-pseudo-class-no-unknown": [
      true,
      { "ignorePseudoClasses": ["export"]}
    ],
    "property-no-unknown": [
      true,
      { "ignoreProperties": ["/^[a-z]+/"]}
    ],
    "no-missing-end-of-source-newline": [true]
  },
}

module.exports = config;