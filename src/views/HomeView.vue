<template>
  <div class="cv-container" id="cv-content">
    <!-- Language Switcher -->
    <div class="language-switcher">
      <button
        @click="changeLanguage('es')"
        :class="{ active: currentLocale === 'es' }"
        class="lang-btn"
        :aria-label="$t('nav.home')"
        tabindex="0"
      >
        🇪🇸 ES
      </button>
      <button
        @click="changeLanguage('en')"
        :class="{ active: currentLocale === 'en' }"
        class="lang-btn"
        :aria-label="$t('nav.home')"
        tabindex="0"
      >
        🇺🇸 EN
      </button>
      <button @click="downloadPDF" class="download-btn" :aria-label="$t('nav.downloadPDF')" tabindex="0">
        📄 {{ $t('nav.downloadPDF') }}
      </button>
    </div>

    <!-- Header -->
    <header class="cv-header">
      <img src="@/assets/avatar.png" :alt="$t('header.name')" class="cv-avatar" />
      <div class="cv-info">
        <h1 class="cv-name">{{ $t('header.name') }}</h1>
        <p @click="toggleContent" class="cv-role" tabindex="0" @keypress.enter="toggleContent">
          {{ $t('header.role') }} {{ show ? '' : `(${$t('header.clickForMore')})` }}
        </p>
      </div>
    </header>

    <!-- Body -->
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:leave="leave"
      v-bind:css="false"
    >
      <main class="cv-body" v-if="show">
        <!-- Perfil -->
        <section>
          <h2 class="cv-section-title">{{ $t('profile.title') }}</h2>
          <p>
            {{ $t('profile.description') }}
          </p>
          <p class="work-preference">
            <strong>{{ $t('workPreferences.title') }}:</strong> {{ $t('workPreferences.remote') }}
          </p>
          <p>{{ $t('profile.lookingFor') }}</p>
          <p>
            <span style="color: goldenrod">{{ $t('profile.thanks') }}</span>
          </p>
          <p>
            {{ $t('profile.github') }}
            <a href="https://github.com/Ledihas" style="text-decoration-line: none" target="_blank" rel="noopener noreferrer">
              <strong style="color: #87CEFA">Ledihas</strong>
            </a>
          </p>
        </section>

        <!-- Experiencia -->
        <section>
          <h2 class="cv-section-title">{{ $t('experience.title') }}</h2>
          <div class="cv-job">
            <h3>{{ $t('experience.automation.title') }}</h3>
            <span class="cv-dates">{{ $t('experience.automation.date') }}</span>
            <ul>
              <li v-for="(item, index) in $tm('experience.automation.items')" :key="index">
                {{ item }}
              </li>
            </ul>

            <h3>{{ $t('experience.backend.title') }}</h3>
            <span class="cv-dates">{{ $t('experience.backend.date') }}</span>
            <ul>
              <li v-for="(item, index) in $tm('experience.backend.items')" :key="index">
                {{ item }}
              </li>
            </ul>

            <h3>{{ $t('experience.frontend.title') }}</h3>
            <span class="cv-dates">{{ $t('experience.frontend.date') }}</span>
            <ul>
              <li v-for="(item, index) in $tm('experience.frontend.items')" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
        </section>

        <!-- Educación -->
        <section>
          <h2 class="cv-section-title">{{ $t('education.title') }}</h2>
          <p>
            <strong>{{ $t('education.degree') }}</strong> - {{ $t('education.institution') }} ({{
              $t('education.period')
            }})
          </p>
        </section>

        <!-- Habilidades Técnicas -->
        <section>
          <h2 class="cv-section-title">{{ $t('skills.title') }}</h2>

          <!-- Frontend -->
          <div class="skill-category">
            <h3 class="skill-category-title">
              <span class="skill-icon">🎨</span>
              {{ $t('skills.frontend') }}
            </h3>
            <div class="skills-grid">
              <div
                v-for="skill in skillsByCategory.frontend"
                :key="skill.name"
                class="skill-item"
              >
                <div class="skill-header">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Backend -->
          <div class="skill-category">
            <h3 class="skill-category-title">
              <span class="skill-icon">⚙️</span>
              {{ $t('skills.backend') }}
            </h3>
            <div class="skills-grid">
              <div
                v-for="skill in skillsByCategory.backend"
                :key="skill.name"
                class="skill-item"
              >
                <div class="skill-header">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Databases -->
          <div class="skill-category">
            <h3 class="skill-category-title">
              <span class="skill-icon">🗄️</span>
              {{ $t('skills.databases') }}
            </h3>
            <div class="skills-grid">
              <div
                v-for="skill in skillsByCategory.databases"
                :key="skill.name"
                class="skill-item"
              >
                <div class="skill-header">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- DevOps & Cloud -->
          <div class="skill-category">
            <h3 class="skill-category-title">
              <span class="skill-icon">☁️</span>
              {{ $t('skills.devops') }}
            </h3>
            <div class="skills-grid">
              <div
                v-for="skill in skillsByCategory.devops"
                :key="skill.name"
                class="skill-item"
              >
                <div class="skill-header">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tools & Others -->
          <div class="skill-category">
            <h3 class="skill-category-title">
              <span class="skill-icon">🛠️</span>
              {{ $t('skills.tools') }}
            </h3>
            <div class="skills-grid">
              <div
                v-for="skill in skillsByCategory.tools"
                :key="skill.name"
                class="skill-item"
              >
                <div class="skill-header">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Programming Languages -->
          <div class="skill-category">
            <h3 class="skill-category-title">
              <span class="skill-icon">💻</span>
              {{ $t('skills.languages') }}
            </h3>
            <div class="skills-grid">
              <div
                v-for="lang in programmingLanguages"
                :key="lang.name"
                class="skill-item"
              >
                <div class="skill-header">
                  <span class="skill-name">{{ lang.name }}</span>
                  <span class="skill-percentage">{{ lang.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" :style="{ width: lang.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Habilidades Blandas -->
        <section>
          <h2 class="cv-section-title">{{ $t('softSkills.title') }}</h2>
          <div class="soft-skills-container">
            <div class="soft-skill-card">
              <span class="soft-skill-icon">🤝</span>
              <span class="soft-skill-text">{{ $t('softSkills.teamwork') }}</span>
            </div>
            <div class="soft-skill-card">
              <span class="soft-skill-icon">💬</span>
              <span class="soft-skill-text">{{ $t('softSkills.communication') }}</span>
            </div>
            <div class="soft-skill-card">
              <span class="soft-skill-icon">⏰</span>
              <span class="soft-skill-text">{{ $t('softSkills.timeManagement') }}</span>
            </div>
            <div class="soft-skill-card">
              <span class="soft-skill-icon">🔄</span>
              <span class="soft-skill-text">{{ $t('softSkills.adaptability') }}</span>
            </div>
            <div class="soft-skill-card">
              <span class="soft-skill-icon">🧩</span>
              <span class="soft-skill-text">{{ $t('softSkills.problemSolving') }}</span>
            </div>
            <div class="soft-skill-card">
              <span class="soft-skill-icon">📚</span>
              <span class="soft-skill-text">{{ $t('softSkills.continuousLearning') }}</span>
            </div>
          </div>
        </section>

        <!-- Proyectos -->
        <button
          class="button-projects"
          @click="scrollToProjects"
          tabindex="0"
          @keypress.enter="scrollToProjects"
        >
          {{ $t('projects.viewProjects') }}
        </button>
      </main>
    </transition>

    <!-- Footer -->
    <footer class="cv-footer">
      <p>📧 chuchua441@gmail.com | 📱 +53 53761053</p>
      <p>{{ $t('footer.rights') }}</p>
    </footer>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
import html2pdf from 'html2pdf.js'
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const { locale, t, tm } = useI18n()
    return { locale, t, tm }
  },
  data() {
    return {
      show: false,
      skillsByCategory: {
        frontend: [
          { name: 'Vue.js', level: 90 },
          { name: 'React', level: 70 },
          { name: 'HTML/CSS', level: 95 },
          { name: 'Tailwind CSS', level: 85 },
          { name: 'Flutter', level: 75 },
          { name: 'Qt Creator', level: 70 },
        ],
        backend: [
          { name: 'FastAPI', level: 90 },
          { name: 'Django', level: 85 },
          { name: 'Node.js', level: 80 },
          { name: 'Express', level: 80 },
          { name: 'Nest.js', level: 75 },
          { name: 'Flask', level: 85 },
        ],
        databases: [
          { name: 'PostgreSQL', level: 90 },
          { name: 'MongoDB', level: 70 },
          { name: 'Redis', level: 65 },
          { name: 'SQLite', level: 80 },
        ],
        devops: [
          { name: 'Docker', level: 85 },
          { name: 'NGINX', level: 80 },
          { name: 'Linux', level: 85 },
          { name: 'Git', level: 90 },
          { name: 'Digital Ocean', level: 75 },
          { name: 'Render', level: 80 },
        ],
        tools: [
          { name: 'N8N', level: 85 },
          { name: 'Evolution API', level: 90 },
          { name: 'Postman', level: 90 },
          { name: 'TensorFlow', level: 70 },
          { name: 'Refine Dev', level: 75 },
          { name: 'AppWrite', level: 80 },
        ],
      },
      programmingLanguages: [
        { name: 'Python', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Dart', level: 75 },
        { name: 'C++', level: 70 },
        { name: 'Java', level: 65 },
        { name: 'SQL', level: 85 },
        { name: 'Bash', level: 80 },
      ],
    }
  },
  computed: {
    currentLocale() {
      return this.locale
    },
  },
  methods: {
    toggleContent() {
      this.show = !this.show
    },
    changeLanguage(lang) {
      this.locale = lang
      document.documentElement.lang = lang
    },
    async downloadPDF() {
      try {
        const element = document.getElementById('cv-content')
        const opt = {
          margin: 10,
          filename: 'Zahidel_Pedroso_CV.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        }

        // Mostrar contenido antes de generar PDF
        const wasShown = this.show
        this.show = true

        // Esperar a que se renderice
        await this.$nextTick()
        await new Promise((resolve) => setTimeout(resolve, 500))

        await html2pdf().set(opt).from(element).save()

        // Restaurar estado
        this.show = wasShown
      } catch (error) {
        console.error('Error al generar PDF:', error)
        alert('Hubo un error al generar el PDF. Por favor, intenta de nuevo.')
      }
    },
    scrollToProjects() {
      this.show = !this.show
      setTimeout(() => {
        this.$router.push('/projects')
      }, 3000)
    },
    beforeEnter: function (el) {
      el.style.opacity = 0
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(
        el,
        {
          rotateZ: '45deg',
          translateY: '30px',
          translateX: '30px',
          opacity: 0,
        },
        { complete: done },
      )
    },
  },
  mounted() {
    // Navegación por teclado
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.show) {
        this.show = false
      }
    })
  },
}
</script>

