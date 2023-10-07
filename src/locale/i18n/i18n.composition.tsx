import { LocaleProvider } from '@yooco/react-iui.locale.context'

import { I18n } from './i18n'

export const BasicI18N = () => {
  return (
    <LocaleProvider>
      <I18n id="test" defaultMessage="默认文本" description="测试" />
    </LocaleProvider>
  )
}
