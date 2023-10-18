import { render } from '@testing-library/react'
import React from 'react'

import { BasicHttp } from './http-context.composition'

it('应该显示正确的文本', () => {
  const { getByText } = render(<BasicHttp />)
  const rendered = getByText('hello world!')
  expect(rendered).toBeTruthy()
})
