import { createContext, Dispatch } from 'react'

import type { ActionType } from './reducer'
import type { StateType } from './state'

export type StoreContextType = {
  /** 发送actions */
  dispatch: Dispatch<ActionType>
  /** 订阅 */
  subscribe: (cb: () => void) => () => void
  /** 获取store */
  getState: () => StateType
}

export const StoreContext = createContext<StoreContextType>(null)
