import type { UseRemoveInputSpacesProps } from '@yooco/react-iui.hooks.use-remove-input-spaces'
import { useRemoveInputSpaces } from '@yooco/react-iui.hooks.use-remove-input-spaces'
import { Input } from 'antd'
import type { TextAreaProps as ATextAreaProps, TextAreaRef as ATextAreaRef } from 'antd/es/input/TextArea'
import React from 'react'

export type TextAreaProps = ATextAreaProps & UseRemoveInputSpacesProps

export type TextAreaRef = ATextAreaRef

/**
 * TextArea
 */
export const TextArea = React.forwardRef<TextAreaRef, TextAreaProps>((props, ref) => {
  const removeInputSpacesEvent = useRemoveInputSpaces<TextAreaProps>(props)

  return <Input.TextArea {...props} {...removeInputSpacesEvent} ref={ref} />
})
