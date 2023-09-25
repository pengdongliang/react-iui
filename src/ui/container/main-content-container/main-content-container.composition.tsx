import webConfig from '@yooco/react-iui.config.web-config'
import { Empty } from 'antd'

import { MainContentContainer } from './main-content-container'

export const BasicMainContentContainer = () => {
  return (
    <div id={webConfig.mainContentElementId} style={{ width: '100%', height: '200px' }}>
      <MainContentContainer>
        <div>内容区域</div>
        <Empty />
      </MainContentContainer>
    </div>
  )
}
