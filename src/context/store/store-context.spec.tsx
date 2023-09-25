import { render } from '@testing-library/react'
import React from 'react'

import { BasicUsage } from './store-context.composition'

it('should render with the correct text', () => {
  const { getByText } = render(<BasicUsage />)
  const rendered = getByText('Hola!')
  expect(rendered).toBeTruthy()
})
