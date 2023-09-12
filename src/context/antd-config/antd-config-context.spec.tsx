import { render } from '@testing-library/react'
import React from 'react'

import { BasicUsage } from './antd-config-context.composition'

it('应该显示正确的文本', () => {
  const { getByText } = render(<BasicUsage />)
  const rendered = getByText('disabled')
  expect(rendered).toBeTruthy()
})
