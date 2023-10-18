import { useCallback, useContext, useEffect, useRef } from 'react'
import useFetch from 'use-http'

import { createAxios } from './create-axios'
import { HttpContext, type HttpContextType, RequestOptions } from './http-context'

/**
 * 获取网络请求上下文
 */
export const useHttpContext = () => useContext(HttpContext)

/**
 * 获取网络请求工具
 */
export const useHttpTool = () => {
  const fetchTool = useRef<typeof createAxios | typeof useFetch | typeof fetch>(useFetch)

  const { httpTool } = useHttpContext()

  const createHttpTool = useCallback((tool: HttpContextType['httpTool']): any => {
    switch (tool) {
      case 'axios':
        fetchTool.current = createAxios
        break
      case 'use-http':
        fetchTool.current = useFetch
        break
      default:
        fetchTool.current = fetch
        break
    }
  }, [])

  useEffect(() => {
    if (httpTool) createHttpTool(httpTool)
  }, [createHttpTool, httpTool])

  return fetchTool.current
}

/**
 * 获取网络请求
 */
export const useHttp = (options?: RequestOptions) => {
  const { httpTool } = useHttpContext()
  const http = useHttpTool()

  switch (httpTool) {
    case 'axios':
      return http
    case 'use-http':
      return http(options as any)
    default:
      return http
  }
}
