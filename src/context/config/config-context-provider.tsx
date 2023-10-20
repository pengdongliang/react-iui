import webConfig from '@yooco/react-iui.config.web-config'
import React, { useMemo } from 'react'

import type { ConfigContextType } from './config-context'
import { ConfigContext } from './config-context'
import type { BaseThemeProps } from './types'

export interface ConfigProviderProps extends ConfigContextType {
  /** children */
  children?: React.ReactNode
}

/**
 * 全局上下文配置
 */
export const ConfigProvider = (props: ConfigProviderProps) => {
  const { children, theme, antdConfig, locale, ...rest } = props

  const configContextData = useMemo<ConfigContextType>(
    () => ({
      ...rest,
      theme,
      antdConfig: { theme: (theme as BaseThemeProps)?.antdTheme, ...antdConfig },
      locale: locale ?? webConfig.defaultLocale,
    }),
    [antdConfig, locale, rest, theme]
  )

  return <ConfigContext.Provider value={configContextData}>{children}</ConfigContext.Provider>
}
