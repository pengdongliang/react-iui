import { type Axios, type AxiosRequestConfig as AxiosConfig } from 'axios'
import { createContext } from 'react'
import { type FetchContextTypes, type HTTPMethod, type IncomingOptions } from 'use-http'

export type FetchRequestConfig = Omit<IncomingOptions, 'method' | 'body'>
export type AxiosRequestConfig<P = any> = Exclude<AxiosConfig<P>, 'url' | 'method' | 'params' | 'body'>
export type ExtraRequestConfig<P = any> = {
  /** 请求地址 */
  url?: string
  /** 请求方式, 默认get */
  method?: 'get' | 'post' | 'put' | 'delete' | 'patch' | 'head' | 'options' | 'connect' | 'trace' | HTTPMethod
  /** 请求url参数 */
  params?: string | object
  /** 请求body */
  body?: P | BodyInit | object
  /** 过滤请求参数值, 默认过滤`undefined和""` */
  filterRequestValue?: true | ((key: string, value: any) => any)
}

export type RequestConfig<P = any> = (FetchRequestConfig | AxiosRequestConfig<P>) & ExtraRequestConfig

// export type InterceptorRequest = Parameters<Axios['interceptors']['request']['use']>[0]
export interface AxiosInterceptors {
  request?: Parameters<Axios['interceptors']['request']['use']>[0]
  requestError?: Parameters<Axios['interceptors']['request']['use']>[1]
  response?: Parameters<Axios['interceptors']['response']['use']>[0]
  responseError?: Parameters<Axios['interceptors']['response']['use']>[1]
}

export interface FetchInterceptors {
  request?: Exclude<FetchRequestConfig['interceptors'], undefined>['request']
  response?: Exclude<FetchRequestConfig['interceptors'], undefined>['response']
}

/**
 * 请求options: 增加了params, 修改body为对象
 */
export type RequestOptions<P = any> = Omit<RequestConfig<P>, 'interceptors'> & {
  /** 请求拦截器 */
  interceptors?: FetchInterceptors & AxiosInterceptors
}

export interface HttpContextType extends Omit<FetchContextTypes, 'url' | 'options'> {
  /** 基础请求地址 */
  url?: string
  /** 请求配置 */
  options?: RequestOptions
  /** 请求工具, 默认use-http */
  httpTool?: 'fetch' | 'axios' | 'use-http'
}

export const HttpContext = createContext<HttpContextType>({})
