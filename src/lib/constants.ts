import { Github, Linkedin, Mail, Award } from "@lucide/svelte"
import avatar from '$lib/assets/avatar.jpg';
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
        icon: Award,
        href: 'https://www.credly.com/users/mauricio-moraga'
    }
]

export const profile = {
    name: 'Mauricio Moraga Michaud',
    title: 'Builder',
    avatar: avatar,
    aboutme: 'Generalist by nature. I like picking up new tools, exploring ideas outside my comfort zone, and learning just enough of everything to connect the dots. I build things to solve my own problems — and occasionally to help interesting ideas come to life.',
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
        role: 'Data Engineer',
        company: 'Deloitte',
        duration: 'Oct 2025 - Present',
        technologies: ['Python', 'SQL', 'dbt', 'GCP', 'BigQuery', 'AI Agents', 'Scrum', 'Agile', 'Git', 'GitHub'],
        description: [
            'Working as a Data Engineer at Deloitte, embedded within Banco de Chile as the primary client. Focused on data pipeline development and variable engineering to support analytical and operational processes.',
            'Building AI agents to automate and augment banking workflows, applying modern LLM tooling to real-world financial use cases.',
        ],
    },
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
]

export const education = [
    {
        degree: 'Bachelor of Engineering in Computer Science',
        institution: 'University of Valparaíso',
        duration: '2017 - 2023',
        href: 'https://drive.google.com/file/d/1jGsJKvrIJl8goae3ihwS5o8pcEP3POBx/view',
        details:
            'Computer Systems Engineering graduate specializing in quality software development and IT project management. Focused on strategically integrating information and communication technologies to optimize organizational processes and achieve business objectives.',
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
    {
        name: 'RedOcean — Oceanic Drift SaaS Platform',
        technologies: ['Svelte', 'HonoJS', 'FastAPI', 'Python', 'GCP', 'Docker', 'SQLite', 'Copernicus API'],
        description:
            'SaaS platform for oceanic drift prediction built in partnership with the Chilean Navy. Reduced infrastructure costs by 75% through Google Cloud Run migration and automated daily satellite data ingestion from Copernicus. Selected for the Google for Startups program.',
    },
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

export const blogPosts = [
    {
        title: 'Reducing Cloud Costs by 75%: A Microservices Migration Story',
        excerpt: "How we migrated RedOcean's architecture to Google Cloud Run and cut monthly costs from $300k to $70k CLP — key architectural decisions and lessons learned.",
        tags: ['GCP', 'Docker', 'Microservices'],
        date: 'Apr 15, 2025',
        readTime: '8 min',
        featured: true,
    },
    {
        title: 'Real-Time Satellite Data Ingestion with the Copernicus API',
        excerpt: "Building the automated pipeline that ingests daily oceanic data from ESA's Copernicus Marine Service — from API quirks to scalable FastAPI workers.",
        tags: ['Python', 'FastAPI', 'GCP'],
        date: 'Mar 02, 2025',
        readTime: '6 min',
    },
    {
        title: 'Why I Switched from Express to HonoJS (and Bun)',
        excerpt: "After years with Node.js + Express, I made the switch at RedOcean. Here's what I learned about DX improvements and real-world performance gains.",
        tags: ['HonoJS', 'Node.js', 'Bun'],
        date: 'Jan 20, 2025',
        readTime: '5 min',
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