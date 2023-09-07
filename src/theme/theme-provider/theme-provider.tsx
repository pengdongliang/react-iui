import { legacyLogicalPropertiesTransformer, StyleProvider } from '@ant-design/cssinjs'
import type { BaseThemeProps } from '@emotion/react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { antdDefaultToken, baseTheme } from '@yooco/react-iui.theme.base-theme'
import merge from 'lodash/merge'
import react, { useMemo } from 'react'

export interface ThemeProviderProps {
  /** 主题配置 */
  theme?: BaseThemeProps
  /** 主题类型, 默认为merge, merge=合并每一层, replace=替换 */
  themeConfigMode?: 'merge' | 'replace'
}

/**
 * 基础主题提供者
 */
export const ThemeProvider = ({
  children,
  theme,
  themeConfigMode = 'merge',
}: react.PropsWithChildren<ThemeProviderProps>) => {
  const finalTheme = useMemo(() => {
    if (theme) {
      if (themeConfigMode === 'merge') return merge(baseTheme, theme)
      if (themeConfigMode === 'replace') return merge({ antdTheme: antdDefaultToken }, theme)
    }
    return baseTheme
  }, [theme, themeConfigMode])

  return (
    <StyleProvider transformers={[legacyLogicalPropertiesTransformer]}>
      <EmotionThemeProvider theme={finalTheme}>{children}</EmotionThemeProvider>
    </StyleProvider>
  )
}
