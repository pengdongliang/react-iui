import { useConfigContext } from '@yooco/react-iui.context.config'
import { useCookie } from '@yooco/react-iui.hooks.use-cookie'
import isEmpty from 'lodash/isEmpty'
import { useEffect, useState } from 'react'
import type { ResolvedIntlConfig } from 'react-intl'
import { IntlProvider } from 'react-intl'

export interface LocaleProviderProps extends Partial<ResolvedIntlConfig> {
  /** children */
  children?: React.ReactNode
}

/**
 * 国际化上下文配置
 */
export const LocaleProvider = (props: LocaleProviderProps) => {
  const { children, ...rest } = props
  const [locale, setLocale] = useState<string>()
  const [messages, setMessages] = useState(null)

  const { cookie } = useCookie()
  const { locale: contextLocale, localeConfig } = useConfigContext()
  const { storageKey = 'locale_code', ...localeConfigRest } = localeConfig ?? {}

  const onIntlError: LocaleProviderProps['onError'] = (error) => {
    if (messages) {
      const errorCode: any = error.code
      if (errorCode === 'MISSING_TRANSLATION') {
        const Console = console
        Console.warn('Missing translation', error.message)
        return
      }

      throw error
    }
  }

  useEffect(() => {
    const fetchLocale = async () => {
      try {
        const cache = cookie?.getItem(storageKey)
        const key = cache ?? contextLocale

        const result = await fetch(`${window.location.origin}/i18n/${key}.json`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          credentials: 'same-origin',
          method: 'GET',
          mode: 'cors',
        })

        const data = await result.json()
        setLocale(key)
        setMessages({ ...data })
        if (!cache) cookie.setItem(storageKey, key)
      } catch (error: any) {
        const Console = console
        Console.error(error.message)
      }
    }

    if (isEmpty(messages)) fetchLocale()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contextLocale])

  return (
    <IntlProvider
      key={locale}
      defaultLocale={locale}
      locale={locale}
      messages={messages}
      onError={onIntlError}
      {...localeConfigRest}
      {...rest}>
      {children}
    </IntlProvider>
  )
}
