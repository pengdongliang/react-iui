import { createMounter } from '@teambit/react.mounter'
import { ConfigProvider } from '@yooco/react-iui.context.config'

/**
 * The entry for the app (preview runtime) that renders your component previews.
 * use the default template or create your own.
 * @see https://docs/react-env/component-previews#composition-mounter
 */
export default createMounter(ConfigProvider)
