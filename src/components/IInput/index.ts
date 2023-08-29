import { Input } from 'antd'

import type { IInputProps, IInputRef } from './IInput'
import InternalInput from './IInput'
import IPassword from './IPassword'
import ISearch from './ISearch'
import ITextArea from './ITextArea'

export type { IInputProps, IInputRef } from './IInput'
export type { IPasswordProps, IPasswordRef } from './IPassword'
export type { ISearchProps, ISearchRef } from './ISearch'
export type { ITextAreaProps, ITextAreaRef } from './ITextArea'

type CompoundedComponent = React.ForwardRefExoticComponent<IInputProps & React.RefAttributes<IInputRef>> & {
  Group: typeof Input.Group
  ISearch: typeof ISearch
  ITextArea: typeof ITextArea
  IPassword: typeof IPassword
}

const IInput = InternalInput as unknown as CompoundedComponent

IInput.Group = Input.Group
IInput.ISearch = ISearch
IInput.ITextArea = ITextArea
IInput.IPassword = IPassword

export default IInput
