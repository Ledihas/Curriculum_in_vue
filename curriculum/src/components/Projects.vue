<template>
  <section class="projects">
    <h2 class="section-title">Proyectos</h2>

    <div class="project" v-for="(project, index) in projects" :key="index">
      <h3>{{ project.name }}</h3>
      <p class="project-desc">{{ project.description }}</p>
      <p class="project-tech">
        <strong>Tecnologías:</strong> {{ project.technologies.join(', ') }}
      </p>
      <div class="project-stats">
        <span>⭐ {{ project.stars }}</span>
        <span>👁️ {{ project.views }}</span>
        <span>🖥️ {{ project.languages.length }} lenguajes</span>
      </div>
      <a v-if="project.link" :href="project.link" target="_blank" class="project-link">
        🔗 Ver proyecto
      </a>
    </div>
    <ProjectStatsChart :projects="projects" />
  </section>
</template>

<script>
import ProjectStatsChart from './ProjectStatsChart.vue'

import { animate } from 'animejs/animation'

export default {
  name: 'ProjectsSection',
  components: { ProjectStatsChart },
  data() {
    return {
      anim: {
        translateX: 100,
        scale: 2,
        opacity: 0.5,
        duration: 400,
        delay: 250,
        ease: 'out(3)',
        loop: 3,
        alternate: true,
        autoplay: false,
        onBegin: () => {},
        onLoop: () => {},
        onUpdate: () => {},
      },
      projects: [
        {
          name: 'Yeyitas - Sitio web de un bar',
          description: 'Sitio web para un bar local con menús, eventos y reservas.',
          technologies: ['Django, Django REST Framework, PostgreSQL, Render'],
          link: 'https://yeyitasbarm.onrender.com',
          stars: 4,
          views: 6,
          languages: ['Python', 'Django', 'PostgreSQL'],
        },
        {
          name: 'CRM en Flutter + FastAPI con bot para Whatsapp',
          description:
            'Plataforma de gestión de clientes con backend en Python(FastAPI) y frontend en Flutter.',
          technologies: [
            'Flutter',
            'FastAPI',
            'Postgres',
            'NGINX',
            'EvolutionAPI',
            'n8n',
            'Docker',
            'Servidor(Ubuntu)',
          ],
          link: null,
          stars: 3,
          views: 5,
          languages: ['Python', 'Flutter', 'FastAPI'],
        },
        {
          name: 'Sistema de reconocimiento con TensorFlow',
          description: 'Modelo de machine learning para clasificación de imágenes sencillo.',
          technologies: ['TensorFlow', 'Python', 'Flask'],
          link: null,
          stars: 2,
          views: 4,
          languages: ['Python', 'TensorFlow'],
        },
      ],
      target: '.project-desc',
    }
  },

  methods: {
    animateDesc() {
      animate(this.target, {
        translateX: 100,
        scale: 2,
        opacity: 0.5,
        duration: 400,
        delay: 250,
        ease: 'out(3)',
        loop: 3,
        alternate: true,
        autoplay: false,
        onBegin: () => {},
        onLoop: () => {},
        onUpdate: () => {},
      })
    },
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
  color: #ccc;
  display: flex;
  gap: 15px;
}
.project-stats span {
  background: #1e1806;
  padding: 5px 10px;
  border-radius: 6px;
  border: 1px solid #444;
}

.section-title {
  font-size: 22px;
  margin-bottom: 15px;
  border-bottom: 1px solid #666;
  padding-bottom: 5px;
  color: #ffd700;
}

.project {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #555;
  border-radius: 8px;
  background: #2a2106;
}

.project h3 {
  margin: 0 0 5px 0;
  font-size: 20px;
  color: #fff;
}

.project-desc {
  margin: 5px 0;
  color: #ddd;
}

.project-tech {
  font-size: 14px;
  color: #bbb;
}

.project-link {
  display: inline-block;
  margin-top: 8px;
  font-size: 14px;
  color: #4dabf7;
  text-decoration: none;
}

.project-link:hover {
  text-decoration: underline;
}
</style>
