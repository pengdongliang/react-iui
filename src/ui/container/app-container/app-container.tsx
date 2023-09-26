import webConfig from '@yooco/react-iui.config.web-config'
import { AntdConfigProvider } from '@yooco/react-iui.context.antd-config'
import { ConfigProvider } from '@yooco/react-iui.context.config'
import { StoreProvider } from '@yooco/react-iui.context.store'
import { LocaleProvider } from '@yooco/react-iui.locale.context'
import { ThemeProvider } from '@yooco/react-iui.theme.theme-provider'
import type { ReactNode } from 'react'

export type AppContainerProps = {
  children?: ReactNode
}

/**
 * 全局集合容器
 */
export function AppContainer({ children }: AppContainerProps) {
  return (
    <ConfigProvider locale={webConfig.defaultLocale}>
      <LocaleProvider>
        <ThemeProvider>
          <AntdConfigProvider>
            <StoreProvider initState={{ permissionList: ['test'] }}>{children}</StoreProvider>
          </AntdConfigProvider>
        </ThemeProvider>
      </LocaleProvider>
    </ConfigProvider>
  )
}
