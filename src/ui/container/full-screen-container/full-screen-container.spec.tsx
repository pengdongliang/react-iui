import { render } from '@testing-library/react'
import React from 'react'

import { BasicFullScreenContainer } from './full-screen-container.composition'

it('renders with the correct text', () => {
  const { getByText } = render(<BasicFullScreenContainer />)
  const rendered = getByText('hello world!')
  expect(rendered).toBeTruthy()
})
