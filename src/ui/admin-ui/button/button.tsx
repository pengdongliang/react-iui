import type { UsePermissionProps } from '@yooco/react-iui.hooks.use-permission'
import { usePermission } from '@yooco/react-iui.hooks.use-permission'
import type { ButtonProps as AButtonProps } from 'antd'
import React, { useMemo } from 'react'

import type { EntityButtonConfigType, TextButtonConfigType } from './config'
import { entityButtonConfig, textButtonConfig } from './config'
import { StyledButton } from './styled'

export type ColorType = 'default' | 'red' | 'orange' | 'yellow' | 'green' | 'cyan' | 'blue' | 'purple'

export interface ButtonProps extends AButtonProps {
  /** 权限 */
  permission?: UsePermissionProps[number]
  /** 权限请求方式,默认GET */
  permissionReqestMethod?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  /** 自定义组件 */
  component?: keyof React.ReactDOM | React.ComponentType<any>
  /** 颜色 */
  color?: ColorType | string
  /** 额外的颜色配置 */
  extraColor?: EntityButtonConfigType | TextButtonConfigType
}

/**
 * Button
 */
export const Button = (props: ButtonProps) => {
  const { children, permission, component, color, extraColor, ...rest } = props
  const [validatePermission] = usePermission(permission)

  const CustomButton = component ?? StyledButton

  const styleConfig = useMemo(() => {
    if (color) {
      const isText = ['link', 'text'].includes(rest?.type)
      if (extraColor && extraColor[color]) return extraColor[color]
      return isText ? textButtonConfig[color] : entityButtonConfig[color]
    }
  }, [color, extraColor, rest?.type])

  return validatePermission() ? (
    <CustomButton {...rest} config={styleConfig}>
      {children}
    </CustomButton>
  ) : null
}
