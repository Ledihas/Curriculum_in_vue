import { createI18n } from 'vue-i18n'

const messages = {
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      downloadPDF: 'Descargar PDF',
    },
    header: {
      name: 'Ledihas',
      role: 'Desarrollador Fullstack',
      clickForMore: 'Haz clic para más información',
    },
    profile: {
      title: 'Perfil',
      description:
        'Soy un programador apasionado con experiencia en Vue, FastAPI, Docker, Django, n8n,Java y más. Mi experiencia en este mundo comenzó en 2019 con el lenguaje C++, luego Java y con el tiempo he ampliado mis habilidades para abarcar el desarrollo Web, el Desktop, Low-Code y automatizaciones; practicando y formándome constantemente según los campos que me sean de interés o utilidad. Adicto a crear soluciones eficientes, el trabajo en equipo, y siempre estar buscando aprender nuevas tecnologías y técnicas para mejorar mis habilidades.',
      lookingFor: 'Actualmente busco oportunidades de trabajo remoto y proyectos freelance.',
      thanks: '¡Gracias por visitar mi currículum!',
      github: 'Mi GitHub:',
    },
    experience: {
      title: 'Experiencia',
      automation: {
        title: 'Automatizaciones - Personal y Clientes',
        date: 'Reciente',
        items: [
          'Workflows en n8n',
          'Integración de WhatsApp con Evolution API',
          'Integración con modelos de IA',
          'Gestión de bases de datos Postgres',
          'CRM',
          'Integración con Catwoot',
          'Bots',
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
        date: '2025 - 2026',
        items: [
          'Desarrollo del Front-end con Qt',
          'Aplicación para edición de videos e imágenes',
          'Aplicación Qt QUick',
          'Integración de modelo de Ml a UI de Qt',
        ],
      },
    },
    education: {
      title: 'Educación',
      degree: 'Ingeniería en Ciencias Informáticas',
      institution: 'Universidad de Ciencias Informáticas',
      period: '2022 - 2026',
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
      viewProjects: 'Ver Algunos Proyectos',
      backToCV: 'Volver al CV',
      viewProject: 'Ver proyecto',
      technologies: 'Tecnologías:',
      languages: 'lenguajes',
      someProjects: 'Algunos Proyectos',
    },
    footer: {
      rights: '© 2026 Ledihas',
    },
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      downloadPDF: 'Download PDF',
    },
    header: {
      name: 'Ledihas',
      role: 'Fullstack Developer',
      clickForMore: 'Click for more information',
    },
    profile: {
      title: 'Profile',
      description:
        'I am a passionate programmer with experience in Vue, FastAPI, Docker, Django, n8n, Java and more. My journey in this world began in 2019 with C++, then Java, and over time I have expanded my skills to cover web development, desktop development, low-code and automation, continuously training in areas that interest me or are useful to me. Addicted to creating efficient solutions, teamwork, and always looking to learn new technologies and techniques to improve my skills.',
      lookingFor: 'I am currently looking for remote job opportunities and freelance projects.',
      thanks: 'Thank you for visiting my resume!',
      github: 'My GitHub:',
    },
    experience: {
      title: 'Experience',
      automation: {
        title: 'Automations - Personal and Clients',
        date: 'Recent',
        items: [
          'n8n workflows',
          'WhatsApp integration with Evolution API',
          'AI model integration',
          'Postgres database management',
          'CRM',
          'Catwoot integration',
          'Bots',
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
        date: '2025 - 2026',
        items: [
          'Front-end development with Qt',
          'Video and image editing application',
          'Qt Quick application',
          'Integration of ML model into Qt UI',
        ],
      },
    },
    education: {
      title: 'Education',
      degree: 'Computer Science Engineering',
      institution: 'University of Computer Science',
      period: '2022 - 2026',
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
      adaptability: 'Adaptability to the environment',
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
      viewProjects: 'View some projects',
      backToCV: 'Back to CV',
      viewProject: 'View project',
      technologies: 'Technologies:',
      languages: 'languages',
      someProjects: 'Some Projects',
    },
    footer: {
      rights: '© 2026 Ledihas',
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
