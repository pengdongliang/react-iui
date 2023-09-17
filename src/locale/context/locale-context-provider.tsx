import { useConfigContext } from '@yooco/react-iui.context.config'
import { useCookie } from '@yooco/react-iui.hooks.use-cookie'
import defaultMessages from '@yooco/react-iui.locale.base-locale'
import React, { useCallback, useMemo } from 'react'
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
  const { children, locale: propsLocale, messages: propsMessages, ...rest } = props

  const { cookie } = useCookie()
  const { locale: contextLocale, localeConfig } = useConfigContext()
  const { storageKey = 'locale_code', messages: configMessages } = localeConfig ?? {}

  const locale = useMemo<string>(() => {
    const localeKey = propsLocale ?? contextLocale ?? 'zh-CN'
    const cache = cookie?.getItem(storageKey)
    if (!cache) cookie.setItem(storageKey, localeKey)
    return localeKey
  }, [contextLocale, cookie, propsLocale, storageKey])

  const messages = useMemo<LocaleProviderProps['messages']>(() => {
    try {
      if (locale) {
        const list = propsMessages ?? configMessages ?? {}
        const defaultList = defaultMessages?.[locale]
        return { ...defaultList, ...list }
      }
      return {}
    } catch (err) {
      console.error('Merge messages error: ', err)
      return {}
    }
  }, [configMessages, locale, propsMessages])

  const onIntlError: LocaleProviderProps['onError'] = useCallback(
    (error) => {
      if (messages) {
        const errorCode: any = error?.code
        if (errorCode === 'MISSING_TRANSLATION') {
          const Console = console
          Console.warn('Missing translation', error?.message)
          return
        }

        throw error
      }
    },
    [messages]
  )

  return (
    <IntlProvider
      key={locale}
      defaultLocale={locale}
      locale={locale}
      messages={messages}
      onError={onIntlError}
      {...rest}>
      {children}
    </IntlProvider>
  )
}
