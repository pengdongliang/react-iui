import { Space } from 'antd'

import { Button } from './button'

export const BasicButton = () => {
  return (
    <Space direction="vertical">
      <Space>
        <Button
          color="cde"
          type="link"
          extraColor={{ cde: { color: '#be1b1b', hoverColor: '#3955af', activeColor: 'yellow' } }}>
          自定义文本按钮颜色
        </Button>
        <Button
          color="abc"
          extraColor={{
            abc: {
              key: 'abc',
              background: '#c71ed3',
              border: 'transparent',
              color: '#fff',
              hoverBackground: '#df6ae7',
              activeBackground: '#630579',
            },
          }}>
          自定义实体按钮颜色
        </Button>
      </Space>
      <Space>
        <Button color="red">红色</Button>
        <Button color="orange">橙色</Button>
        <Button color="yellow">黄色</Button>
        <Button color="green">绿色</Button>
        <Button color="cyan">青色</Button>
        <Button color="blue">蓝色</Button>
        <Button color="purple">紫色</Button>
      </Space>
      <Space>
        <Button>默认按钮</Button>
        <Button danger>危险按钮</Button>
        <Button type="link">链接按钮</Button>
      </Space>
      <Button block>整行按钮</Button>
    </Space>
  )
}
