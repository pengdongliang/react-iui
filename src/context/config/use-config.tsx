import { useContext } from 'react'

import { ConfigContext } from './config-context'

export const useConfigContext = () => useContext(ConfigContext)