<style scoped>
.cv-container {
  width: 70vw;
  max-width: 1200px;
  min-height: 100vh;
  margin: 40px auto;
  padding: 40px;
  background: linear-gradient(135deg, #3d2a1a 0%, #1a1410 100%);
  border: 1px solid #A16C43;
  border-radius: 16px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  box-shadow: 0 10px 40px rgba(23, 17, 14, 0.9);
}

.language-switcher {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
  z-index: 10;
}

.lang-btn,
.download-btn {
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
.download-btn:hover,
.lang-btn:focus,
.download-btn:focus {
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

.download-btn {
  background: rgba(139, 102, 72, 0.8);
  border-color: #A16C43;
}

.download-btn:hover {
  background: rgba(161, 108, 67, 0.9);
  border-color: #C9A882;
}

.cv-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-align: center;
  border-bottom: 2px solid #C9A882;
  padding-bottom: 20px;
  margin-bottom: 30px;
  margin-top: 40px;
  background: rgba(83, 58, 38, 0.4);
  padding: 20px;
  border-radius: 12px;
}

.cv-name {
  font-size: 32px;
  margin: 0;
  color: #E8D4C0;
}

.cv-role {
  font-size: 18px;
  color: #C9A882;
}

.cv-role:hover,
.cv-role:focus {
  color: #D4B896;
  cursor: pointer;
  outline: none;
}

.cv-body {
  flex: 1;
}

.cv-section-title {
  font-size: 24px;
  margin-top: 30px;
  margin-bottom: 20px;
  border-bottom: 2px solid #C9A882;
  padding-bottom: 10px;
  color: #D4B896;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  position: relative;
}

.cv-section-title::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 60px;
  height: 2px;
  background: #B88E66;
  box-shadow: 0 0 10px rgba(201, 168, 130, 0.6);
}

.cv-job {
  margin-bottom: 15px;
}

.cv-job h3 {
  color: #C9A882;
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 18px;
}

.cv-job ul {
  list-style: none;
  padding-left: 0;
}

.cv-job ul li {
  padding: 8px 0 8px 25px;
  position: relative;
  color: #E0E0E0;
}

.cv-job ul li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #C9A882;
  font-weight: bold;
}

