import { useMount } from '@yooco/react-iui.hooks.use-mount'
import { Dispatch, MutableRefObject, SetStateAction, useCallback, useRef, useState } from 'react'

/**
 * 使用时不需要考虑组件是否卸载和异步更新的问题
 */
export const useRefState = <S>(
  initialState: S | (() => S),
  blockInUnmounted = true
): [MutableRefObject<S>, Dispatch<SetStateAction<S>>] => {
  const [reactState, setReactState] = useState(initialState)
  const state = useRef(reactState)
  const mounted = useMount()

  const setState = useCallback((arg: S | ((arg0: S) => S)) => {
    if (!mounted.current && blockInUnmounted) return
    state.current = arg instanceof Function ? arg(state.current) : arg
    setReactState(state.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [state, setState]
}
