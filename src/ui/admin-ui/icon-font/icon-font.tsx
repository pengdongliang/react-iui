import { createFromIconfontCN } from '@ant-design/icons'
import { useConfigContext } from '@yooco/react-iui.context.config'
import React from 'react'

type InternalIconProps = React.ComponentProps<ReturnType<typeof createFromIconfontCN>>

export interface IconFontProps extends Omit<InternalIconProps, 'children'> {
  /** iconfont地址 */
  scriptUrl?: string | string[]
  /** 额外的props */
  extraCommonProps?: Record<string, unknown>
}

/**
 * 自定义 font 图标
 */
export function IconFont(props: IconFontProps) {
  const { scriptUrl, extraCommonProps, ...rest } = props

  const { scriptUrl: scriptUrlContext } = useConfigContext()

  const InternalIconFont = createFromIconfontCN({
    scriptUrl: scriptUrl ?? scriptUrlContext,
    extraCommonProps,
  })

  return <InternalIconFont {...rest} />
}
