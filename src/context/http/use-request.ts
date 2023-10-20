import type { HttpContextType, RequestOptions, ResponseHandlerType } from '@yooco/react-iui.context.config'
import { useConfigContext } from '@yooco/react-iui.context.config'
import { filterRequestParams } from '@yooco/react-iui.toolbox.utils'
import { message } from 'antd'
import { useCallback, useState } from 'react'
import useFetch from 'use-http'

import { createAxios } from './create-axios'
import { useHttpContext } from './use-http'

/**
 * 网络请求props类型
 */
export type RequestProps = RequestOptions & {
  /** 请求工具 */
  httpTool?: HttpContextType['httpTool']
  /** 响应后的操作 */
  responseHandler?: ResponseHandlerType
}

/**
 * 运行处理函数参数类型
 */
export type RequestHandlerArgs = Partial<RequestProps>

/**
 * 网络请求，使用参考 `Fetch` `use-http` `Axios` 文档, 支持全局和使用时处理响应结果
 * @param props
 */
export const useRequest = (props?: string | RequestProps) => {
  const { httpTool: httpToolProps = '', ...options } = typeof props === 'string' ? ({} as RequestProps) : props ?? {}
  const [loading, setLoading] = useState(false)

  const {
    httpTool: httpToolContext,
    responseHandler: contextResponseHandler,
    ...contextRest
  } = { ...useConfigContext(), ...useHttpContext() }
  const httpTool = httpToolProps || httpToolContext
  const isUseHttp = httpTool === 'use-http'

  const createHttpTool = useCallback(
    (tool: HttpContextType['httpTool']): any => {
      switch (tool) {
        case 'axios':
          return () => createAxios(contextRest)
        case 'use-http':
          return useFetch
        default:
          return () => fetch
      }
    },
    [contextRest]
  )

  const http = createHttpTool(httpTool)()

  const defaultSuccessFunc = (res: Record<string, any>) => {
    const { code } = res
    return ['200', 200].includes(code)
  }

  const responseFunc = useCallback(
    ({ realResponseHandler, error, response, res, responseType }: Record<string, any>) => {
      return new Promise<Record<string, any>>((resolve, reject) => {
        const {
          responseDataHandler,
          responseSuccessText,
          responseErrorText = '请求失败',
          responseFields,
          successFunc = defaultSuccessFunc,
        } = realResponseHandler
        if (response.ok) {
          if (responseType === 'json') {
            if (typeof responseDataHandler === 'function') {
              responseDataHandler(res)
                .then((v: Record<string, any> | PromiseLike<Record<string, any>>) => resolve(v))
                .catch((e: any) => reject(e))
            } else {
              const {
                code: codeFieldName = 'code',
                data: dataFieldName,
                msg: msgFieldName = 'msg',
              } = responseFields ?? {}
              if (res) {
                const code = res[codeFieldName]
                const data = res[dataFieldName]
                const msg = res[msgFieldName]
                if (successFunc({ ...res, code, data, msg })) {
                  if (responseSuccessText) {
                    message.success(responseSuccessText)
                  }
                  resolve(data ?? res)
                } else {
                  if (responseErrorText) message.error(msg || responseErrorText)
                  reject(error)
                }
              } else {
                if (responseErrorText) message.error(responseErrorText)
                reject(error)
              }
            }
          } else {
            resolve(res)
          }
        } else {
          if (error?.message || responseErrorText) {
            message.error(error?.message || responseErrorText)
          }
          reject(error?.message || responseErrorText)
        }
      })
    },
    []
  )

  const request = useCallback(
    async (args?: string | RequestHandlerArgs) => {
      const realArgs: RequestProps = {
        ...(typeof props === 'string' ? { url: props } : props),
        ...(typeof args === 'string' ? { url: args } : args),
      } as RequestProps
      const { url: requestApi, responseHandler, ...requestOptions } = realArgs
      if (!requestApi) {
        throw new Error('请求地址不能为空')
      }
      const realResponseHandler = {
        ...contextResponseHandler,
        ...responseHandler,
      }
      const { method = 'get', body, params, filterRequestValue, ...reqOptionRest } = requestOptions

      const queryParams = new URLSearchParams(
        filterRequestParams(params as Record<string, any>, filterRequestValue)
      ).toString()
      const url = queryParams ? `${requestApi}?${queryParams}` : requestApi
      const responseType = (requestOptions?.responseType ?? options?.responseType ?? 'json') as string

      switch (httpTool) {
        case 'axios':
          setLoading(true)
          return http({
            url,
            method,
            data: body,
            ...reqOptionRest,
          })
            .then(async (axiosRes: { data: any }) => {
              return responseFunc({
                realResponseHandler,
                error: undefined,
                response: axiosRes,
                res: axiosRes.data,
                responseType,
                method,
              })
            })
            .finally(() => {
              setLoading(false)
            })
        case 'use-http':
          try {
            const { response, error } = http
            await http[method as keyof typeof http](url, body, reqOptionRest)
            const res = await response[responseType as keyof typeof response]()
            return responseFunc({
              realResponseHandler,
              error,
              response,
              res,
              responseType,
              method,
            })
          } catch (err) {
            console.error(err)
            return
          }
        default:
          setLoading(true)
          return http(url, {
            method,
            ...(body ? { body: JSON.stringify(body) } : {}),
            ...reqOptionRest,
          })
            .then(async (fetchRes: any) => {
              return responseFunc({
                realResponseHandler,
                error: undefined,
                response: fetchRes,
                res: await fetchRes?.[responseType](),
                responseType,
                method,
              })
            })
            .finally(() => {
              setLoading(false)
            })
      }
    },
    [contextResponseHandler, http, httpTool, options, props, responseFunc]
  )
  return { ...http, request, loading: isUseHttp ? http?.loading : loading }
}
