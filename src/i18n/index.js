import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { de } from './de.json'
import { en } from './en.json'

i18n.use(LanguageDetector).init({
    
  resources: {
    en,
    de
  },
  fallbackLng: 'en',

  // have a common namespace used around the full app
  ns: ['common'],
  defaultNS: 'common',

  keySeparator: false, // we use content as keys

  interpolation: {
    formatSeparator: ','
  },

  react: {
    wait: true,

  }
})


export default i18n
