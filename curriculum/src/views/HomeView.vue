<template>
  <div class="cv-container">
    <!-- Header -->
    <header class="cv-header">
      <img src="@/assets/avatar.png" alt="Avatar" class="cv-avatar" />
      <div class="cv-info">
        <h1 class="cv-name">Zahidel Pedroso</h1>
        <p @click="show = !show" class="cv-role">Desarrollador Fullstack (Presione para más : )</p>
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
          <h2 class="cv-section-title">Perfil</h2>
          <p>
            Soy un programador apasionado con experiencia en Vue, FastAPI, Docker, Django y más.
          </p>
        </section>

        <!-- Experiencia -->
        <section>
          <h2 class="cv-section-title">Experiencia</h2>
          <div class="cv-job">
            <h3>Backend Developer - Cliente X</h3>
            <span class="cv-dates">2025 - 2025</span>
            <ul>
              <li>Desarrollo del Backend con FastAPI</li>
              <li>Integración de chatbots en WhatsApp con Evolution API</li>
              <li>Despliegue en servidores Linux con Docker y NGINX</li>
              <li>Gestión de bases de datos Postgres</li>
            </ul>
          </div>
        </section>

        <!-- Educación -->
        <section>
          <h2 class="cv-section-title">Educación</h2>
          <p>
            <strong>Ingeniería en Ciencias Informáticas</strong> - Universidad de Ciencias
            Informáticas (2021 - actualidad)
          </p>
        </section>

        <!-- Habilidades -->
        <section>
          <h2 class="cv-section-title">Habilidades</h2>
          <ul class="cv-skills">
            <li>Vue.js</li>
            <li>Node.js</li>
            <li>FastAPI</li>
            <li>Docker</li>
            <li>NGINX</li>
            <li>Postgres</li>
            <li>Django</li>
            <li>Flask</li>
            <li>Express</li>
            <li>Flutter</li>
            <li>Nest.js</li>
            <li>QtCreator</li>
            <li>TensorFlow</li>
            <li>Git</li>
            <li>SO Linux</li>
            <li>Refine Dev</li>
            <li>N8N</li>
            <li>EvolutionAPI</li>
          </ul>
        </section>

        <section>
          <h2 class="cv-section-title">Lenguajes</h2>
          <ul>
            <li>Python</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Dart</li>
            <li>C++</li>
            <li>PostgreSQL</li>
            <li>BASH</li>
            <li>Java</li>
          </ul>
        </section>

        <!-- Proyectos -->
        <button class="button-projects" @click="scrollToProjects">Ver Proyectos</button>
      </main>
    </transition>
    <!-- Footer -->
    <footer class="cv-footer">
      <p>📧 ledhas@gmail.com | 📱 +53 53761053</p>
      <p>© 2025 Ledihas</p>
    </footer>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'

export default {
  components: {},
  data() {
    return {
      show: false,
    }
  },
  methods: {
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
}
</script>

<style scoped>
.cv-container {
  width: 70vw;
  min-height: 100vh;
  margin: 40px auto;
  padding: 40px;
  background: #312607;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cv-header {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 20px;
  text-align: center;
  border-bottom: 2px solid #555;
  padding-bottom: 15px;
  margin-bottom: 25px;
}

.cv-name {
  font-size: 32px;
  margin: 0;
}

.cv-role {
  font-size: 18px;
  color: #bbb;
}
.cv-role:hover {
  color: #e9a097;
  cursor: pointer;
}

.cv-body {
  flex: 1;
}

.cv-section-title {
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 10px;
  border-bottom: 1px solid #666;
  padding-bottom: 5px;
  color: #ffd700;
}

.cv-job {
  margin-bottom: 15px;
}

.cv-dates {
  display: block;
  font-size: 14px;
  color: #aaa;
  margin-bottom: 5px;
}

.cv-skills {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;
  padding-left: 20px;
}

.cv-footer {
  text-align: center;
  border-top: 2px solid #555;
  padding-top: 15px;
  margin-top: 25px;
  font-size: 14px;
  color: #ccc;
}

.button-projects {
  background-color: #443804;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin: 20px 0;
  transition: transform 0.2s ease;
}
.button-projects:hover {
  transform: scale(1.1);
}

.cv-avatar {
  width: 120px;
  height: 120px;
  border-radius: 5px;
  object-fit: cover;
  border: 3px solid #ffd700;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

.cv-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.cv-name {
  font-size: 32px;
  margin: 0;
}
</style>
