import { type FormInstance } from '@yooco/react-iui.admin-ui.form'
import type { FormOptionsType, FormRef } from '@yooco/react-iui.admin-ui.search-form'
import { SearchForm } from '@yooco/react-iui.admin-ui.search-form'
import { MainContentContainer, type MainContentContainerProps } from '@yooco/react-iui.container.main-content-container'
import { usePaginationConfig } from '@yooco/react-iui.hooks.use-pagination-config'
import { usePagination, useUpdateEffect } from 'ahooks'
import type { PaginationProps } from 'antd'
import { Pagination, Spin } from 'antd'
import React, { useCallback, useImperativeHandle, useMemo, useRef } from 'react'

import Styled from './styled'

type DataType<T> = { total: number; list: T[] }
type ParamsType = Parameters<typeof usePagination>[0]

export interface PaginationContainerProps<TData extends Record<string, any> = Record<string, any>>
  extends Pick<MainContentContainerProps, 'fullScreen'> {
  /** 请求数据, RequestOptions: 配置请求, Function: 回调请求 */
  request: (params: Record<string, any>) => Promise<DataType<TData>>
  /** children */
  children?: (data?: TData[], loading?: boolean) => React.ReactNode
  /** 是否阻止初始自动请求 */
  blockAutoRequestFlag?: boolean | 'auto'
  /** 初始化分页配置 */
  pagination?: PaginationProps
  /** 配置 */
  config?: Parameters<typeof usePagination>[1]
  /** 初始参数, 分页初始参数不要放里面 */
  initParams?: Record<string, any>
  /** 是否使用搜索栏, 默认true */
  header?: boolean | React.ReactNode
  /** 使用搜索栏的表单配置参数 */
  useTableForm?: FormOptionsType
  /** 禁用内置的表单和按钮 */
  disabled?: boolean
}

export type PaginationContainerRef<TData extends Record<string, any> = Record<string, any>> = ReturnType<
  typeof usePagination
> & {
  /** 列表数据 */
  dataSource: DataType<TData>['list']
  /** 请求参数 */
  queryParams: Record<string, any>
  /** 方法 */
  search?: {
    /** 搜索 */
    submit: () => void
    /** 重置 */
    reset: () => void
  }
  /** 搜索栏Form Ref */
  iFormRef?: FormInstance
}

/**
 * 普通分页容器
 */
const InternalPagination = React.forwardRef(
  <TData extends DataType<TData> = DataType<any>>(
    props: PaginationContainerProps<TData>,
    ref: React.Ref<PaginationContainerRef<TData>>
  ) => {
    const {
      children,
      blockAutoRequestFlag,
      config,
      initParams,
      pagination: paginationProps,
      request,
      disabled,
      header = true,
      useTableForm,
      fullScreen,
    } = props
    const iFormRef: FormRef = useRef(null)
    const [queryParams, setQueryParams] = React.useState<Record<string, any>>({})

    const { paginationConfig, paginationVisible } = usePaginationConfig({ paginationProps })

    const handleRequest = useCallback<ParamsType>(
      (searchData, formData) => {
        const { current: page, pageSize: limit } = searchData ?? {}
        const newParams = { ...initParams, page, limit, ...formData }
        setQueryParams(newParams)
        return request?.(newParams)
      },
      [initParams, request]
    )

    const paginationData = usePagination(handleRequest, {
      ...config,
      manual: !!blockAutoRequestFlag,
    })

    const { data, loading } = paginationData

    const run = useCallback(
      (args = {}) => {
        const { current, pageSize } = paginationConfig
        paginationData?.run({ current, pageSize } as { current: number; pageSize: number }, { ...args, ...initParams })
      },
      [initParams, paginationConfig, paginationData]
    )

    const realDisabled = disabled || loading

    const pagination = useMemo(() => {
      if (paginationVisible === false) return false
      return {
        ...paginationProps,
        ...paginationConfig,
        ...paginationData?.pagination,
      }
    }, [paginationConfig, paginationData?.pagination, paginationProps, paginationVisible])

    const submit = async () => {
      const formData = await iFormRef?.current?.validateFields()
      run(formData)
    }

    const reset = () => {
      iFormRef?.current?.resetFields()
      run()
    }

    useUpdateEffect(() => {
      if (blockAutoRequestFlag === 'auto') run(paginationData?.params?.[1])
    }, [initParams])

    useImperativeHandle(ref, () => ({
      ...paginationData,
      run,
      dataSource: data?.list ?? [],
      queryParams,
      search: {
        submit,
        reset,
      },
      iFormRef: iFormRef?.current,
    }))

    return (
      <Spin spinning={!!realDisabled}>
        <MainContentContainer fullScreen={fullScreen}>
          <Styled>
            {header ? (
              <div className="pagination-header">
                {typeof header === 'boolean' && useTableForm ? (
                  <SearchForm
                    initParams={initParams}
                    formOptions={useTableForm}
                    disabled={realDisabled}
                    ref={iFormRef}
                    className="pagination-form_container"
                    onSubmit={submit}
                    onReset={reset}
                  />
                ) : React.isValidElement(header) ? (
                  header
                ) : null}
              </div>
            ) : null}
            <div className="iPagination_content">{children?.(data?.list, loading)}</div>
            {!!pagination && <Pagination {...pagination} className="iPagination_pagination" />}
          </Styled>
        </MainContentContainer>
      </Spin>
    )
  }
)

InternalPagination.displayName = 'PaginationContainer'

export const PaginationContainer = InternalPagination as <TData = any>(
  props: PaginationContainerProps<TData> & { ref?: React.Ref<PaginationContainerRef<TData>> }
) => React.ReactElement
