<template>
  <ErrorBoundary>
    <router-view />
  </ErrorBoundary>
</template>

<script>
import ErrorBoundary from './components/ErrorBoundary.vue'

export default {
  components: {
    ErrorBoundary,
  },
}
</script>