.cv-dates {
  display: block;
  font-size: 14px;
  color: #B88E66;
  margin-bottom: 5px;
}

.cv-skills {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;
  padding-left: 20px;
}

.soft-skills {
  grid-template-columns: repeat(2, 1fr);
}

/* Skill Categories */
.skill-category {
  margin-bottom: 30px;
  background: rgba(83, 58, 38, 0.6);
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #A16C43;
  transition: all 0.3s ease;
}

.skill-category:hover {
  border-color: #C9A882;
  box-shadow: 0 0 15px rgba(201, 168, 130, 0.4);
  background: rgba(83, 58, 38, 0.8);
}

.skill-category-title {
  font-size: 18px;
  color: #D4B896;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
}

.skill-icon {
  font-size: 24px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}

.skill-item {
  background: rgba(61, 42, 26, 0.7);
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #8B6648;
  transition: all 0.3s ease;
}

.skill-item:hover {
  border-color: #C9A882;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(23, 17, 14, 0.6);
  background: rgba(61, 42, 26, 0.9);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.skill-name {
  font-size: 14px;
  font-weight: 500;
  color: #E8D4C0;
}

.skill-percentage {
  font-size: 12px;
  color: #C9A882;
  font-weight: 600;
}

.skill-bar {
  width: 100%;
  height: 6px;
  background: rgba(26, 20, 16, 0.8);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #C9A882 0%, #B88E66 100%);
  border-radius: 3px;
  transition: width 1s ease-in-out;
  box-shadow: 0 0 10px rgba(201, 168, 130, 0.6);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.8;
  }
}

