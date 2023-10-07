import { LocaleProvider } from '@yooco/react-iui.locale.context'

import { PaginationContainer } from './pagination-container'

export const BasicPaginationContainer = () => {
  return (
    <LocaleProvider>
      <PaginationContainer request={async () => ({ total: 99, list: [1] })} fullScreen={false}>
        {(listData, loading) => {
          return (
            <div>
              listData: {listData?.length}, loading: {loading?.toString()}
            </div>
          )
        }}
      </PaginationContainer>
    </LocaleProvider>
  )
}
