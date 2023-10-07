import { render } from '@testing-library/react'
import React from 'react'

import { BasicSearchForm } from './search-form.composition'

it('renders with the correct text', () => {
  const { getByText } = render(<BasicSearchForm />)
  const rendered = getByText('hello world!')
  expect(rendered).toBeTruthy()
})
