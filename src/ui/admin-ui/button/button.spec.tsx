import { render } from '@testing-library/react'
import React from 'react'

import { BasicButton } from './button.composition'

it('使用正确的文本呈现', () => {
  const { getByText } = render(<BasicButton />)
  const rendered = getByText('默认按钮')
  expect(rendered).toBeTruthy()
})
