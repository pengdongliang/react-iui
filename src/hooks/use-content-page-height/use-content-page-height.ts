import webConfig from '@yooco/react-iui.config.web-config'
import { useDomRect } from '@yooco/react-iui.hooks.use-dom-rect'
import { useMemo } from 'react'

/**
 * 页面content区域高度
 */
export const useContentPageHeight = () => {
  const layoutMainRect = useDomRect(document.getElementById(webConfig.mainContentElementId))

  const itemHeight = useMemo(() => {
    const { realHeight } = layoutMainRect ?? {}
    return realHeight ?? 0
  }, [layoutMainRect])

  return [itemHeight]
}
