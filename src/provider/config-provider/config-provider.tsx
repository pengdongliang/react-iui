import type { StyleProviderProps } from '@ant-design/cssinjs'
import type { BaseThemeProps } from '@emotion/react'
import type { AntdConfigProviderProps } from '@yooco/react-iui.provider.antd-config-provider'
import React, { useMemo } from 'react'

// export interface RequestConfigType {
//   /** useRequest请求响应后的操作 */
//   responseHandler?: ResponseHandlerType
//   /** 表格请求字段名 */
//   tableRequestFields?: TableRequestFieldsType
// }

export interface ConfigProviderProps {
  /** children */
  children?: React.ReactNode
  /** antd配置 */
  antdConfig?: AntdConfigProviderProps
  /** cssinjs配置 */
  cssinjsConfig?: StyleProviderProps
  /** 主题配置 */
  theme?: BaseThemeProps
  /** 主题类型, 默认为merge, merge=合并每一层, replace=替换, replaceAntd=仅替换antdTheme */
  themeConfigMode?: 'merge' | 'replace' | 'replaceAntd'
  /** 网络请求配置 */
  // requestConfig?: RequestConfigType
}

export const ConfigContext = React.createContext<ConfigProviderProps>({})

/**
 * 全局上下文配置
 */
export const ConfigProvider = (props: ConfigProviderProps) => {
  const { children, theme, antdConfig } = props

  const configContextData = useMemo<ConfigProviderProps>(
    () => ({
      theme,
      antdConfig: { theme: theme?.antdTheme, ...antdConfig },
    }),
    [antdConfig, theme]
  )

  return <ConfigContext.Provider value={configContextData}>{children}</ConfigContext.Provider>
}
