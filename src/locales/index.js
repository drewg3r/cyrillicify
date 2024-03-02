import { createI18n } from 'vue-i18n'

import en from './en'
import ua from './ua'
import ru from './ru'
import { getStoredLocale } from '@/utils/localStorage'

export const Locales = {
  EN: 'en',
  UA: 'ua',
  RU: 'ru'
}

export const Languages = [
  {
    locale: Locales.EN,
    label: 'English'
  },
  {
    locale: Locales.UA,
    label: 'Ukrainian'
  },
  {
    locale: Locales.RU,
    label: 'Russian'
  }
]

const locale = getStoredLocale() ?? Languages[0].locale;

export const i18n = createI18n({
  locale,
  legacy: false,
  globalInjection: true,
  fallbackLocale: Locales.EN,
  messages: {
    [Locales.EN]: en,
    [Locales.UA]: ua,
    [Locales.RU]: ru
  }
})
