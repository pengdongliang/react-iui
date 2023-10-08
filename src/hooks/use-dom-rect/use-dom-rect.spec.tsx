import { waitFor } from '@testing-library/dom'
import { render, renderHook } from '@testing-library/react'
import { isBrowser } from '@yooco/react-iui.toolbox.utils'

import { useDomRect } from './use-dom-rect'

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

it('测试获取元素宽度', () => {
  const { container } = render(<div style={{ width: '100px', height: '100px' }}>test</div>, { hydrate: !isBrowser })
  const { result } = renderHook(() => useDomRect(container))

  waitFor(() => {
    expect(result.current.width).toBe(100)
  })
})
