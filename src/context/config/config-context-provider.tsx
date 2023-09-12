import React, { useMemo } from 'react'

import type { ConfigContextType } from './config-context'
import { ConfigContext } from './config-context'

export interface ConfigProviderProps extends ConfigContextType {
  /** children */
  children?: React.ReactNode
}

/**
 * 全局上下文配置
 */
export const ConfigProvider = (props: ConfigProviderProps) => {
  const { children, theme, antdConfig, locale, ...rest } = props

  const configContextData = useMemo<ConfigProviderProps>(
    () => ({
      ...rest,
      theme,
      antdConfig: { theme: theme?.antdTheme, ...antdConfig },
      locale: locale ?? 'en-US',
    }),
    [antdConfig, locale, rest, theme]
  )

  return <ConfigContext.Provider value={configContextData}>{children}</ConfigContext.Provider>
}
