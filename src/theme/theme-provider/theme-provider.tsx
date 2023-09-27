import { legacyLogicalPropertiesTransformer, StyleProvider } from '@ant-design/cssinjs'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { Theme } from '@emotion/react/dist/emotion-react.cjs'
import type { ConfigProviderProps } from '@yooco/react-iui.context.config'
import { useConfigContext } from '@yooco/react-iui.context.config'
import { baseTheme } from '@yooco/react-iui.theme.base-theme'
import merge from 'lodash/merge'
import { useMemo } from 'react'

export type ThemeProviderProps = Pick<ConfigProviderProps, 'cssinjsConfig' | 'theme' | 'themeConfigMode' | 'children'>

/**
 * 基础主题配置上下文 + cssinjs配置
 */
export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, ...rest } = props

  const {
    cssinjsConfig: contextCssinjsConfig,
    theme: contextTheme,
    themeConfigMode: contextThemeConfigMode,
  } = useConfigContext()
  const {
    cssinjsConfig,
    theme,
    themeConfigMode = 'merge',
  } = {
    ...{ cssinjsConfig: contextCssinjsConfig, theme: contextTheme, themeConfigMode: contextThemeConfigMode },
    ...rest,
  }

  const finalTheme = useMemo<Theme>(() => {
    if (theme) {
      switch (themeConfigMode) {
        case 'merge':
          return merge(baseTheme, theme)
        case 'replace':
          return theme
        case 'replaceAntd':
          return { ...baseTheme, antdTheme: theme }
        default:
          break
      }
    }
    return baseTheme
  }, [theme, themeConfigMode])

  const finalCssinjsConfig = useMemo(() => {
    return {
      transformers: [legacyLogicalPropertiesTransformer],
      ...cssinjsConfig,
    }
  }, [cssinjsConfig])

  return (
    <StyleProvider {...finalCssinjsConfig}>
      <EmotionThemeProvider theme={finalTheme}>{children}</EmotionThemeProvider>
    </StyleProvider>
  )
}
