import { Input as AInput } from 'antd'

import { Password } from './components/Password'
import { Search } from './components/Search'
import { TextArea } from './components/TextArea'
import type { InputProps, InputRef } from './input'
import { Input as InternalInput } from './input'

export type { PasswordProps, PasswordRef } from './components/Password'
export type { SearchProps, SearchRef } from './components/Search'
export type { TextAreaProps, TextAreaRef } from './components/TextArea'
export type { InputProps, InputRef } from './input'

type CompoundedComponent = React.ForwardRefExoticComponent<InputProps & React.RefAttributes<InputRef>> & {
  Group: typeof AInput.Group
  Search: typeof Search
  TextArea: typeof TextArea
  Password: typeof Password
}

const Input = InternalInput as unknown as CompoundedComponent

Input.Group = AInput.Group
Input.Search = Search
Input.TextArea = TextArea
Input.Password = Password

export { Input }
