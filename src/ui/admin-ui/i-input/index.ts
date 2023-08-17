import { Input } from 'antd'

import { IPassword } from './components/IPassword'
import { ISearch } from './components/ISearch'
import { ITextArea } from './components/ITextArea'
import type { IInputProps, IInputRef } from './i-input'
import { IInput as InternalInput } from './i-input'

export type { IInputProps, IInputRef } from './i-input'
export type { ITextAreaProps, ITextAreaRef } from './components/ITextArea'
export type { ISearchProps, ISearchRef } from './components/ISearch'
export type { IPasswordProps, IPasswordRef } from './components/IPassword'

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

export { IInput }
