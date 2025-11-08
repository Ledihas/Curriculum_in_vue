import { createI18n } from 'vue-i18n'

const messages = {
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      downloadPDF: 'Descargar PDF',
    },
    header: {
      name: 'Zahidel Pedroso',
      role: 'Desarrollador Fullstack',
      clickForMore: 'Haz clic para más información',
    },
    profile: {
      title: 'Perfil',
      description:
        'Soy un programador apasionado con experiencia en Vue, FastAPI, Docker, Django y más. Mi experiencia en este mundo comenzó en 2019 con el lenguaje C++, y con el tiempo he ampliado mis habilidades para abarcar tanto el desarrollo frontend como backend. Me encanta crear soluciones eficientes, el trabajo en equipo, y siempre estoy buscando aprender nuevas tecnologías para mejorar mis habilidades.',
      lookingFor: 'Actualmente busco oportunidades de trabajo remoto y proyectos freelance.',
      thanks: '¡Gracias por visitar mi currículum!',
      github: 'Mi GitHub:',
    },
    experience: {
      title: 'Experiencia',
      automation: {
        title: 'Automatizaciones - Personal',
        date: 'Reciente',
        items: [
          'Workflows en n8n',
          'Integración de WhatsApp con Evolution API',
          'Integración con modelo GPT',
          'Gestión de bases de datos Postgres',
          'CRM',
        ],
      },
      backend: {
        title: 'Backend Developer - Cliente X',
        date: '2025 - 2025',
        items: [
          'Desarrollo del Backend con FastAPI',
          'Integración de chatbots en WhatsApp con Evolution API',
          'Despliegue en servidores Linux con Docker y NGINX',
          'Gestión de bases de datos Postgres',
        ],
      },
      frontend: {
        title: 'Front-end Developer - Empresa',
        date: 'Actual',
        items: [
          'Desarrollo del Front-end con Qt',
          'Aplicación para edición de videos',
          'En desarrollo...',
        ],
      },
    },
    education: {
      title: 'Educación',
      degree: 'Ingeniería en Ciencias Informáticas',
      institution: 'Universidad de Ciencias Informáticas',
      period: '2021 - actualidad',
    },
    skills: {
      title: 'Habilidades Técnicas',
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Bases de Datos',
      devops: 'DevOps & Cloud',
      tools: 'Herramientas & Otros',
      languages: 'Lenguajes de Programación',
    },
    softSkills: {
      title: 'Habilidades Blandas',
      teamwork: 'Trabajo en equipo',
      communication: 'Comunicación efectiva',
      timeManagement: 'Gestión del tiempo',
      adaptability: 'Adaptabilidad al entorno',
      problemSolving: 'Resolución de problemas',
      continuousLearning: 'Aprendizaje continuo',
    },
    workPreferences: {
      title: 'Preferencias de Trabajo',
      remote: 'Trabajo Remoto',
      freelance: 'Proyectos Freelance',
      fullTime: 'Tiempo Completo',
      availability: 'Disponibilidad inmediata',
    },
    projects: {
      title: 'Proyectos',
      viewProjects: 'Ver Proyectos',
      backToCV: 'Volver al CV',
      viewProject: 'Ver proyecto',
      technologies: 'Tecnologías:',
      languages: 'lenguajes',
      someProjects: 'Algunos Proyectos',
    },
    footer: {
      rights: '© 2025 Ledihas',
    },
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      downloadPDF: 'Download PDF',
    },
    header: {
      name: 'Zahidel Pedroso',
      role: 'Fullstack Developer',
      clickForMore: 'Click for more information',
    },
    profile: {
      title: 'Profile',
      description:
        'I am a passionate programmer with experience in Vue, FastAPI, Docker, Django, and more. My journey in this world began in 2019 with C++, and over time I have expanded my skills to cover both frontend and backend development. I love creating efficient solutions, teamwork, and I am always looking to learn new technologies to improve my skills.',
      lookingFor: 'Currently seeking remote work opportunities and freelance projects.',
      thanks: 'Thank you for visiting my resume!',
      github: 'My GitHub:',
    },
    experience: {
      title: 'Experience',
      automation: {
        title: 'Automation - Personal',
        date: 'Recent',
        items: [
          'Workflows in n8n',
          'WhatsApp integration with Evolution API',
          'GPT model integration',
          'Postgres database management',
          'CRM',
        ],
      },
      backend: {
        title: 'Backend Developer - Client X',
        date: '2025 - 2025',
        items: [
          'Backend development with FastAPI',
          'WhatsApp chatbot integration with Evolution API',
          'Deployment on Linux servers with Docker and NGINX',
          'Postgres database management',
        ],
      },
      frontend: {
        title: 'Front-end Developer - Company',
        date: 'Current',
        items: [
          'Front-end development with Qt',
          'Video editing application',
          'In development...',
        ],
      },
    },
    education: {
      title: 'Education',
      degree: 'Computer Science Engineering',
      institution: 'University of Computer Sciences',
      period: '2021 - present',
    },
    skills: {
      title: 'Technical Skills',
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Databases',
      devops: 'DevOps & Cloud',
      tools: 'Tools & Others',
      languages: 'Programming Languages',
    },
    softSkills: {
      title: 'Soft Skills',
      teamwork: 'Teamwork',
      communication: 'Effective Communication',
      timeManagement: 'Time Management',
      adaptability: 'Adaptability',
      problemSolving: 'Problem Solving',
      continuousLearning: 'Continuous Learning',
    },
    workPreferences: {
      title: 'Work Preferences',
      remote: 'Remote Work',
      freelance: 'Freelance Projects',
      fullTime: 'Full Time',
      availability: 'Immediate availability',
    },
    projects: {
      title: 'Projects',
      viewProjects: 'View Projects',
      backToCV: 'Back to CV',
      viewProject: 'View project',
      technologies: 'Technologies:',
      languages: 'languages',
      someProjects: 'Some Projects',
    },
    footer: {
      rights: '© 2025 Ledihas',
    },
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'es',
  messages,
})

export default i18n
