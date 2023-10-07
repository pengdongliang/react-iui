import type { FormInstance, FormItemProps, FormListFieldData, FormListOperation, FormProps } from 'antd'
import { Form as AForm } from 'antd'
import type { ErrorListProps, FormListProps } from 'antd/es/form'
import type { Rule, RuleObject, RuleRender } from 'rc-field-form/lib/interface'

import { Form as InternalForm } from './form'

type InternalFormType = typeof InternalForm
type CompoundedComponent = typeof AForm & InternalFormType
const Form = InternalForm as CompoundedComponent

Form.useForm = AForm.useForm
Form.useFormInstance = AForm.useFormInstance
Form.useWatch = AForm.useWatch
Form.Item = AForm.Item
Form.List = AForm.List
Form.ErrorList = AForm.ErrorList
Form.Provider = AForm.Provider

export type {
  ErrorListProps,
  FormInstance,
  FormItemProps,
  FormListFieldData,
  FormListOperation,
  FormListProps,
  FormProps,
  Rule,
  RuleObject,
  RuleRender,
}
export { Form }
