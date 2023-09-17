import { ConfigProvider, useConfigContext } from '@yooco/react-iui.context.config'
import { Button, DatePicker, Empty, Space } from 'antd'
import React from 'react'

import { AntdConfigProvider } from './antd-config-context-provider'

/**
 * 默认语言日期选择器
 */
export const DisplayAntd = ({
  isIntl,
  setLocale,
}: {
  isIntl?: boolean
  setLocale?: (locale: 'zh-CN' | 'en-US') => void
}) => {
  const { locale } = useConfigContext()

  return (
    <>
      {isIntl ? (
        <>
          <h3>国际化</h3>
          <p>
            <Button onClick={() => setLocale(locale === 'zh-CN' ? 'en-US' : 'zh-CN')}>
              点击切换为{locale === 'zh-CN' ? '英文' : '中文'}
            </Button>
          </p>
        </>
      ) : (
        <h3>非上下文</h3>
      )}
      <Space direction="vertical">
        <DatePicker />
        <Empty />
      </Space>
    </>
  )
}

/**
 * 国际化
 */
export const BasicUsage = () => {
  const [locale, setLocale] = React.useState<'zh-CN' | 'en-US'>('en-US')

  return (
    <ConfigProvider locale={locale}>
      <AntdConfigProvider>
        <DisplayAntd isIntl setLocale={setLocale} />
      </AntdConfigProvider>
    </ConfigProvider>
  )
}
