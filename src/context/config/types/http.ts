import { type Axios, type AxiosRequestConfig as AxiosConfig } from 'axios'
import type { FetchContextTypes, HTTPMethod, IncomingOptions } from 'use-http'

/**
 * 响应字段类型 {code, data, msg, successReturn}
 */
export interface RequestResponseFieldsType {
  /** 响应code, 默认code */
  code?: string
  /** 响应成功后返回的字段, 否则返回整个res, 默认空 */
  data?: string
  /** 响应信息, 默认msg */
  msg?: string
}

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

/**
 * 响应后的操作类型
 */
export interface ResponseHandlerType {
  /** 成功后处理数据方法 */
  responseDataHandler?: (res?: Record<string, any>) => Promise<any>
  /** 请求成功提示语 */
  responseSuccessText?: string
  /** 请求失败提示语 */
  responseErrorText?: string
  /** 响应字段 */
  responseFields?: RequestResponseFieldsType
  /** 响应判断是否成功的方法, 默认['200', 200].includes(code) */
  successFunc?: (res?: Record<string, any>) => boolean
}

export interface HttpContextType extends Omit<FetchContextTypes, 'url' | 'options'> {
  /** 基础请求地址 */
  url?: string
  /** 请求配置 */
  options?: RequestOptions
  /** 请求工具, 默认use-http */
  httpTool?: 'fetch' | 'axios' | 'use-http'
  /** 响应后的操作 */
  responseHandler?: ResponseHandlerType
}
