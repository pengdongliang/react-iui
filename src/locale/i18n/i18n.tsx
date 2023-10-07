import React from 'react'
import { FormattedMessage } from 'react-intl'

export type I18nProps = React.ComponentProps<typeof FormattedMessage>

/**
 * 通过组件方式使用国际化
 */
export const I18n = (props: I18nProps) => {
  return <FormattedMessage {...props} />
}
