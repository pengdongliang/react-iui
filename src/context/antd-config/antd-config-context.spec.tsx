import { render } from '@testing-library/react'
import React from 'react'

import { DisplayAntd } from './antd-config-context.composition'

it('应该显示正确的文本', () => {
  const { getByText } = render(<DisplayAntd />)
  const rendered = getByText('非上下文')
  expect(rendered).toBeTruthy()
})
