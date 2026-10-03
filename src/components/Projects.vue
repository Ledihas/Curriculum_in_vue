<template>
  <section class="projects">
    <div class="projects-header">
      <h2 class="section-title">{{ $t('projects.title') }}</h2>
      <span class="projects-count">{{ currentProjects.length }} {{ currentLocale === 'es' ? 'proyectos' : 'projects' }}</span>
    </div>

    <div class="project-grid">
      <article class="project" v-for="(project, index) in currentProjects" :key="index">
        <div class="project-top">
          <span class="project-status" :class="{ private: !project.link }">
            {{ project.link ? (currentLocale === 'es' ? 'Público' : 'Public') : (currentLocale === 'es' ? 'Privado' : 'Private') }}
          </span>
          <span class="project-stars" :aria-label="`${project.stars} stars`">⭐ {{ project.stars }}</span>
        </div>

        <h3>{{ project.name }}</h3>
        <p class="project-desc">{{ project.description }}</p>

        <div class="project-techs">
          <span v-for="(tech, techIndex) in project.technologies" :key="techIndex" class="tech-badge">
            {{ tech }}
          </span>
        </div>

        <div class="project-meta">
          <span :aria-label="`${project.views} views`">👁️ {{ project.views }}</span>
          <span :aria-label="`${project.languages.length} ${$t('projects.languages')}`">
            🖥️ {{ project.languages.length }} {{ $t('projects.languages') }}
          </span>
        </div>

        <div class="project-languages">
          {{ project.languages.join(', ') }}
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
      </article>
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

.projects-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 22px;
}

.section-title {
  font-size: 22px;
  margin: 0;
  border-bottom: 1px solid rgba(201, 168, 130, 0.35);
  padding-bottom: 5px;
  color: #D4B896;
}

.projects-count {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(201, 168, 130, 0.08);
  border: 1px solid rgba(201, 168, 130, 0.3);
  color: #E8D4C0;
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
  margin-bottom: 26px;
}

.project {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 18px 18px 16px;
  border: 1px solid rgba(201, 168, 130, 0.18);
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(83, 58, 38, 0.42) 0%, rgba(61, 42, 26, 0.58) 100%);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
}

.project:hover {
  transform: translateY(-4px);
  background: linear-gradient(180deg, rgba(83, 58, 38, 0.6) 0%, rgba(61, 42, 26, 0.75) 100%);
  border-color: rgba(201, 168, 130, 0.8);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.15);
}

.project-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.project-status {
  display: inline-flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #d9f7d9;
  background: rgba(76, 175, 80, 0.12);
  border: 1px solid rgba(76, 175, 80, 0.3);
}

.project-status.private {
  color: #f8d7a7;
  background: rgba(201, 168, 130, 0.1);
  border-color: rgba(201, 168, 130, 0.3);
}

.project-stars {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: #F5D58A;
}

.project h3 {
  margin: 0;
  font-size: 20px;
  color: #E8D4C0;
  line-height: 1.3;
}

.project-desc {
  margin: 0;
  color: #E0E0E0;
  font-size: 14px;
  line-height: 1.6;
}

.project-techs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 9px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(201, 168, 130, 0.2);
  color: #D4B896;
  font-size: 11px;
  line-height: 1;
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 12px;
  color: #E0E0E0;
}

.project-meta span {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 8px;
  border-radius: 8px;
  background: rgba(61, 42, 26, 0.55);
  border: 1px solid rgba(201, 168, 130, 0.15);
}

.project-languages {
  margin-top: auto;
  padding-top: 4px;
  font-size: 12px;
  color: #C9A882;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
  width: fit-content;
  font-size: 14px;
  color: #C9A882;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: color 0.25s ease, border-color 0.25s ease;
}

.project-link:hover,
.project-link:focus {
  color: #D4B896;
  border-color: rgba(201, 168, 130, 0.8);
  outline: none;
}

.project-no-link {
  display: inline-block;
  margin-top: 4px;
  font-size: 14px;
  color: #A16C43;
  font-style: italic;
}

@media (max-width: 768px) {
  .projects-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>
