import type { UseRemoveInputSpacesProps } from '@yooco/react-iui.hooks.use-remove-input-spaces'
import { useRemoveInputSpaces } from '@yooco/react-iui.hooks.use-remove-input-spaces'
import type { InputProps, InputRef } from 'antd'
import { Input } from 'antd'
import React from 'react'

export type IInputProps = InputProps & UseRemoveInputSpacesProps

export type IInputRef = InputRef

/**
 * IInput
 */
export const IInput = React.forwardRef<IInputRef, IInputProps>((props, ref) => {
  const removeInputSpacesEvent = useRemoveInputSpaces(props)

  return <Input {...props} {...removeInputSpacesEvent} ref={ref} />
})
