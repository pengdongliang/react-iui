import webConfig from '@yooco/react-iui.config.web-config'
import { AntdConfigProvider } from '@yooco/react-iui.context.antd-config'
import { ConfigProvider } from '@yooco/react-iui.context.config'
import { StoreProvider } from '@yooco/react-iui.context.store'
import { LocaleProvider } from '@yooco/react-iui.locale.context'
import { ThemeProvider } from '@yooco/react-iui.theme.theme-provider'
import type { ReactNode } from 'react'

export interface AppContainerProps {
  children?: ReactNode
}

/**
 * 全局集合容器
 */
export function AppContainer({ children }: AppContainerProps) {
  return (
    <StoreProvider initState={{ permissionList: ['test'] }}>
      <ConfigProvider locale={webConfig.defaultLocale}>
        <LocaleProvider>
          <ThemeProvider>
            <AntdConfigProvider>
              <div id={webConfig.mainContentElementId} style={{ width: '100%', height: '200px' }}>
                {children}
              </div>
            </AntdConfigProvider>
          </ThemeProvider>
        </LocaleProvider>
      </ConfigProvider>
    </StoreProvider>
  )
}
