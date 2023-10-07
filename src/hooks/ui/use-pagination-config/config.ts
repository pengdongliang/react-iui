import type { PaginationProps } from 'antd'

/**
 * 分页类型
 */
export type PaginationConfigType = PaginationProps

/**
 * 默认分页配置
 */
export const defaultPaginationConfig: PaginationConfigType = {
  current: 1,
  pageSize: 20,
  total: 0,
  pageSizeOptions: [10, 20, 50, 100, 200, 500],
}
