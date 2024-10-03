/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { ref } from 'vue';
import { createVuetify } from 'vuetify'
import { en, ar } from 'vuetify/locale'


// const rtl = useRtl()
// rtl.isRtl = ref(true)
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  locale: {
    locale: 'ar',
    fallback: 'ar',
    messages: { ar, en }
  },
  theme: {
    themes: {
      light: {
        colors: {
          mainBackground: '#F5F7FF',
          background: 'linear-gradient(to right top, rgb(0, 147, 233), rgb(128, 208, 199))',
          subBackground: '#80D0C7',
          primaryBackground: "#000819",
          surface: '#FFFFFF',
          primary: '#4E82F3',
          secondary: '#424242',
          error: '#B00020',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        },
      },
    },
  },
})
