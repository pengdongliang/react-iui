import { Table } from 'antd'
import { SetStateAction, useEffect, useState } from 'react'

import { HttpProvider } from './http-context-provider'
import { useRequest } from './use-request'

const TestRequest = () => {
  const { request } = useRequest('/api?current=1&pageSize=5&results=5')
  const [data, setData] = useState<Record<string, any>[]>([])

  const columns = [
    {
      dataIndex: ['name', 'last'],
      title: 'name',
      width: 150,
    },
    {
      dataIndex: 'email',
      title: 'email',
      width: 100,
    },
  ]

  useEffect(() => {
    request({ responseHandler: { responseFields: { data: 'results' }, successFunc: () => true } }).then(
      (res: SetStateAction<Record<string, any>[]>) => setData(res)
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Table dataSource={data} columns={columns} />
}

export const BasicHttp = () => {
  return (
    <HttpProvider url="https://randomuser.me">
      <TestRequest />
    </HttpProvider>
  )
}
