import 'dayjs/locale/zh-cn'

import type { AntdConfigType } from '@yooco/react-iui.context.config'
import { useConfigContext } from '@yooco/react-iui.context.config'
import { App, ConfigProvider } from 'antd'
import enUS from 'antd/locale/en_US'
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import React, { useEffect } from 'react'

export type AntdConfigProviderProps = AntdConfigType

/**
 * antd全局配置
 */
export const AntdConfigProvider = (props: AntdConfigProviderProps) => {
  const { children, appConfig, locale, ...rest } = props
  const [localeData, setLocaleData] = React.useState<any>(zhCN)

  const { antdConfig, locale: localeContext } = useConfigContext()

  const finalLocale = locale?.locale ?? localeContext ?? 'zh-CN'
  const finalAntdConfig = { ...antdConfig, ...rest }
  const finalAppConfig = { ...antdConfig?.appConfig, ...appConfig }

  useEffect(() => {
    let name = 'zh-cn'
    let currentLocale = enUS
    if (finalLocale) {
      name = finalLocale?.toLocaleLowerCase()
    }
    switch (name) {
      case 'zh-cn':
        currentLocale = zhCN
        break
      default:
        break
    }
    setLocaleData(currentLocale)
    dayjs.locale(name)
  }, [finalLocale])

  return (
    <ConfigProvider {...finalAntdConfig} locale={localeData}>
      <App {...finalAppConfig}>{children}</App>
    </ConfigProvider>
  )
}
