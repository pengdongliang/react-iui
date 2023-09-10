import { ConfigProvider } from 'antd'
import type { ConfigProviderProps } from 'antd/es/config-provider'
import React from 'react'

export type AntdConfigProviderProps = ConfigProviderProps

/**
 * antd全局配置
 */
export const AntdConfigProvider = (props: AntdConfigProviderProps) => {
  const { children } = props

  return <ConfigProvider>{children}</ConfigProvider>
}
