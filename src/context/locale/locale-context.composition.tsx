import React from 'react'

import { LocaleProvider } from './locale-context-provider'
import { useLocaleContext } from './use-locale'

export const DisplayLanguage = () => {
  const { locale } = useLocaleContext()
  if (locale === 'zh-CN') return <h3>zh-CN</h3>
  return <h3>en-US</h3>
}

export const BasicUsage = () => {
  return (
    <LocaleProvider locale="zh-CN">
      <DisplayLanguage />
    </LocaleProvider>
  )
}
