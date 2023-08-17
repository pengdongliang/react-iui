import type { InputRef } from 'antd'
import { Input } from 'antd'
import type { SearchProps } from 'antd/es/input'
import React from 'react'

import useRemoveInputSpaces, { UseRemoveInputSpacesProps } from '../hooks/useRemoveInputSpaces'

export type ISearchProps = SearchProps & UseRemoveInputSpacesProps

export type ISearchRef = InputRef

/**
 * ISearch
 */
export const ISearch = React.forwardRef<ISearchRef, ISearchProps>((props, ref) => {
  const removeInputSpacesEvent = useRemoveInputSpaces<ISearchProps>(props)

  return <Input.Search {...props} {...removeInputSpacesEvent} ref={ref} />
})
