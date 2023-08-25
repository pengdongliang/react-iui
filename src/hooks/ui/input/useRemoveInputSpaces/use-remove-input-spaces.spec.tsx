import { IInput } from '@yooco/react-iui.admin-ui.input'

import { render } from '@testing-library/react'

it('should render successfully', () => {
  const { baseElement } = render(<IInput />)
  expect(baseElement).toBeTruthy()
})
