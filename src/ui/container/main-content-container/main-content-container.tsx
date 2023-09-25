import { useContentPageHeight } from '@yooco/react-iui.hooks.use-content-page-height'
import type { ReactNode } from 'react'

import { StyledMainContentContainer } from './styled'

export type MainContentContainerProps = {
  children?: ReactNode
}

/**
 * 主要页面content区域容器
 */
export function MainContentContainer(props: MainContentContainerProps) {
  const { children, ...rest } = props
  const [itemHeight] = useContentPageHeight()

  return (
    <StyledMainContentContainer itemHeight={itemHeight} {...rest}>
      {children}
    </StyledMainContentContainer>
  )
}
