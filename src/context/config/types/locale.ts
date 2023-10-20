import type { ResolvedIntlConfig } from 'react-intl'

export interface LocaleConfigType extends Partial<Omit<ResolvedIntlConfig, 'locale'>> {
  /** 国际化语言编码存储key,默认locale_code */
  storageKey?: string
}
