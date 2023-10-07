import { LocaleProvider } from '@yooco/react-iui.locale.context'
import { Input } from 'antd'
import { useMemo } from 'react'

import { FormOptionsType, SearchForm } from './search-form'

export const BasicSearchForm = () => {
  const formOptions = useMemo<FormOptionsType>(() => {
    return {
      formItemOptions: [
        {
          name: 'name',
          itemNode: <Input placeholder="自定义表单Item" />,
        },
        {
          name: 'age',
          itemName: 'input',
          itemProps: { placeholder: '内置表单Input' },
        },
        {
          name: 'gender',
          itemName: 'select',
          itemProps: {
            placeholder: '内置表单Select',
            options: [
              { label: '男', value: 1 },
              { label: '女', value: 2 },
              { label: '未知', value: 0 },
            ],
            showSearch: true,
            optionFilterProp: 'label',
          },
        },
      ],
    }
  }, [])

  return (
    <LocaleProvider>
      <SearchForm formOptions={formOptions} />
    </LocaleProvider>
  )
}
