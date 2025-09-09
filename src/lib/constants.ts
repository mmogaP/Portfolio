import { Github, Linkedin, Mail, Star } from "@lucide/svelte"
import avatar from '$lib/assets/yo.jpg';
import gif from '$lib/assets/gif.gif';




export const socials = [
    {
        label: 'GitHub',
        icon: Github,
        href: 'https://github.com/mmogaP'
    },
    {
        label: 'LinkedIn',
        icon: Linkedin,
        href: 'https://www.linkedin.com/in/mm0raga/'
    },
    {
        label: 'Email',
        icon: Mail,
        href: 'mailto:mmoraga.m3@gmail.com'
    },
    {
        label: 'Credly',
        icon: Star,
        href: 'https://www.credly.com/users/mauricio-moraga'
    }
]

export const profile = {
    name: 'Mauricio Moraga Michaud',
    title: 'Software Engineer',
    avatar: avatar,
    aboutme: 'I am a dedicated software engineer with a strong background in developing scalable web applications. With a keen eye for detail and a commitment to quality, I strive to create solutions that not only meet but exceed client expectations. My expertise spans various technologies, and I am always eager to learn and adapt to new challenges in the ever-evolving tech landscape.',
}

export const technologyCategories = {
    frontend: {
        techs: [
            { name: 'React', level: 'Advanced' },
            { name: 'Svelte', level: 'Intermediate' },
            { name: 'Vue.js', level: 'Intermediate' },
            { name: 'Angular', level: 'Basic' },
            { name: 'HTML5', level: 'Advanced' },
            { name: 'CSS3', level: 'Advanced' },
            { name: 'Tailwind CSS', level: 'Advanced' },
            { name: 'JavaScript', level: 'Advanced' },
            { name: 'TypeScript', level: 'Intermediate' },
            { name: 'PrimeNG', level: 'Basic' }
        ],
        color: 'bg-blue-500 hover:bg-blue-600 text-white border-blue-500'
    },
    backend: {
        techs: [
            { name: 'HonoJS', level: 'Intermediate' },
            { name: 'Node.js', level: 'Advanced' },
            { name: 'Express', level: 'Advanced' },
            { name: 'Python', level: 'Intermediate' },
            { name: 'Django', level: 'Basic' },
            { name: 'FastAPI', level: 'Intermediate' },
            { name: 'Ruby on Rails', level: 'Basic' },
            { name: 'Java', level: 'Basic' }
        ],
        color: 'bg-green-500 hover:bg-green-600 text-white border-green-500'
    },
    database: {
        techs: [
            { name: 'MongoDB', level: 'Advanced' },
            { name: 'PostgreSQL', level: 'Intermediate' },
            { name: 'MySQL', level: 'Intermediate' },
            { name: 'Redis', level: 'Basic' },
            { name: 'SQLite', level: 'Intermediate' },
            { name: 'Firebase', level: 'Intermediate' }
        ],
        color: 'bg-purple-500 hover:bg-purple-600 text-white border-purple-500'
    },
    devops: {
        techs: [
            { name: 'Docker', level: 'Intermediate' },
            { name: 'AWS', level: 'Intermediate' },
            { name: 'Azure', level: 'Intermediate' },
            { name: 'GCP', level: 'Intermediate' },
            { name: 'Google Cloud Run', level: 'Intermediate' },
            { name: 'Jenkins', level: 'Intermediate' },
            { name: 'GitHub Actions (CI/CD)', level: 'Intermediate' },
            { name: 'API Gateway', level: 'Basic' },
            { name: 'Microservices', level: 'Intermediate' }
        ],
        color: 'bg-orange-500 hover:bg-orange-600 text-white border-orange-500'
    },
    testing: {
        techs: [
            { name: 'Postman', level: 'Advanced' },
            { name: 'Jest', level: 'Intermediate' },
            { name: 'Vitest', level: 'Intermediate' },
            { name: 'ThunderClient', level: 'Intermediate' }
        ],
        color: 'bg-red-500 hover:bg-red-600 text-white border-red-500'
    },
    tools: {
        techs: [
            { name: 'Git', level: 'Advanced' },
            { name: 'GitHub', level: 'Advanced' },
            { name: 'Figma', level: 'Intermediate' },
            { name: 'Swagger', level: 'Intermediate' },
            { name: 'Jira', level: 'Advanced' },
            { name: 'Bun', level: 'Intermediate' },
            { name: 'Yarn', level: 'Intermediate' },
            { name: 'Expo', level: 'Basic' },
            { name: 'Notion', level: 'Expert' }
        ],
        color: 'bg-gray-500 hover:bg-gray-600 text-white border-gray-500'
    },
    mobile: {
        techs: [
            { name: 'React Native', level: 'Intermediate' },
            { name: 'Flutter', level: 'Intermediate' },
            { name: 'Kotlin', level: 'Intermediate' },
            { name: 'Android Studio', level: 'Basic' },
            { name: 'Capacitor', level: 'Intermediate' }
        ],
        color: 'bg-pink-500 hover:bg-pink-600 text-white border-pink-500'
    },
    api: {
        techs: [
            { name: 'REST API', level: 'Advanced' },
            { name: 'USGS API', level: 'Basic' },
            { name: 'Copernicus API', level: 'Advanced' },
            { name: 'Leaflet', level: 'Intermediate' }
        ],
        color: 'bg-teal-500 hover:bg-teal-600 text-white border-teal-500'
    },
    methodologies: {
        techs: [
            { name: 'Scrum', level: 'Intermediate' },
            { name: 'Agile', level: 'Intermediate' }
        ],
        color: 'bg-indigo-500 hover:bg-indigo-600 text-white border-indigo-500'
    }
};

