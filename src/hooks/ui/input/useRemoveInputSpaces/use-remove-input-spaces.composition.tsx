import { Form, Input } from 'antd'
import React from 'react'

import { useRemoveInputSpaces } from './use-remove-input-spaces'

export const BasicuseRemoveInputSpaces = () => {
  const [form] = Form.useForm()
  const removeInputSpacesEvent = useRemoveInputSpaces({})

  return (
    <Form form={form}>
      <Form.Item name="input">
        <Input {...removeInputSpacesEvent} />
      </Form.Item>
    </Form>
  )
}
