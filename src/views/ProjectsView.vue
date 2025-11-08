<template>
  <div class="projects-view">
    <!-- Language Switcher -->
    <div class="language-switcher">
      <button
        @click="changeLanguage('es')"
        :class="{ active: currentLocale === 'es' }"
        class="lang-btn"
        tabindex="0"
      >
        🇪🇸 ES
      </button>
      <button
        @click="changeLanguage('en')"
        :class="{ active: currentLocale === 'en' }"
        class="lang-btn"
        tabindex="0"
      >
        🇺🇸 EN
      </button>
    </div>

    <h1>{{ $t('projects.someProjects') }}</h1>
    <ProjectsSection />

    <button
      class="back-btn"
      @click="goBack"
      tabindex="0"
      @keypress.enter="goBack"
      :aria-label="$t('projects.backToCV')"
    >
      ⬅ {{ $t('projects.backToCV') }}
    </button>
  </div>
</template>

<script>
import ProjectsSection from '../components/Projects.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

export default {
  components: {
    ProjectsSection,
  },
  setup() {
    const { locale } = useI18n()

    const currentLocale = computed(() => locale.value)

    const changeLanguage = (lang) => {
      locale.value = lang
      document.documentElement.lang = lang
    }

    return {
      currentLocale,
      changeLanguage,
    }
  },
  methods: {
    goBack() {
      this.$router.push('/')
    },
  },
  mounted() {
    // Navegación por teclado
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.goBack()
      }
    })
  },
}
</script>

<style scoped>
.projects-view {
  width: 70vw;
  min-height: 100vh;
  margin: 40px auto;
  padding: 40px;
  background: linear-gradient(135deg, #3d2a1a 0%, #1a1410 100%);
  border-radius: 12px;
  border: 1px solid #A16C43;
  font-family: Arial, sans-serif;
  color: #f5f5f5;
  position: relative;
  box-shadow: 0 10px 40px rgba(23, 17, 14, 0.9);
}

.projects-view h1 {
  color: #D4B896;
}

.language-switcher {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
  z-index: 10;
}

.lang-btn {
  background: rgba(83, 58, 38, 0.8);
  color: #E8D4C0;
  border: 1px solid #8B6648;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

.lang-btn:hover,
.lang-btn:focus {
  background: rgba(83, 58, 38, 1);
  transform: scale(1.05);
  outline: 2px solid #C9A882;
  border-color: #C9A882;
}

.lang-btn.active {
  background: #C9A882;
  color: #1a1410;
  font-weight: bold;
  border-color: #C9A882;
}

.back-btn {
  margin-top: 20px;
  background: rgba(83, 58, 38, 0.8);
  color: #E8D4C0;
  border: 1px solid #8B6648;
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-btn:hover,
.back-btn:focus {
  background: rgba(83, 58, 38, 1);
  outline: 2px solid #C9A882;
  border-color: #C9A882;
  transform: scale(1.05);
}

/* Responsive */
@media (max-width: 768px) {
  .projects-view {
    width: 90vw;
    padding: 20px;
    margin: 20px auto;
  }

  .language-switcher {
    position: static;
    justify-content: center;
    margin-bottom: 20px;
  }
}
</style>
