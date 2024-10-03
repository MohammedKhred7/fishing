import { createI18n } from 'vue-i18n'
import ar from '../langs/ar.json'
import en from '../langs/en.json'

type MessageSchema = typeof ar

export default createI18n<[MessageSchema], 'ar' | 'en'>({
  legacy: false, // Vuetify does not support the legacy mode of vue-i18n
  locale: 'ar',
  fallbackLocale: 'ar',
  messages: {
    'ar': ar,
    'en': en
  }
})