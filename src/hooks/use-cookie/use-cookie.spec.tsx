import { act, renderHook } from '@testing-library/react-hooks'

import { useCookie } from './use-cookie'

it('存取Cookie', () => {
  const { result } = renderHook(() => useCookie())
  act(() => {
    result.current?.cookie?.setItem('test-cookie', '1')
  })
  expect(result.current?.cookie?.getItem('test-cookie')).toBe('1')
})
