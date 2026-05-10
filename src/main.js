import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import posthog from 'posthog-js'

posthog.init('phc_sRwm7FuJ5EeRoRGYxi9p7DFsESuYzTaRkUixZvgj7oZ8', {
  api_host: 'https://us.i.posthog.com',
  defaults: '2026-01-30',
  person_profiles: 'identified_only',
})

createApp(App).mount('#app')
