import type { StyleProviderProps } from '@ant-design/cssinjs'
import { Theme } from '@emotion/react'
import type { AppProps } from 'antd'
import type { ConfigProviderProps } from 'antd/es/config-provider'
import React from 'react'
import type { ResolvedIntlConfig } from 'react-intl'

// export interface RequestConfigType {
//   /** useRequest请求响应后的操作 */
//   responseHandler?: ResponseHandlerType
//   /** 表格请求字段名 */
//   tableRequestFields?: TableRequestFieldsType
// }

export interface AntdConfigType extends ConfigProviderProps {
  /** antd App包裹组件 */
  appConfig?: AppProps
}

export interface LocaleConfigType extends Partial<Omit<ResolvedIntlConfig, 'locale'>> {
  /** 国际化语言编码存储key,默认locale_code */
  storageKey?: string
}

export interface ConfigContextType {
  /** antd配置 */
  antdConfig?: AntdConfigType
  /** cssinjs配置 */
  cssinjsConfig?: StyleProviderProps
  /** 主题配置 */
  theme?: Theme
  /** 主题类型, 默认为merge, merge=合并每一层, replace=替换, replaceAntd=仅替换antdTheme */
  themeConfigMode?: 'merge' | 'replace' | 'replaceAntd'
  /** 网络请求配置 */
  // requestConfig?: RequestConfigType
  /** 国际化语言代码, 默认zh-CN */
  locale?: string
  /** 国际化配置 */
  localeConfig?: LocaleConfigType
}

export const ConfigContext = React.createContext<ConfigContextType>({})
