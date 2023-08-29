import { useState } from 'react'

import type { PaginationConfigType } from '../config'
import { defaultPaginationConfig } from '../config'

/**
 * itable表格分页配置数据
 * @param initPaginationConfig 初始化分页配置
 */
function useITablePaginationConfig<T extends PaginationConfigType = PaginationConfigType>(initPaginationConfig: T) {
  const [paginationConfig, setPaginationConfig] = useState({
    ...defaultPaginationConfig,
    ...initPaginationConfig,
  })

  return { paginationConfig, setPaginationConfig }
}

export default useITablePaginationConfig
