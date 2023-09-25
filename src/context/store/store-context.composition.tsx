import { Button, Space } from 'antd'
import React, { Dispatch } from 'react'

import { StoreProvider } from './store-context-provider'
import { useDispatch, useSelector } from './use-store'

const DisplayOne = () => {
  const dispatch = useDispatch()
  const permissionList = useSelector((store) => store.permissionList)

  return (
    <Space direction="vertical">
      <div>permissionList: {permissionList?.join()}</div>
      <Button
        onClick={() => {
          dispatch({ type: 'setPermissionList', payload: ['a', 'b', 'c'].slice(Math.floor(Math.random() * 3)) })
        }}>
        改变内置permissionList
      </Button>
    </Space>
  )
}

const DisplayTwo = () => {
  const dispatch = useDispatch<
    Dispatch<{
      type: 'setName'
      payload?: any
    }>
  >()
  const name = useSelector<{ name: string }, string>((store) => store.name)

  return (
    <Space direction="vertical">
      <div>name: {name}</div>
      <Button
        onClick={() => {
          dispatch({ type: 'setName', payload: ['a', 'b', 'c'].slice(Math.floor(Math.random() * 3)).join() })
        }}>
        自定义state,reducer
      </Button>
    </Space>
  )
}

export const BasicUsage = () => {
  return (
    <StoreProvider
      initState={{ name: '123' }}
      customReducer={{
        setName: (state, action) => {
          switch (action.type) {
            case 'setName': {
              return {
                ...state,
                name: action.payload,
              }
            }
            default:
              return state
          }
        },
      }}>
      <Space>
        <DisplayOne />
        <DisplayTwo />
      </Space>
    </StoreProvider>
  )
}
