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

/**
 * 字符串小驼峰转下划线
 * @param str {string} 字符串
 */
export function smallHumpToLowerLine(str: string): string {
  let temp = str.replace(/[A-Z]/g, (match) => {
    return `_${match.toLowerCase()}`
  })
  if (temp.slice(0, 1) === '_') {
    temp = temp.slice(1)
  }
  return temp
}

/**
 * 字符串下划线转小驼峰
 * @param str {string} 字符串
 */
export function lowerLineToSmallHump(str: string): string {
  return str.replace(/([^_])_+([^_])/g, (_$0, $1, $2) => {
    return $1 + $2.toUpperCase()
  })
}

/**
 * 获取url参数字符串
 * @param params params对象
 * @param filterRequestValue 过滤请求参数, 默认true过滤undefined和空字符串, 也可以传入一个函数
 */
export function filterRequestParams(
  params: Record<string, any>,
  filterRequestValue: true | ((key: string, value: any) => any) = true
): Record<string, any> {
  let newParamsData = {}
  if (params) {
    if (filterRequestValue && Object.prototype.toString.call(params).match(/^\[object\s(.*)\]$/)?.[1] === 'Object') {
      Object.entries(params).forEach(([key, value]) => {
        if (typeof filterRequestValue === 'function') {
          const newValue = filterRequestValue(key, value)
          newParamsData = { ...newParamsData, [key]: newValue }
        } else if (value !== undefined && value !== '') {
          newParamsData = { ...newParamsData, [key]: value }
        }
      })
    } else {
      newParamsData = params
    }
  }
  return newParamsData
}
