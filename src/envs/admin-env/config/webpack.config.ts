import type { WebpackConfigMutator } from '@teambit/webpack'
import { resolve } from 'path'

/**
 * Modifies the webpack config for the components preview bundle.
 * @see https://bit.dev/reference/webpack/webpack-config
 */
export const webpackTransformer = (configMutator: WebpackConfigMutator): WebpackConfigMutator => {
  configMutator.addAliases({
    '@': resolve(__dirname, './src'),
    '~': resolve(__dirname, '.'),
  })
  configMutator.addModuleRule([
    {
      test: /\.json$/i,
      loader: 'json5-loader',
      type: 'javascript/auto',
    },
  ])

  return configMutator
}
