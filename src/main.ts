import { createApp } from 'vue'
import { createPinia } from 'pinia'

/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import router from './router'

// Plugins
import { registerPlugins } from '@/plugins'

import './assets/base.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
registerPlugins(app)

app.mount('#app')
