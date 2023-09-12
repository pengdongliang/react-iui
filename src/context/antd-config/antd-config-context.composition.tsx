import { ConfigProvider, useConfigContext } from '@yooco/react-iui.context.config'
import { DatePicker, Empty, Space } from 'antd'
import React from 'react'

import { AntdConfigProvider } from './antd-config-context-provider'

/**
 * 默认语言日期选择器
 */
export const DisplayAntd = ({ isIntl }: { isIntl: boolean }) => {
  const { locale } = useConfigContext()

  return (
    <>
      {isIntl ? (
        <>
          <h3>上下文</h3>
          <h3>{locale === 'zh-CN' ? '中文主题' : '英文主题'}</h3>
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
  return (
    <ConfigProvider>
      <AntdConfigProvider>
        <DisplayAntd isIntl />
      </AntdConfigProvider>
    </ConfigProvider>
  )
}
