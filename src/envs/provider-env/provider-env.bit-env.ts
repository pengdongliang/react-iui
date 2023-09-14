/**
 * 管理后台env
 */

import { Pipeline } from '@teambit/builder'
import { Compiler } from '@teambit/compiler'
import { EslintConfigWriter, ESLintLinter, EslintTask } from '@teambit/defender.eslint-linter'
import { JestTask, JestTester } from '@teambit/defender.jest-tester'
import { PrettierConfigWriter, PrettierFormatter } from '@teambit/defender.prettier-formatter'
import { DependenciesEnv, EnvHandler } from '@teambit/envs'
import { Preview } from '@teambit/preview'
import { ReactPreview } from '@teambit/preview.react-preview'
import { ReactEnv } from '@teambit/react.react-env'
import { Tester } from '@teambit/tester'
import {
  resolveTypes,
  TypescriptCompiler,
  TypescriptConfigWriter,
  TypescriptTask,
} from '@teambit/typescript.typescript-compiler'
import { ConfigWriterList } from '@teambit/workspace-config-files'
import { ESLint as ESLintLib } from 'eslint'
import prettier from 'prettier'
import typescript from 'typescript'

import { webpackTransformer } from './config/webpack.config'
import hostDependencies from './preview/host-dependencies'

export class ProviderEnv extends ReactEnv implements DependenciesEnv {
  /* A shorthand name for the env */
  name = 'provider-env'

  protected tsconfigPath = require.resolve('./config/tsconfig.json')

  protected tsTypesPath = './types'

  protected jestConfigPath = require.resolve('./config/jest.config')

  protected eslintConfigPath = require.resolve('./config/eslint-config')

  protected eslintExtensions = ['.ts', '.tsx', '.js', '.jsx', '.mjs']

  protected prettierConfigPath = require.resolve('@yooco/react-iui.dev-config.prettier-config-base')

  protected prettierExtensions = ['.js', '.jsx', '.ts', '.tsx']

  protected previewMounter = require.resolve('./preview/mounter')

  /* The compiler to use during development */
  compiler(): EnvHandler<Compiler> {
    /**
     * @see https://bit.dev/reference/typescript/using-typescript
     *
     */
    return TypescriptCompiler.from({
      tsconfig: this.tsconfigPath,
      types: resolveTypes(__dirname, [this.tsTypesPath]),
      typescript,
    })
  }

  /* The test runner to use during development */
  tester(): EnvHandler<Tester> {
    /**
     * @see https://bit.dev/reference/jest/using-jest
     *
     */
    return JestTester.from({
      config: this.jestConfigPath,
    })
  }

  /* The linter to use during development */
  linter() {
    /**
     * @see https://bit.dev/reference/eslint/using-eslint
     *
     */
    return ESLintLinter.from({
      tsconfig: this.tsconfigPath,
      configPath: this.eslintConfigPath,
      pluginsPath: __dirname,
      extensions: this.eslintExtensions,
      eslint: ESLintLib,
    })
  }

  /**
   * The formatter to use during development
   * (source files are not formatted as part of the components' build)
   *
   */
  formatter() {
    /**
     * @see https://bit.dev/reference/prettier/using-prettier
     *
     */
    return PrettierFormatter.from({
      configPath: this.prettierConfigPath,
      extensions: this.prettierExtensions,
      prettier,
    })
  }

  /**
   * Generates the component previews during development and during build
   */
  preview(): EnvHandler<Preview> {
    /**
     * @see https://bit.dev/docs/react-env/component-previews
     */
    return ReactPreview.from({
      mounter: this.previewMounter,
      hostDependencies,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      Transformers: [webpackTransformer],
    })
  }

  /**
   * A set of processes to be performed before a component is snapped, during its build phase
   * @see https://bit.dev/docs/react-env/build-pipelines
   */
  build() {
    return Pipeline.from([
      TypescriptTask.from({
        tsconfig: this.tsconfigPath,
        types: resolveTypes(__dirname, [this.tsTypesPath]),
        typescript,
      }),
      EslintTask.from({
        tsconfig: this.tsconfigPath,
        configPath: this.eslintConfigPath,
        pluginsPath: __dirname,
        extensions: this.eslintExtensions,
        eslint: ESLintLib,
      }),
      JestTask.from({
        config: this.jestConfigPath,
      }),
    ])
  }

  workspaceConfig(): ConfigWriterList {
    return ConfigWriterList.from([
      TypescriptConfigWriter.from({
        tsconfig: this.tsconfigPath,
        types: resolveTypes(__dirname, [this.tsTypesPath]),
      }),
      EslintConfigWriter.from({
        configPath: this.eslintConfigPath,
        tsconfig: this.tsconfigPath,
      }),
      PrettierConfigWriter.from({
        configPath: this.prettierConfigPath,
      }),
    ])
  }
}

export default new ProviderEnv()
