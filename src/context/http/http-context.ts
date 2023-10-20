import type { HttpContextType } from '@yooco/react-iui.context.config'
import { createContext } from 'react'

export const HttpContext = createContext<HttpContextType>({})
