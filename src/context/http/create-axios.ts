import { type HttpContextType } from '@yooco/react-iui.context.config'
import axios, { type CreateAxiosDefaults } from 'axios'

/**
 * 创建axios
 */
export const createAxios = (props: HttpContextType) => {
  const { url, options } = props ?? {}
  const { interceptors, ...optionsRest } = options ?? {}
  const { request, requestError, response, responseError } = interceptors ?? {}
  let instance = null

  instance = axios.create({ ...(optionsRest as CreateAxiosDefaults), baseURL: url })
  if (request || requestError) instance.interceptors.request.use(request, requestError)
  if (response || responseError) instance.interceptors.response.use(response, responseError)

  return instance
}
