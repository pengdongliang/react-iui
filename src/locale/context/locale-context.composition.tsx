import { Button } from 'antd'
import React from 'react'

import { LocaleProvider } from './locale-context-provider'
import { useLocale } from './use-locale'

const DisplayLanguage = () => {
  const { formatMessage } = useLocale()
  return <h3>{formatMessage({ id: 'global.test' })}</h3>
}

export const BasicUsage = () => {
  const [locale, setLocale] = React.useState('zh-CN')

  return (
    <>
      <h3>当前语言: {locale}</h3>
      <p>
        <Button onClick={() => setLocale((v) => (v === 'zh-CN' ? 'en-US' : 'zh-CN'))}> 切换语言</Button>
      </p>
      <LocaleProvider locale={locale}>
        <DisplayLanguage />
      </LocaleProvider>
    </>
  )
}
