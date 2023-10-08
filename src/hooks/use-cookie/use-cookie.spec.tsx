import { act } from '@testing-library/react'

import { useCookie } from './use-cookie'

it('存取Cookie', () => {
  const cookie = useCookie()
  act(() => {
    cookie?.setItem('test-cookie', '1')
  })
  expect(cookie?.getItem('test-cookie')).toBe('1')
})
