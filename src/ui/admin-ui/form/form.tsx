import { Form as AForm } from 'antd'
import React from 'react'

export type FormProps = React.ComponentProps<typeof AForm>

/**
 * Form
 */
export const Form = (props: FormProps) => {
  const { children } = props

  return <AForm>{children}</AForm>
}
