import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import { BasicInput } from './input.composition'

it('测试输入框值为"  123  "的情况下失去焦点后, 值应该为"123"', () => {
  render(<BasicInput value="  123  " data-testid="input" />)
  const item = screen.getByTestId('input')
  fireEvent.blur(item)
  expect(item).toHaveValue('123')
})
