import React from 'react'

import { BasicIInput } from './input.composition'
import { render } from '@testing-library/react'

it('should render successfully', () => {
  const { baseElement } = render(<BasicIInput />)
  expect(baseElement).toBeTruthy()
})
