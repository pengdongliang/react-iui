import type { UseRemoveInputSpacesProps } from '@yooco/react-iui.hooks.use-remove-input-spaces'
import { useRemoveInputSpaces } from '@yooco/react-iui.hooks.use-remove-input-spaces'
import type { InputRef } from 'antd'
import { Input } from 'antd'
import type { PasswordProps as APasswordProps } from 'antd/es/input'
import React from 'react'

export type PasswordProps = APasswordProps & UseRemoveInputSpacesProps

export type PasswordRef = InputRef

/**
 * Password
 */
export const Password = React.forwardRef<PasswordRef, PasswordProps>((props, ref) => {
  const removeInputSpacesEvent = useRemoveInputSpaces<PasswordProps>(props)

  return <Input.Password {...props} {...removeInputSpacesEvent} ref={ref} />
})
