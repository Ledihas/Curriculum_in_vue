<template>
  <div class="chart-container">
    <BarChart v-if="chartData" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

import { Bar } from 'vue-chartjs'

// Registrar componentes de Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'ProjectStatsChart',
  components: { BarChart: Bar },
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  computed: {
    chartData() {
      return {
        labels: this.projects.map((p) => p.name),
        datasets: [
          {
            label: '⭐ Estrellas',
            data: this.projects.map((p) => p.stars),
            backgroundColor: '#facc15',
          },
          {
            label: '👁️ Vistas',
            data: this.projects.map((p) => p.views),
            backgroundColor: '#60a5fa',
          },
          {
            label: '🖥️ Lenguajes usados',
            data: this.projects.map((p) => p.languages.length),
            backgroundColor: '#34d399',
          },
        ],
      }
    },
    chartOptions() {
      return {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'Estadísticas de Proyectos' },
        },
      }
    },
  },
}
</script>

<style scoped>
.chart-container {
  max-width: 800px;
  margin: 20px auto;
  background: #1a1504;
  padding: 20px;
  border-radius: 10px;
}
</style>
