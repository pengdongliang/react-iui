import webConfig from '@yooco/react-iui.config.web-config'
import { AntdConfigProvider } from '@yooco/react-iui.context.antd-config'
import { ConfigProvider } from '@yooco/react-iui.context.config'
import { LocaleProvider } from '@yooco/react-iui.locale.context'
import { ThemeProvider } from '@yooco/react-iui.theme.theme-provider'
import type { ReactNode } from 'react'

export type AppContainerProps = {
  children?: ReactNode
}

/**
 * 应用启用容器
 */
export function AppContainer({ children }: AppContainerProps) {
  return (
    <ConfigProvider locale={webConfig.defaultLocale}>
      <LocaleProvider>
        <ThemeProvider>
          <AntdConfigProvider>{children}</AntdConfigProvider>
        </ThemeProvider>
      </LocaleProvider>
    </ConfigProvider>
  )
}
