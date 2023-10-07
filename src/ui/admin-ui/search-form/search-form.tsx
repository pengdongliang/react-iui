import type { ButtonProps } from '@yooco/react-iui.admin-ui.button'
import { Button } from '@yooco/react-iui.admin-ui.button'
import type { FormInstance, FormItemProps, FormProps as AFormProps } from '@yooco/react-iui.admin-ui.form'
import { Form } from '@yooco/react-iui.admin-ui.form'
import { Input } from '@yooco/react-iui.admin-ui.input'
import { I18n } from '@yooco/react-iui.locale.i18n'
import { Col, Row, Select, Space } from 'antd'
import React, { useEffect, useImperativeHandle, useMemo, useState } from 'react'

const { Option } = Select

export interface FormItemType {
  /** 表单name */
  name: string
  /** 表单Form.Item的props */
  formItemProps?: FormItemProps
  /** 表单元素名称 */
  itemName?: string
  /** 表单元素的props */
  itemProps?: any
  /** 表单元素option的props */
  optionProps?: any
  /** 自定义元素 */
  itemNode?: React.ReactNode
}

export interface FormOptionsType {
  /** 表单Form.Item配置 */
  formItemOptions?: FormItemType[]
  /** 按钮组, 追加到表单按钮后面 */
  formItemAppendNodes?: React.ReactNode
  /** 追加一行元素 */
  formItemRowNodes?: React.ReactNode
  /** 是否显示查询按钮 */
  showSearch?: boolean
  /** 查询文本 */
  searchText?: string | React.ReactNode
  /** 搜索按钮props */
  searchProps?: ButtonProps
  /** 是否显示重置按钮 */
  showReset?: boolean
  /** 重置文本 */
  resetText?: string | React.ReactNode
  /** 重置按钮props */
  resetProps?: ButtonProps
}

export interface FormProps extends AFormProps {
  /** 初始参数 */
  initParams?: Record<string, any>
  /** 搜索的回调 */
  onSubmit?: () => void
  /** 重置的回调 */
  onReset?: () => void
  /** 表格使用的参数 */
  formOptions?: FormOptionsType
  /** 禁用表单 */
  disabled?: boolean
  /** css类 */
  className?: string
}

export type FormRef = React.Ref<FormInstance>

/**
 * 搜索表单
 */
const SearchForm = React.forwardRef((props: FormProps, ref: FormRef) => {
  const [form] = Form.useForm()
  const { onSubmit, onReset, initParams, formOptions, disabled, className, ...rest } = props

  const formRef = useMemo(() => form, [form])
  useImperativeHandle(ref, () => formRef)

  const [initialValues, setInitialValues] = useState(initParams)

  useEffect(() => {
    setInitialValues(initParams)
    form.setFieldsValue(initParams)
  }, [initParams, form])

  const dynamicFormItemData = useMemo<FormOptionsType>(() => {
    let arr: FormItemType[] = []
    const { formItemOptions } = formOptions
    if (Array.isArray(formItemOptions) && formItemOptions.length) {
      arr = formItemOptions?.map((i) => {
        return { ...i }
      })
    }
    return { ...formOptions, formItemOptions: arr }
  }, [formOptions])

  const formItemNode = dynamicFormItemData?.formItemOptions?.map((i) => {
    if (!i?.name) return null
    const itemName = i?.itemName?.toLocaleLowerCase()
    let itemNode = null
    if (React.isValidElement(i?.itemNode)) {
      itemNode = i?.itemNode
    } else if (itemName) {
      switch (itemName) {
        case 'input':
          itemNode = <Input onPressEnter={onSubmit} allowClear {...i?.itemProps} />
          break
        case 'select':
          itemNode = (
            <Select allowClear {...i?.itemProps}>
              {i?.itemProps?.options.map((p: { label: string; value: string | number }) => (
                <Option {...i?.optionProps} value={p?.value} title={p?.label} key={`${p?.value}`} />
              ))}
            </Select>
          )
          break
        default:
          itemNode = null
          break
      }
    }

    if (!itemNode) return null

    return (
      <Col key={`${i?.name}-${i?.itemName}`}>
        <Form.Item {...i?.formItemProps} name={i?.name}>
          {itemNode}
        </Form.Item>
      </Col>
    )
  })

  const {
    formItemAppendNodes: formItemAppendNodesItem,
    formItemRowNodes: formItemRowNodesItem,
    showSearch = true,
    showReset = true,
    searchText = <I18n id="query" defaultMessage="查询" description="查询" />,
    resetText = <I18n id="reset" defaultMessage="重置" description="重置" />,
    searchProps,
    resetProps,
  } = formOptions ?? {}

  return (
    <Form disabled={disabled} form={form} initialValues={initialValues} className={className} {...rest}>
      <Space direction="vertical">
        <Row gutter={24}>
          {formItemNode}
          <Col>
            <Space wrap size={14}>
              {showSearch && (
                <Button color="green" onClick={onSubmit} {...searchProps}>
                  {searchText}
                </Button>
              )}
              {showReset && (
                <Button type="default" onClick={onReset} {...resetProps}>
                  {resetText}
                </Button>
              )}
              {formItemAppendNodesItem}
            </Space>
          </Col>
        </Row>
        <Row>{formItemRowNodesItem}</Row>
      </Space>
    </Form>
  )
})

SearchForm.displayName = 'SearchForm'

export { SearchForm }
