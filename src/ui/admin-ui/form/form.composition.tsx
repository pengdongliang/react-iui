import { Input } from 'antd'

import { Form } from './index'

export const BasicForm = () => {
  return (
    <Form>
      <Form.Item label="姓名" name="name" required>
        <Input placeholder="请输入姓名" />
      </Form.Item>
    </Form>
  )
}
