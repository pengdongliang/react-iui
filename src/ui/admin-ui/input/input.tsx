import type { UseRemoveInputSpacesProps } from '@yooco/react-iui.hooks.use-remove-input-spaces'
import { useRemoveInputSpaces } from '@yooco/react-iui.hooks.use-remove-input-spaces'
import type { InputProps as AInputProps, InputRef as AInputRef } from 'antd'
import { Input as AInput } from 'antd'
import React from 'react'

export type InputProps = AInputProps & UseRemoveInputSpacesProps

export type InputRef = AInputRef

/**
 * Input
 */
export const Input = React.forwardRef<InputRef, InputProps>((props, ref) => {
  const removeInputSpacesEvent = useRemoveInputSpaces(props)

  return <AInput {...props} {...removeInputSpacesEvent} ref={ref} />
})
