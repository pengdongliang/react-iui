const { prettierConfig } = require('@teambit/react.react-env')

const defaultPrettierConfig = require('../../../../.prettierrc.js')

module.exports = {
  ...prettierConfig,
  ...defaultPrettierConfig,
}
