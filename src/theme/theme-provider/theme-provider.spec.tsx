import { render } from '@testing-library/react'
import React from 'react'

import { BasicThemeProvider } from './theme-provider.composition'

it('renders with the correct text', () => {
  const { getByText } = render(<BasicThemeProvider />)
  const rendered = getByText('hello world!')
  expect(rendered).toBeTruthy()
})
