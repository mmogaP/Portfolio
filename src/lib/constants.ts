import { Github, Linkedin, Mail } from "@lucide/svelte"
import avatar from '$lib/assets/yo.jpg';

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
]

export const profile = {
    name: 'Mauricio Moraga Michaud',
    title: 'Software Engineer',
    avatar: avatar,
    aboutme: 'I am a dedicated software engineer with a strong background in developing scalable web applications. With a keen eye for detail and a commitment to quality, I strive to create solutions that not only meet but exceed client expectations. My expertise spans various technologies, and I am always eager to learn and adapt to new challenges in the ever-evolving tech landscape.',
}

export const technologyCategories = {
    frontend: {
        techs: ['React', 'Svelte', 'Vue.js', 'Angular', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'TypeScript'],
        color: 'bg-blue-500 hover:bg-blue-600 text-white border-blue-500'
    },
    backend: {
        techs: ['HonoJS', 'Node.js', 'Express', 'Python', 'Django', 'FastAPI', 'Ruby on Rails', 'Java', 'Spring', 'PHP', 'Laravel'],
        color: 'bg-green-500 hover:bg-green-600 text-white border-green-500'
    },
    database: {
        techs: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'SQLite', 'Oracle', 'Cassandra', 'DynamoDB'],
        color: 'bg-purple-500 hover:bg-purple-600 text-white border-purple-500'
    },
    devops: {
        techs: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Jenkins', 'GitLab CI', 'Terraform', 'Ansible'],
        color: 'bg-orange-500 hover:bg-orange-600 text-white border-orange-500'
    },
    testing: {
        techs: ['Postman', 'Jest', 'Cypress', 'Selenium', 'Mocha', 'Chai', 'Vitest', 'Playwright', 'Testing Library'],
        color: 'bg-red-500 hover:bg-red-600 text-white border-red-500'
    },
    tools: {
        techs: ['Git', 'GitHub', 'GitLab', 'Figma', 'VS Code', 'Postman', 'Insomnia', 'Webpack', 'Vite'],
        color: 'bg-gray-500 hover:bg-gray-600 text-white border-gray-500'
    },
    mobile: {
        techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic', 'Xamarin', 'Cordova'],
        color: 'bg-pink-500 hover:bg-pink-600 text-white border-pink-500'
    },
    api: {
        techs: ['RESTful APIs', 'GraphQL', 'gRPC', 'WebSocket', 'REST API', 'API Gateway'],
        color: 'bg-teal-500 hover:bg-teal-600 text-white border-teal-500'
    }
};

// Create a flattened array of technologies for easy iteration
export const technologies = Object.entries(technologyCategories).flatMap(([category, data]) =>
    data.techs.map(tech => ({
        name: tech,
        category: category,
        level: Math.floor(Math.random() * 30) + 70, // Random proficiency between 70-100%
        color: data.color
    }))
);

// Function to get category info for a technology
export function getTechCategoryInfo(tech: string): { category: string; color: string } {
    for (const [category, data] of Object.entries(technologyCategories)) {
        if (data.techs.some(t => t.toLowerCase() === tech.toLowerCase())) {
            return { category, color: data.color };
        }
    }
    return { category: 'other', color: 'bg-slate-500 hover:bg-slate-600 text-white border-slate-500' };
}

export const experiences = [
    {
        role: 'CTO | Software Engineer',
        company: 'RedOcean',
        duration: 'Jul 2024 - Jul 2025',
        technologies: ['Svelte', 'Node.js', 'GCP', 'Docker', 'HonoJS', 'SQLite', 'Tailwind CSS', 'TypeScript', 'Django', 'Python', 'ThunderClient'],
        description: [
            'Led the complete development of a SaaS platform for oceanic drift prediction, in partnership with the Chilean Navy. Implemented scalable microservices architecture with Bun, Hono, and FastAPI, reducing infrastructure costs by 75% (from $300k to $70k CLP monthly) through migration to Google Cloud Run. Automated daily satellite data ingestion from Copernicus and optimized performance by 60% compared to the initial prototype.',
            'Managed requirements directly with the CEO, defined technical roadmap, and represented the startup at ChileMass with an English pitch.Secured funding from the Google for Startups program and led meetings with international clients.Actively participated in networking events for market validation and business development.'
        ],
    },
    {
        role: 'Software Engineer',
        company: 'University of Valparaíso',
        duration: 'Mar 2023 - Dec 2023',
        technologies: ['Node.js', 'TypeScript', 'Angular', 'PrimeNG'],
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
        technologies: ['Node.js', 'TypeScript', 'Swagger'],
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
        technologies: ['React Native', 'Firebase', 'Leaflet'],
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
            'Relevant coursework included Data Structures, Algorithms, Database Systems, and Software Engineering.',
    },
    {
        degree: 'Backend JavaScript Application Development Specialization',
        institution: 'Desafío Latam',
        duration: '2024 - May 2025',
        href: 'https://empieza.desafiolatam.com/v/qGUkof8kgsxgkPbEHNBjar6M',
        details:
            'Intensive program focused on backend technologies, including Node.js, Express, and database management.',
    },
]

export const projects = [
    {
        name: 'Project Alpha',
        technologies: ['React', 'Node.js', 'MongoDB'],
        description:
            'A web application that streamlines project management tasks, enhancing team collaboration and productivity.',
        link: 'https://asda.com',
    },
    {
        name: 'Beta App',
        technologies: ['Python', 'Django', 'PostgreSQL'],
        description:
            'A mobile app that provides real-time analytics and insights for business users, helping them make informed decisions on the go.',
        link: 'https://asda.com',
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