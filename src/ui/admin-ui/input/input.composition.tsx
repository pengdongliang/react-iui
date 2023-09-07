import React from 'react'

import type { InputProps } from './input'
import { Input } from './input'

export const BasicInput = (props: InputProps) => {
  return <Input {...props} />
}
