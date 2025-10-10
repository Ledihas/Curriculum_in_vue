<template>
  <div class="projects-view">
    <h1>Algunos Proyectos</h1>
    <ProjectsSection />

    <button class="back-btn" @click="this.$router.push('/')">⬅ Volver al CV</button>
  </div>
</template>

<script>
import ProjectsSection from '../components/Projects.vue'

export default {
  components: {
    ProjectsSection,
  },
}
</script>

<style scoped>
.projects-view {
  width: 70vw;
  min-height: 100vh;
  margin: 40px auto;
  padding: 40px;
  background: #1d1603;
  border-radius: 12px;
  font-family: Arial, sans-serif;
  color: #f0f0f0;
}

.back-btn {
  margin-top: 20px;
  background: #444;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;
}
.back-btn:hover {
  background: #666;
}
</style>
