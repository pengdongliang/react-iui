import type { StyleProviderProps } from '@ant-design/cssinjs'
import { Theme } from '@emotion/react'
import React from 'react'

import type { AntdConfigType, HttpContextType, LocaleConfigType } from './types'

export interface ConfigContextType {
  /** antd配置 */
  antdConfig?: AntdConfigType
  /** cssinjs配置 */
  cssinjsConfig?: StyleProviderProps
  /** 主题配置 */
  theme?: Theme
  /** 主题类型, 默认为merge, merge=合并每一层, replace=替换, replaceAntd=仅替换antdTheme */
  themeConfigMode?: 'merge' | 'replace' | 'replaceAntd'
  /** 国际化语言代码, 默认zh-CN */
  locale?: string
  /** 国际化配置 */
  localeConfig?: LocaleConfigType
  /** iconfont地址 */
  scriptUrl?: string | string[]
  /** 网络请求配置 */
  httpConfig?: HttpContextType
}

export const ConfigContext = React.createContext<ConfigContextType>({})
