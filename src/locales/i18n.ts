import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './en/translation.json'
import ua from './ua/translation.json'
import { convertLanguageJsonToObject } from './translations'

export const translationsJson = {
  en: {
    translation: en,
  },
  ua: {
    translation: ua,
  },
}

// Create the 'translations' object to provide full intellisense support for the static json files.
convertLanguageJsonToObject(en)

export const i18n = i18next
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // detect user language
  .use(LanguageDetector)
  // init i18next
  .init({
    resources: translationsJson,
    fallbackLng: 'en',
    debug:
      process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })
