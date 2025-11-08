<template>
  <section class="projects">
    <h2 class="section-title">{{ $t('projects.title') }}</h2>

    <div class="project" v-for="(project, index) in currentProjects" :key="index">
      <h3>{{ project.name }}</h3>
      <p class="project-desc">{{ project.description }}</p>
      <p class="project-tech">
        <strong>{{ $t('projects.technologies') }}</strong> {{ project.technologies.join(', ') }}
      </p>

      <div class="project-stats">
        <span :aria-label="`${project.stars} stars`">⭐ {{ project.stars }}</span>
        <span :aria-label="`${project.views} views`">👁️ {{ project.views }}</span>
        <span :aria-label="`${project.languages.length} ${$t('projects.languages')}`">
          🖥️ {{ project.languages.length }} {{ $t('projects.languages') }}
        </span>
        <p style="color: goldenrod">{{ project.languages.join(', ') }}</p>
      </div>
      <a
        v-if="project.link"
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="project-link"
        :aria-label="`${$t('projects.viewProject')} ${project.name}`"
        tabindex="0"
      >
        🔗 {{ $t('projects.viewProject') }}
      </a>
      <span v-else class="project-no-link">{{
        currentLocale === 'es' ? 'Proyecto privado' : 'Private project'
      }}</span>
    </div>
    <ProjectStatsChart :projects="currentProjects" />
  </section>
</template>

<script>
import ProjectStatsChart from './ProjectStatsChart.vue'
import { projectsData } from '@/i18n/projects'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

export default {
  name: 'ProjectsSection',
  components: { ProjectStatsChart },
  setup() {
    const { locale, t } = useI18n()

    const currentProjects = computed(() => {
      return projectsData[locale.value] || projectsData.es
    })

    const currentLocale = computed(() => locale.value)

    return {
      currentProjects,
      currentLocale,
      t,
    }
  },
}
</script>

<style scoped>
.projects {
  margin-top: 30px;
}

.project-stats {
  margin-top: 10px;
  font-size: 14px;
  color: #E0E0E0;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.project-stats p {
  color: #C9A882;
}

.project-stats span {
  background: rgba(61, 42, 26, 0.7);
  padding: 5px 10px;
  border-radius: 6px;
  border: 1px solid #A16C43;
}

.section-title {
  font-size: 22px;
  margin-bottom: 15px;
  border-bottom: 1px solid #A16C43;
  padding-bottom: 5px;
  color: #D4B896;
}

.project {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #A16C43;
  border-radius: 8px;
  background: rgba(83, 58, 38, 0.6);
  transition: all 0.3s ease;
}

.project:hover {
  background: rgba(83, 58, 38, 0.8);
  border-color: #C9A882;
  box-shadow: 0 4px 12px rgba(201, 168, 130, 0.3);
}

.project h3 {
  margin: 0 0 5px 0;
  font-size: 20px;
  color: #E8D4C0;
}

.project-desc {
  margin: 5px 0;
  color: #E0E0E0;
}

.project-tech {
  font-size: 14px;
  color: #C9A882;
}

.project-link {
  display: inline-block;
  margin-top: 8px;
  font-size: 14px;
  color: #C9A882;
  text-decoration: none;
  transition: all 0.3s ease;
}

.project-link:hover,
.project-link:focus {
  text-decoration: underline;
  color: #D4B896;
  outline: 2px solid #C9A882;
  outline-offset: 2px;
}

.project-no-link {
  display: inline-block;
  margin-top: 8px;
  font-size: 14px;
  color: #A16C43;
  font-style: italic;
}
</style>
