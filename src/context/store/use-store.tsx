import type { Dispatch } from 'react'
import { useCallback, useContext, useEffect, useReducer, useRef } from 'react'

import { ActionType } from './reducer'
import type { StateType } from './state'
import { StoreContext } from './store-context'

export const useStore = () => useContext(StoreContext)

export interface UseSelectorType {
  // (selector: (state: StateType) => StateType[keyof StateType]): StateType[keyof StateType]
  <TState = StateType, Selected = unknown>(selector: (state: TState & StateType) => Selected): Selected
}

export const useSelector: UseSelectorType = (selector) => {
  const [, forceRender] = useReducer((s) => (s > 999999 ? 0 : s + 1), 0)
  const store = useStore()

  const selectedStateRef = useRef(null)
  selectedStateRef.current = selector(store.getState() as any)

  const checkForUpdates = useCallback(() => {
    const newState = selector(store.getState() as any)
    if (newState !== selectedStateRef.current) forceRender()
  }, [store, selector])

  useEffect(() => {
    const subscription = store.subscribe(checkForUpdates)
    return () => subscription()
  }, [store, checkForUpdates])

  return selectedStateRef.current
}

export const useDispatch = <T extends Dispatch<any> = Dispatch<ActionType>>() => {
  const store = useStore()
  return store.dispatch as T
}
