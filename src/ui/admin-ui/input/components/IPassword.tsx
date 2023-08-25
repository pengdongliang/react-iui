import type { UseRemoveInputSpacesProps } from '@yooco/react-iui.hooks.use-remove-input-spaces'
import { useRemoveInputSpaces } from '@yooco/react-iui.hooks.use-remove-input-spaces'
import type { InputRef } from 'antd'
import { Input } from 'antd'
import type { PasswordProps } from 'antd/es/input'
import React from 'react'

export type IPasswordProps = PasswordProps & UseRemoveInputSpacesProps

export type IPasswordRef = InputRef

/**
 * IPassword
 */
export const IPassword = React.forwardRef<IPasswordRef, IPasswordProps>((props, ref) => {
  const removeInputSpacesEvent = useRemoveInputSpaces<IPasswordProps>(props)

  return <Input.Password {...props} {...removeInputSpacesEvent} ref={ref} />
})
