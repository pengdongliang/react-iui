import { createMounter } from '@teambit/react.mounter'
import webConfig from '@yooco/react-iui.config.web-config'
import { AntdConfigProvider } from '@yooco/react-iui.context.antd-config'
import type { ConfigProviderProps } from '@yooco/react-iui.context.config'
import { ConfigProvider } from '@yooco/react-iui.context.config'
import { LocaleProvider } from '@yooco/react-iui.locale.context'
import { ThemeProvider } from '@yooco/react-iui.theme.theme-provider'
import React from 'react'

export const MyReactProvider = ({ children }: { children: ConfigProviderProps['children'] }) => {
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

/**
 * The entry for the app (preview runtime) that renders your component previews.
 * use the default template or create your own.
 * @see https://docs/react-env/component-previews#composition-mounter
 */
export default createMounter(MyReactProvider)
