import type { UseRemoveInputSpacesProps } from '@yooco/react-iui.hooks.use-remove-input-spaces'
import { useRemoveInputSpaces } from '@yooco/react-iui.hooks.use-remove-input-spaces'
import type { InputRef } from 'antd'
import { Input } from 'antd'
import type { SearchProps } from 'antd/es/input'
import React from 'react'

export type ISearchProps = SearchProps & UseRemoveInputSpacesProps

export type ISearchRef = InputRef

/**
 * ISearch
 */
export const ISearch = React.forwardRef<ISearchRef, ISearchProps>((props, ref) => {
  const removeInputSpacesEvent = useRemoveInputSpaces<ISearchProps>(props)

  return <Input.Search {...props} {...removeInputSpacesEvent} ref={ref} />
})
