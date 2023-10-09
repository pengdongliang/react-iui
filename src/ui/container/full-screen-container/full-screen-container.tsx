import { MainContentContainer } from '@yooco/react-iui.container.main-content-container'
import { Spin } from 'antd'
import { ReactNode, useRef } from 'react'

import { ToolsBar, type ToolsBarProps } from './components/ToolsBar'
import { StyledFullScreenBox } from './styled'

export interface FullScreenContainerProps extends Omit<ToolsBarProps, 'boxRef'> {
  /** children */
  children?: ReactNode
  /** loading */
  loading?: boolean
}

/**
 * 全屏容器
 */
export const FullScreenContainer = (props: FullScreenContainerProps) => {
  const { children, loading = false } = props
  const boxRef = useRef<HTMLDivElement>(null)

  return (
    <MainContentContainer>
      <StyledFullScreenBox className="fullScreen-box" ref={boxRef}>
        <Spin spinning={loading} wrapperClassName="fullScreen-box_spin">
          <ToolsBar boxRef={boxRef} />
          {children}
        </Spin>
      </StyledFullScreenBox>
    </MainContentContainer>
  )
}