export const experiences = [
    {
        role: 'CTO | Software Engineer',
        company: 'RedOcean',
        duration: 'Jul 2024 - Jul 2025',
        technologies: ['Svelte', 'Node.js', 'GCP', 'API Gateway', 'Docker', 'HonoJS', 'SQLite', 'Tailwind CSS', 'TypeScript', 'Django', 'Python', 'ThunderClient', 'FastAPI', 'Bun', 'Microservices', 'Google Cloud Run', 'Copernicus API', 'Scrum', 'Agile', 'Git', 'GitHub', 'Figma', 'Jira'],
        description: [
            'Led the development of a SaaS platform for oceanic drift prediction, in partnership with the Chilean Navy. Implemented scalable microservices architecture with Bun, Hono, and FastAPI, reducing infrastructure costs by 75% (from $300k to $70k CLP monthly) through migration to Google Cloud Run. Automated daily satellite data ingestion from Copernicus and optimized performance by 60% compared to the initial prototype.',
            'Managed requirements directly with the CEO, defined technical roadmap, and represented the startup at ChileMass with an English pitch.Secured funding from the Google for Startups program and led meetings with international clients.Actively participated in networking events for market validation and business development.'
        ],
        gif: gif
    },
    {
        role: 'Software Engineer',
        company: 'University of Valparaíso',
        duration: 'Mar 2023 - Dec 2023',
        technologies: ['Node.js', 'TypeScript', 'Angular', 'PrimeNG', 'REST API', 'Git', 'GitHub', 'Vitest', 'Jest', 'Scrum', 'Agile', 'Swagger'],
        description: [
            'Developed and maintained backend endpoints using Node.js and TypeScript for university systems.',
            'Designed and implemented global and career-specific notification systems using Angular and PrimeNG.',
            'Collaborated with frontend, backend, and university application teams for integrated development and implementation.',
            'Gathered requirements and developed functionalities based on stakeholder needs.'
        ],
    },
    {
        role: 'Backend Developer',
        company: 'Consorcio Progresa, Codefire',
        duration: 'Jan 2022 - Feb 2022',
        technologies: ['Node.js', 'TypeScript', 'Swagger', 'REST API', 'Git', 'GitHub', 'Jest', 'Scrum', 'Agile'],
        description: [
            'Developed and maintained backend endpoints using Node.js and TypeScript.',
            'Created API documentation using Swagger and modularized backend architecture to improve maintainability and scalability.',
            'Collaborated with frontend team for requirements gathering and system integration.'
        ],
    },
    {
        role: 'Mobile Developer',
        company: 'Valparaíso Profundo',
        duration: 'Apr 2022 - Oct 2022',
        technologies: ['React Native', 'Firebase', 'Leaflet', 'TypeScript', 'Git', 'GitHub', 'Agile', 'Scrum', 'Yarn', 'Expo'],
        description: [
            'Developed from scratch a self-guided tourism application for Valparaíso Profundo.',
            'Built and maintained the mobile application using Firebase and React Native.',
            'Implemented geographic information visualization using Leaflet for enhanced user experience.'
        ],
    }
]

