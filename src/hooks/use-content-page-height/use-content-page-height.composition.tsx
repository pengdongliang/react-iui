import webConfig from '@yooco/react-iui.config.web-config'
import { useContentPageHeight } from '@yooco/react-iui.hooks.use-content-page-height'
import React from 'react'

export const BasicUsage = () => {
  const [height] = useContentPageHeight()

  return (
    <div id={webConfig.mainContentElementId} style={{ width: '100%', height: '200px' }}>
      内容区域高度: {height}px
    </div>
  )
}
