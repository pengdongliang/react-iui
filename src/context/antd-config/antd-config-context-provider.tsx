import webConfig from '@yooco/react-iui.config.web-config'
import type { AntdConfigType } from '@yooco/react-iui.context.config'
import { useConfigContext } from '@yooco/react-iui.context.config'
import { App, ConfigProvider } from 'antd'
import { Locale } from 'antd/es/locale'
import dayjs from 'dayjs'
import React, { useEffect } from 'react'

export type AntdConfigProviderProps = AntdConfigType

/**
 * antd全局配置
 */
export const AntdConfigProvider = (props: AntdConfigProviderProps) => {
  const { children, appConfig, locale, ...rest } = props
  const [localeData, setLocaleData] = React.useState<Locale>()

  const { antdConfig, locale: localeContext } = useConfigContext()

  const finalLocale = locale?.locale ?? localeContext ?? webConfig.defaultLocale
  const finalAntdConfig = { ...antdConfig, ...rest }
  const finalAppConfig = { ...antdConfig?.appConfig, ...appConfig }

  useEffect(() => {
    const loadLocale = async () => {
      try {
        if (finalLocale) {
          const name = finalLocale?.toLocaleLowerCase()
          import(`dayjs/locale/${name === 'en-us' ? 'en' : name}.js`)
          const localeFile = await import(`antd/lib/locale/${finalLocale.replace('-', '_')}.js`)
          const currentLocale = localeFile?.default
          setLocaleData(currentLocale)
          dayjs.locale(name)
        }
      } catch (err) {
        console.error('Load antd locale Error: ', err)
      }
    }
    loadLocale()
  }, [finalLocale])

  return (
    <ConfigProvider {...finalAntdConfig} locale={localeData}>
      <App {...finalAppConfig}>{children}</App>
    </ConfigProvider>
  )
}