/* Soft Skills */
.soft-skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.soft-skill-card {
  background: linear-gradient(135deg, rgba(83, 58, 38, 0.7) 0%, rgba(61, 42, 26, 0.8) 100%);
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #A16C43;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: default;
}

.soft-skill-card:hover {
  border-color: #C9A882;
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(201, 168, 130, 0.4);
  background: linear-gradient(135deg, rgba(83, 58, 38, 0.9) 0%, rgba(61, 42, 26, 1) 100%);
}

.soft-skill-icon {
  font-size: 32px;
  filter: drop-shadow(0 0 8px rgba(201, 168, 130, 0.5));
}

.soft-skill-text {
  font-size: 14px;
  font-weight: 500;
  color: #E8D4C0;
  line-height: 1.4;
}

.work-preference {
  background: linear-gradient(135deg, rgba(83, 58, 38, 0.6) 0%, rgba(61, 42, 26, 0.7) 100%);
  padding: 15px 20px;
  border-radius: 10px;
  border-left: 4px solid #C9A882;
  margin: 15px 0;
  box-shadow: 0 4px 10px rgba(23, 17, 14, 0.6);
  transition: all 0.3s ease;
}

.work-preference:hover {
  transform: translateX(5px);
  box-shadow: 0 6px 15px rgba(201, 168, 130, 0.4);
  background: linear-gradient(135deg, rgba(83, 58, 38, 0.8) 0%, rgba(61, 42, 26, 0.9) 100%);
}

.cv-footer {
  text-align: center;
  border-top: 2px solid #A16C43;
  padding-top: 15px;
  margin-top: 25px;
  font-size: 14px;
  color: #C9A882;
}

.button-projects {
  background: linear-gradient(135deg, #C9A882 0%, #B88E66 100%);
  color: #1a1410;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  cursor: pointer;
  margin: 30px 0;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(201, 168, 130, 0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.button-projects:hover,
.button-projects:focus {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(201, 168, 130, 0.7);
  background: linear-gradient(135deg, #D4B896 0%, #C9A882 100%);
  outline: none;
}

.cv-avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #C9A882;
  box-shadow: 0 0 20px rgba(201, 168, 130, 0.7), 0 0 40px rgba(201, 168, 130, 0.4);
  transition: all 0.3s ease;
}

.cv-avatar:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(212, 184, 150, 0.9), 0 0 60px rgba(201, 168, 130, 0.5);
}

.cv-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* Responsive */
@media (max-width: 768px) {
  .cv-container {
    width: 90vw;
    padding: 20px;
    margin: 20px auto;
  }

  .language-switcher {
    position: static;
    justify-content: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }

  .cv-header {
    flex-direction: column;
    margin-top: 0;
  }

  .cv-skills {
    grid-template-columns: 1fr;
  }

  .cv-name {
    font-size: 24px;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .skill-category {
    padding: 15px;
  }

  .skill-category-title {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .cv-container {
    padding: 15px;
  }

  .skill-item {
    padding: 10px;
  }

  .skill-name {
    font-size: 13px;
  }

  .skill-percentage {
    font-size: 11px;
  }

  .soft-skills-container {
    grid-template-columns: 1fr;
  }

  .soft-skill-card {
    padding: 15px;
  }

  .soft-skill-icon {
    font-size: 28px;
  }

  .soft-skill-text {
    font-size: 13px;
  }
}
</style>
