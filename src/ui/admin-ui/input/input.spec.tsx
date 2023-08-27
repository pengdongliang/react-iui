import React from 'react'

import { BasicIInput } from './input.composition'
import { render, screen, fireEvent } from '@testing-library/react'

it('测试输入框值为"  123  "的情况下失去焦点后, 值应该为"123"', () => {
  render(<BasicIInput value="  123  " data-testid="input" />)
  const item = screen.getByTestId('input')
  fireEvent.blur(item)
  expect(item).toHaveValue('123')
})
