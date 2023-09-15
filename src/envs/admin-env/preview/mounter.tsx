import { createMounter } from '@teambit/react.mounter'
import type { ConfigProviderProps } from '@yooco/react-iui.context.config'
import { ConfigProvider } from '@yooco/react-iui.context.config'
import React from 'react'

export const MyReactProvider = ({ children }: { children: ConfigProviderProps['children'] }) => {
  return <ConfigProvider locale="zh-CN">{children}</ConfigProvider>
}

/**
 * The entry for the app (preview runtime) that renders your component previews.
 * use the default template or create your own.
 * @see https://docs/react-env/component-previews#composition-mounter
 */
export default createMounter(MyReactProvider)
