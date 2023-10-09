import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons'
import { useFullscreen } from 'ahooks'
import clsx from 'clsx'
import React, { useCallback, useEffect } from 'react'
import { useActivate } from 'react-activation'

import Styled from './styled'

export interface ToolsBarProps {
  /** 需要全屏的元素 */
  boxRef: React.RefObject<HTMLDivElement>
  /** 首次进入时是否全屏, 默认true */
  fullScreenWhenMountEntering?: boolean
  /** 缓存进入时是否全屏, 默认true */
  fullScreenWhenCacheEntering?: boolean
  /** 是否内容区域为地图 */
  isMap?: boolean
}

/**
 * 全屏工具栏
 */
export const ToolsBar = (props: ToolsBarProps) => {
  const { boxRef, fullScreenWhenMountEntering = true, fullScreenWhenCacheEntering = true, isMap } = props
  const [isFullscreen, { enterFullscreen, toggleFullscreen }] = useFullscreen(boxRef)

  const onresizeHandler = useCallback(() => {
    enterFullscreen()
  }, [enterFullscreen])

  useActivate(() => fullScreenWhenCacheEntering && onresizeHandler())

  useEffect(() => {
    fullScreenWhenMountEntering && onresizeHandler()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Styled className="fullScreen-toolsBar_root">
      <div
        className={clsx({ 'fullScreen-toolsBar_icon': true, 'is-map': isMap })}
        title={isFullscreen ? '退出全屏' : '全屏'}
        onClick={toggleFullscreen}>
        {isFullscreen ? <FullscreenExitOutlined rev={undefined} /> : <FullscreenOutlined rev={undefined} />}
      </div>
    </Styled>
  )
}
