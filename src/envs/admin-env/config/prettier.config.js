const { prettierConfig } = require('@teambit/react.react-env')

const { resolve } = require('path')

const defaultPrettierConfig = resolve('~/.prettierrc.js')

module.exports = {
  ...prettierConfig,
  ...defaultPrettierConfig,
}
