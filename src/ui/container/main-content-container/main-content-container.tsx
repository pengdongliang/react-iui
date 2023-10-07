import { useContentPageHeight } from '@yooco/react-iui.hooks.use-content-page-height'
import type { ReactNode } from 'react'

import { StyledMainContentContainer } from './styled'

export type MainContentContainerProps = {
  /** children */
  children?: ReactNode
  /** 是否满屏高, 默认true */
  fullScreen?: boolean
}

/**
 * 主要页面content区域容器
 */
export function MainContentContainer(props: MainContentContainerProps) {
  const { children, fullScreen = true, ...rest } = props
  const [itemHeight] = useContentPageHeight()

  if (!fullScreen) {
    return <>{children}</>
  }

  return (
    <StyledMainContentContainer itemHeight={itemHeight} {...rest}>
      {children}
    </StyledMainContentContainer>
  )
}
