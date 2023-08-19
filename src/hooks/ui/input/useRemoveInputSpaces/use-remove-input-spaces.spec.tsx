import { renderHook, act } from '@testing-library/react-hooks'

import { useRemoveInputSpaces } from './use-remove-input-spaces'

it('should increment counter', () => {
  const { result } = renderHook(() => useRemoveInputSpaces())
  act(() => {
    result.current.increment()
  })
  expect(result.current.count).toBe(1)
})
