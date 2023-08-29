import type { UseRemoveInputSpacesProps } from '@yooco/react-iui.hooks.use-remove-input-spaces'
import { useRemoveInputSpaces } from '@yooco/react-iui.hooks.use-remove-input-spaces'
import { Input } from 'antd'
import type { TextAreaProps, TextAreaRef } from 'antd/es/input/TextArea'
import React from 'react'

export type ITextAreaProps = TextAreaProps & UseRemoveInputSpacesProps

export type ITextAreaRef = TextAreaRef

/**
 * ITextArea
 */
export const ITextArea = React.forwardRef<ITextAreaRef, ITextAreaProps>((props, ref) => {
  const removeInputSpacesEvent = useRemoveInputSpaces<ITextAreaProps>(props)

  return <Input.TextArea {...props} {...removeInputSpacesEvent} ref={ref} />
})
