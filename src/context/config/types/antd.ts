import type { AppProps } from 'antd'
import type { ConfigProviderProps } from 'antd/es/config-provider'

export interface AntdConfigType extends ConfigProviderProps {
  /** antd App包裹组件 */
  appConfig?: AppProps
}
