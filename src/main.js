import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

const app = createApp(App)
app.use(router)
app.use(i18n)

// Error handler global
app.config.errorHandler = (err, instance, info) => {
  console.error('Error global:', err)
  console.error('Info:', info)
}

app.mount('#app')
