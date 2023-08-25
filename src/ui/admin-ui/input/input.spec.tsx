import React from 'react'

import { BasicIInput } from './input.composition'
import { render, screen, fireEvent } from '@testing-library/react'

it('should render successfully', () => {
  render(<BasicIInput value="  123  " />)
  screen.debug()
  const item = screen.getByDisplayValue('  123  ')

  fireEvent.blur(item)

  expect(item).toHaveValue('123')

  screen.debug()
})
