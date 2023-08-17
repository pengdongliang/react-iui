import { render } from '@testing-library/react'
import React from 'react'

import { BasicIInput } from './i-input.composition'

it('should render successfully', () => {
  const { baseElement } = render(<BasicIInput />)
  expect(baseElement).toBeTruthy()
})
