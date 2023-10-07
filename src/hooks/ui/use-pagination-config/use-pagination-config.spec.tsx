import { renderHook } from '@testing-library/react-hooks'

import { usePaginationConfig } from './use-pagination-config'

it('不显示分页', () => {
  const { result } = renderHook(() =>
    usePaginationConfig({
      initPaginationConfig: false,
    })
  )
  expect(result.current.paginationVisible).toBe(false)
})
