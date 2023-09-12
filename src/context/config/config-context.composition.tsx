import React from 'react'

import { ConfigProvider } from './config-context-provider'
import { useConfigContext } from './use-config'

export const DisplayLanguage = () => {
  const { themeConfigMode } = useConfigContext()
  if (themeConfigMode === 'replace') return <h3>replace</h3>
  return <h3>merge</h3>
}

export const BasicUsage = () => {
  return (
    <ConfigProvider themeConfigMode="replace">
      <DisplayLanguage />
    </ConfigProvider>
  )
}
