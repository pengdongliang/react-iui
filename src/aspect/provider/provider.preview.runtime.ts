import { PreviewRuntime } from '@teambit/preview'
import { ReactAspect, ReactPreview } from '@teambit/react'
import { ConfigProvider } from '@yooco/react-iui.context.config'

import { ProviderAspect } from './provider.aspect'

export class ReactWithAntdPreviewMain {
  static runtime = PreviewRuntime

  static dependencies = [ReactAspect]

  static async provider([react]: [ReactPreview]) {
    const reactWithAntdPreviewMain = new ReactWithAntdPreviewMain()
    react.registerProvider([ConfigProvider])

    return reactWithAntdPreviewMain
  }
}

ProviderAspect.addRuntime(ReactWithAntdPreviewMain)