export const education = [
    {
        degree: 'Bachelor of Engineering in Computer Science',
        institution: 'University of Valparaíso',
        duration: '2017 - 2023',
        href: 'https://drive.google.com/file/d/1jGsJKvrIJl8goae3ihwS5o8pcEP3POBx/view',
        details:
            'Develop quality computer systems using world-class standards for diverse organizations, manage IT projects involving information and communication technologies efficiently and effectively across various organizations, and integrate Information and Communication Technologies coherently with organizational objectives.',
    },
    {
        degree: 'Backend JavaScript Application Development Specialization',
        institution: 'Desafío Latam',
        duration: '2024 - May 2025',
        href: 'https://empieza.desafiolatam.com/v/qGUkof8kgsxgkPbEHNBjar6M',
        details:
            'Intensive program focused on backend technologies, including Node.js, Express, TypeScript, and database management.',
    },
]

export const projects = [
    /* {
           name: 'Project Alpha',
           technologies: ['React', 'Node.js', 'MongoDB'],
           description:
               'A web application that streamlines project management tasks, enhancing team collaboration and productivity.',
           link: 'https://asda.com',
       }, */
    {
        name: 'InfoSismos - Earthquake Information Web App',
        technologies: ['Ruby on Rails', 'Vue.js', 'USGS API'],
        description:
            'A web application that provides users access to seismic information from the last 30 days, obtained from the USGS (United States Geological Survey) site. It allows users to leave comments about seismic events. The project features a Ruby on Rails backend and Vue.js frontend.',
        link: 'https://github.com/mmogaP/frogmi-backend',
    },
    {
        name: 'UVA 2095: Mobile App for Retinal Examination Guidance',
        technologies: ['Java', 'Android Studio', 'Mobile Development'],
        description:
            'A mobile application developed for retinal examinations where I focused on designing and developing the graphical user interface using Java. I created an intuitive and user-friendly interface for mobile devices, ensuring a smooth user experience. This project allowed me to apply my mobile app development skills and contribute to technological innovation in the visual health field.',
        /* link: 'https://example.com', */ // You'll need to replace this with the actual project link if available
    },
]

export const courses = [
    {
        title: 'Certifications',
        href: 'https://www.credly.com/users/mmoraga',
        items: [
            'AWS Certified Solutions Architect',
            'Certified Scrum Master (CSM)',
        ],
    },
    {
        title: 'Languages',
        href: '',
        items: ['English (Fluent)', 'Spanish (Native)'],
    },
]

export const extras = [
    {
        title: 'Volunteer Work',
        items: [
            'Mentored coding bootcamp students, helping them transition into tech careers.',
            'Organized local tech meetups to foster community learning and networking.',
        ],
    },
    {
        title: 'Hobbies',
        items: ['Hiking', 'Photography', 'Traveling'],
    },
]