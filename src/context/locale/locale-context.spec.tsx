import { render } from '@testing-library/react'
import React from 'react'

import { BasicUsage } from './locale-context.composition'

it('应该显示正确的文本', () => {
  const { getByText } = render(<BasicUsage />)
  const rendered = getByText('zh-CN')
  expect(rendered).toBeTruthy()
})
