import type { UseRemoveInputSpacesProps } from '@yooco/react-iui.hooks.use-remove-input-spaces'
import { useRemoveInputSpaces } from '@yooco/react-iui.hooks.use-remove-input-spaces'
import type { InputRef as AInputRef } from 'antd'
import { Input } from 'antd'
import type { SearchProps as ASearchProps } from 'antd/es/input'
import React from 'react'

export type SearchProps = ASearchProps & UseRemoveInputSpacesProps

export type SearchRef = AInputRef

/**
 * Search
 */
export const Search = React.forwardRef<SearchRef, SearchProps>((props, ref) => {
  const removeInputSpacesEvent = useRemoveInputSpaces<SearchProps>(props)

  return <Input.Search {...props} {...removeInputSpacesEvent} ref={ref} />
})
