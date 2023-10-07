import { render } from '@testing-library/react'
import React from 'react'

import { BasicI18N } from './i18n.composition'

it('使用正确的文本呈现', () => {
  const { findByText } = render(<BasicI18N />)
  const rendered = findByText('测试')
  expect(rendered).toBeTruthy()
})
