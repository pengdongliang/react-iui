import { createMounter } from '@teambit/react.mounter'
import React from 'react'

export const MyReactProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

/**
 * The entry for the app (preview runtime) that renders your component previews.
 * use the default template or create your own.
 * @see https://docs/react-env/component-previews#composition-mounter
 */
export default createMounter(MyReactProvider)
