import { renderHook } from '@testing-library/react-hooks'

import { usePermission } from './use-permission'

it('是否有[test]的权限', () => {
  const { result } = renderHook(() => usePermission())
  expect(result.current?.[0]?.('test')).toBe(true)
})
