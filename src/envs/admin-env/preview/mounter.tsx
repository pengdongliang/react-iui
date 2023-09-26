import { createMounter } from '@teambit/react.mounter'
import type { AppContainerProps } from '@yooco/react-iui.container.app-container'
import { AppContainer } from '@yooco/react-iui.container.app-container'
import React from 'react'

export const MyReactProvider = ({ children }: { children: AppContainerProps['children'] }) => {
  return <AppContainer>{children}</AppContainer>
}

/**
 * The entry for the app (preview runtime) that renders your component previews.
 * use the default template or create your own.
 * @see https://docs/react-env/component-previews#composition-mounter
 */
export default createMounter(MyReactProvider)
