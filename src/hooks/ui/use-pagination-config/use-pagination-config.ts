import { useLocale } from '@yooco/react-iui.locale.context'
import type { TableProps } from 'antd'
import { useMemo } from 'react'

import { defaultPaginationConfig } from './config'

export interface UsePaginationConfigType<TData> {
  /** 初始化分页配置 */
  initPaginationConfig?: TableProps<TData>['pagination']
  /** 分页配置 */
  paginationProps?: TableProps<TData>['pagination']
}

/**
 * 分页配置数据
 */
export const usePaginationConfig = <TData extends Record<string, any> = Record<string, any>>(
  props: UsePaginationConfigType<TData>
) => {
  const { initPaginationConfig, paginationProps } = props
  const paginationVisible = paginationProps === false || initPaginationConfig === false ? false : undefined
  const { formatMessage } = useLocale()

  const paginationConfig = useMemo<Exclude<TableProps<TData>['pagination'], false | undefined>>(() => {
    return {
      ...defaultPaginationConfig,
      showQuickJumper: true,
      showSizeChanger: true,
      showTotal: (total: number) => formatMessage({ id: 'totalNumberOfPagination' }, { total }),
      ...(Object.prototype.toString.call(paginationProps).match(/^\[object\s(.*)\]$/)?.[1] === 'Object'
        ? paginationProps
        : {}),
      ...initPaginationConfig,
    }
  }, [formatMessage, initPaginationConfig, paginationProps])

  return { paginationConfig, paginationVisible }
}
