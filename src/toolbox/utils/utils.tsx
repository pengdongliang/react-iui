import type { DependencyList } from 'react'

/**
 * 简单比较是否一样, 非深度比较, 只比较第一层
 * @param oldData
 * @param newData
 */
export const simpleEqual = (oldData: DependencyList, newData: DependencyList): boolean => {
  if (oldData === newData) return true
  for (let i = 0; i < oldData.length; i += 1) {
    if (!Object.is(oldData[i], newData[i])) return false
  }
  return true
}
