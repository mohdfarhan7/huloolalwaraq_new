import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './public/locales/en/translation.json'
import ar from './public/locales/ar/translation.json'

const resources = {
  en: { translation: en },
  ar: { translation: ar },
}

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'en',
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
    })
}

export default i18n 