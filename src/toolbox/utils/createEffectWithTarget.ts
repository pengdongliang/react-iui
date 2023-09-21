import type { DependencyList, EffectCallback } from 'react'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import type { BasicTarget } from './domTarget'
import { getTargetElement } from './domTarget'
import { simpleEqual } from './utils'

export type CreateEffectWithTargetType = [
  /** effect类型, 默认useEffect */
  useEffectType?: typeof useEffect | typeof useLayoutEffect,
  /** 配置项 */
  options?: {
    /** 是否在窗口尺寸变化后更新 */
    updateAfterWindowChange?: boolean
  }
]

/**
 * 工具方法
 */
/**
 * 创建一个带有目标元素的监听Effect
 */
export const createEffectWithTarget = (...props: CreateEffectWithTargetType) => {
  const [useEffectType = useEffect, options = {}] = props
  const { updateAfterWindowChange } = options

  const useEffectWithTarget = (
    effect: EffectCallback,
    deps: DependencyList,
    target: BasicTarget<any> | BasicTarget<any>[]
  ) => {
    const hasInitRef = useRef(false)
    const lastElementRef = useRef<(Element | null)[]>([])
    const lastDepsRef = useRef<DependencyList>([])
    const unLoadRef = useRef<any>()
    const [, setRefresh] = useState(false)

    useEffectType(() => {
      const targets = Array.isArray(target) ? target : [target]
      const els = targets.map((item) => getTargetElement(item))

      if (!hasInitRef.current) {
        hasInitRef.current = true
        lastElementRef.current = els
        lastDepsRef.current = deps

        unLoadRef.current = effect()
        return
      }

      if (
        els.length !== lastElementRef.current.length ||
        !simpleEqual(els, lastElementRef.current) ||
        !simpleEqual(deps, lastDepsRef.current)
      ) {
        unLoadRef.current?.()

        lastElementRef.current = els
        lastDepsRef.current = deps
        unLoadRef.current = effect()
      }
    }, [...deps])
    const handleWindowResize = () => {
      const targets = Array.isArray(target) ? target : [target]
      const els = targets.map((item) => getTargetElement(item))
      unLoadRef.current?.()
      lastElementRef.current = els
      lastDepsRef.current = deps
      unLoadRef.current = effect()
      setRefresh((i) => !i)
    }

    useEffect(() => {
      if (updateAfterWindowChange) {
        window.addEventListener('resize', handleWindowResize)
      }

      return () => {
        unLoadRef.current?.()
        hasInitRef.current = false
        if (updateAfterWindowChange) {
          window.removeEventListener('resize', handleWindowResize)
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  }

  return useEffectWithTarget
}
