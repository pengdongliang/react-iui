import React from 'react'

import { useRemoveInputSpaces } from './use-remove-input-spaces'

export const BasicuseRemoveInputSpaces = () => {
  const { count, increment } = useRemoveInputSpaces()

  return (
    <>
      <h1>The count is {count}</h1>
      <button onClick={increment}>increment</button>
    </>
  )
}
