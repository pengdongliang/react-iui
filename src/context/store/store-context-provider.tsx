import { ReactNode, useEffect, useMemo, useReducer, useRef } from 'react'

import type { ActionType } from './reducer'
import { reducer } from './reducer'
import type { StateType } from './state'
import { state as initInternalState } from './state'
import { StoreContext, StoreContextType } from './store-context'

export type StoreProviderProps<TData = Record<string, any>> = {
  /** children */
  children: ReactNode
  /** 额外初始state */
  initState?: StateType | TData
  /** 自定义reducer */
  customReducer?: {
    [k: string]: (state: StateType, action: any) => StateType
  }
}

/**
 * 全局数据管理
 */
export const StoreProvider = <TData,>(props: StoreProviderProps<TData>) => {
  const { children, initState, customReducer } = props
  const [state, dispatch] = useReducer(
    (s: StateType, a: ActionType) => {
      if (customReducer && customReducer?.[a.type]) {
        return customReducer?.[a.type](s, a)
      }
      const newState = reducer(s, a)
      return newState
    },
    {
      ...initInternalState,
      ...initState,
    }
  )
  const stateRef = useRef(null)
  stateRef.current = state
  const subscribersRef = useRef([])

  useEffect(() => {
    subscribersRef.current.forEach((sub) => sub())
  }, [state])

  const value = useMemo<StoreContextType>(
    () => ({
      dispatch,
      subscribe: (cb) => {
        subscribersRef.current.push(cb)
        return () => {
          subscribersRef.current = subscribersRef.current.filter((item) => item !== cb)
        }
      },
      getState: () => stateRef.current,
    }),
    []
  )

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
