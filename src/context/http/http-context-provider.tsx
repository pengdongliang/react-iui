import React, { useMemo } from 'react'
import { Provider } from 'use-http'
import useSSR from 'use-ssr'

import { type FetchRequestConfig, HttpContext, type HttpContextType } from './http-context'
import { useHttpOptions } from './use-options'

export interface HttpProviderProps extends HttpContextType {
  /** children */
  children: React.ReactNode
}

/**
 * 网络请求上下文
 */
export const HttpProvider = (props: HttpProviderProps) => {
  const { children, httpTool = 'axios', url, options, ...rest } = props
  const isUseHttp = httpTool === 'use-http'

  const { isBrowser } = useSSR()
  const { url: finalUrl, options: finalOptions } = useHttpOptions({ url, options, httpTool })

  const value = useMemo<HttpContextType>(
    () => ({
      url: finalUrl || (isBrowser ? window.location.origin : ''),
      options: finalOptions || {},
      httpTool,
      ...rest,
    }),
    [finalOptions, finalUrl, httpTool, isBrowser, rest]
  )

  return (
    <HttpContext.Provider value={value}>
      {isUseHttp ? (
        <Provider url={finalUrl} options={finalOptions as FetchRequestConfig}>
          {children}
        </Provider>
      ) : (
        children
      )}
    </HttpContext.Provider>
  )
}
