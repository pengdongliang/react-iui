import { PreviewRuntime } from '@teambit/preview'
import { ReactAspect, ReactPreview } from '@teambit/react'
// uncomment the line below and install the theme if you want to use our theme or create your own and import it here
// import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';

import { AdminEnvAspect } from './admin-env.aspect'

export class AdminEnvPreviewMain {
  static runtime = PreviewRuntime

  static dependencies = [ReactAspect]

  static async provider([_react]: [ReactPreview]) {
    const adminEnvPreviewMain = new AdminEnvPreviewMain()
    // uncomment the line below to register a new provider to wrap all compositions using this environment with a custom theme.
    // _react.registerProvider([ThemeCompositions]);

    return adminEnvPreviewMain
  }
}

AdminEnvAspect.addRuntime(AdminEnvPreviewMain)
