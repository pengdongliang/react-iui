import webConfig from '@yooco/react-iui.config.web-config'
import type { HttpContextType, RequestOptions } from '@yooco/react-iui.context.config'
import { useCookie } from '@yooco/react-iui.hooks.use-cookie'
import { message } from 'antd'
import { useMemo } from 'react'
import { CachePolicies } from 'use-http'

export interface UseHttpOptionsProps {
  /** 基础地址 */
  url?: string
  /** 请求配置 */
  options?: RequestOptions
  /** 请求工具 */
  httpTool?: HttpContextType['httpTool']
}

const debounceMessage = (msg: string) => {
  message.destroy()
  message.error(msg)
}

/**
 * 请求options处理
 */
export const useHttpOptions = (props: UseHttpOptionsProps) => {
  const { url, options: optionsProps } = props
  const cookie = useCookie()
  const baseURL = url

  const finalOptions = useMemo<RequestOptions>(() => {
    return {
      cachePolicy: CachePolicies.NETWORK_ONLY,
      timeout: 60 * 1000,
      responseType: 'json',
      interceptors: {
        request: (config: Record<string, any>) => {
          const { adapter } = config
          let options = adapter === 'xhr' ? config : config.options
          const locale: string = cookie.getItem('locale_code') || webConfig.defaultLocale

          options = {
            ...options,
            headers: {
              Accept: 'application/json',
              'Accept-Language': locale,
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest',
              ...options?.headers,
            },
          }

          if (options?.body instanceof FormData) {
            delete options?.headers['Content-Type']
          }

          if (typeof optionsProps?.interceptors?.request === 'function') {
            return optionsProps?.interceptors?.request?.(options)
          }

          return options
        },
        response: (res: any) => {
          const { response } = res
          let result = response ?? res

          if (!response) {
            result = { ok: true, ...result }
          }

          if (typeof optionsProps?.interceptors?.response === 'function') {
            return optionsProps?.interceptors?.response?.(result)
          }

          return result
        },
      },
      onError: (error: any) => {
        const Console = console
        Console.log(error)
      },
      onAbort() {},
      onTimeout() {
        debounceMessage('请求超时')
      },
      ...optionsProps,
    }
  }, [cookie, optionsProps])

  return { url: baseURL, options: finalOptions }
}
