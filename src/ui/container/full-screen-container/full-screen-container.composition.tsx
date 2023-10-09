import { AppContainer } from '@yooco/react-iui.container.app-container'

import { FullScreenContainer } from './full-screen-container'

export const BasicFullScreenContainer = () => {
  return (
    <AppContainer>
      <FullScreenContainer fullScreenWhenCacheEntering={false} fullScreenWhenMountEntering={false}>
        hello world!
      </FullScreenContainer>
    </AppContainer>
  )
}
