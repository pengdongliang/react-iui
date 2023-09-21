import { waitFor } from '@testing-library/dom'
import { render } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import webConfig from '@yooco/react-iui.config.web-config'

import { useContentPageHeight } from './use-content-page-height'

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

it('测试获取元素高度', () => {
  render(
    <div id={webConfig.mainContentElementId} style={{ width: '100px', height: '100px' }}>
      test
    </div>
  )
  const { result } = renderHook(() => useContentPageHeight())

  waitFor(() => {
    expect(result.current[0]).toBe(100)
  })
})
