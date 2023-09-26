import { render } from '@testing-library/react'
import React from 'react'

import { BasicMainContentContainer } from './main-content-container.composition'

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

it('使用正确的文本呈现', () => {
  const { getByText } = render(<BasicMainContentContainer />)
  const rendered = getByText('内容区域')
  expect(rendered).toBeTruthy()
})
