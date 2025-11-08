<template>
  <div v-if="error" class="error-boundary">
    <div class="error-content">
      <h2>⚠️ {{ currentLocale === 'es' ? 'Algo salió mal' : 'Something went wrong' }}</h2>
      <p>
        {{
          currentLocale === 'es'
            ? 'Lo sentimos, ha ocurrido un error inesperado.'
            : 'Sorry, an unexpected error has occurred.'
        }}
      </p>
      <button @click="reload" class="reload-btn">
        {{ currentLocale === 'es' ? 'Recargar página' : 'Reload page' }}
      </button>
      <details v-if="errorDetails" class="error-details">
        <summary>{{ currentLocale === 'es' ? 'Detalles técnicos' : 'Technical details' }}</summary>
        <pre>{{ errorDetails }}</pre>
      </details>
    </div>
  </div>
  <slot v-else></slot>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

export default {
  name: 'ErrorBoundary',
  setup() {
    const { locale } = useI18n()
    const currentLocale = computed(() => locale.value)
    return { currentLocale }
  },
  data() {
    return {
      error: false,
      errorDetails: null,
    }
  },
  errorCaptured(err, instance, info) {
    this.error = true
    this.errorDetails = `${err.toString()}\n\nInfo: ${info}`
    console.error('Error capturado:', err, info)
    return false
  },
  methods: {
    reload() {
      window.location.reload()
    },
  },
}
</script>

<style scoped>
.error-boundary {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background: #1a1410;
}

.error-content {
  background: rgba(83, 58, 38, 0.9);
  padding: 40px;
  border-radius: 12px;
  border: 2px solid #C9A882;
  max-width: 600px;
  text-align: center;
  color: #f5f5f5;
}

.error-content h2 {
  color: #D4B896;
  margin-bottom: 20px;
}

.error-content p {
  color: #E8D4C0;
}

.reload-btn {
  background: rgba(83, 58, 38, 0.8);
  color: #E8D4C0;
  border: 1px solid #8B6648;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.3s ease;
}

.reload-btn:hover,
.reload-btn:focus {
  background: rgba(83, 58, 38, 1);
  transform: scale(1.05);
  outline: 2px solid #C9A882;
  border-color: #C9A882;
}

.error-details {
  margin-top: 20px;
  text-align: left;
}

.error-details summary {
  cursor: pointer;
  color: #C9A882;
  margin-bottom: 10px;
}

.error-details pre {
  background: rgba(26, 20, 16, 0.8);
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto;
  font-size: 12px;
  color: #D4B896;
  border: 1px solid #8B6648;
}
</style>
