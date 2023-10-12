import { ConfigProvider } from '@yooco/react-iui.context.config'

import { IconFont } from './icon-font'

export const BasicIconFont = () => {
  return (
    <ConfigProvider scriptUrl={['//at.alicdn.com/t/c/font_3338444_bgrox6gyeae.js']}>
      <IconFont type="icon-morentouxiang" />
    </ConfigProvider>
  )
}
