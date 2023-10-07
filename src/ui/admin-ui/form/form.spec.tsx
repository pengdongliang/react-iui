import { render } from '@testing-library/react'
import React from 'react'

import { BasicForm } from './form.composition'

it('使用正确的文本呈现', () => {
  const { getByText } = render(<BasicForm />)
  const rendered = getByText('hello world!')
  expect(rendered).toBeTruthy()
})
