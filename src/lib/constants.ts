import { Github, Linkedin } from "@lucide/svelte"

export const socials = [
    {
        label: 'GitHub',
        icon: Github,
        href: 'https://github.com/yourusername'
    },
    {
        label: 'LinkedIn',
        icon: Linkedin,
        href: 'https://linkedin.com/in/yourusername'
    }
]

export const contactInfo = {
    email: 'tu.email@ejemplo.com',
    phone: '+56 9 1234 5678',
    location: 'Santiago, Chile',
}

export const profile = {
    name: 'Mauricio Moraga Michaud',
    title: 'Software Engineer',
    avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    bio: 'Passionate about building impactful software solutions that enhance user experiences and drive business success.',
    aboutme: 'I am a dedicated software engineer with a strong background in developing scalable web applications. With a keen eye for detail and a commitment to quality, I strive to create solutions that not only meet but exceed client expectations. My expertise spans various technologies, and I am always eager to learn and adapt to new challenges in the ever-evolving tech landscape.',
}

export const technologies = [
    'JavaScript',
    'TypeScript',
    'Python',
    'Java',
    'C#',
    'React',
    'Node.js',
    'Express',
    'Django',
    'Flask',
    'SQL',
    'NoSQL',
    'Git',
    'Docker',
    'Kubernetes',
    'AWS',
    'Azure',
]

export const experiences = [
    {
        role: 'Software Engineer',
        company: 'Tech Solutions Inc.',
        duration: 'Jan 2020 - Present',
        technologies: ['React', 'Node.js', 'AWS', 'Docker'],
        description:
            'Developed and maintained web applications using React and Node.js, improving performance by 30%. Collaborated with cross-functional teams to deliver high-quality software solutions.',
    },
    {
        role: 'Junior Developer',
        company: 'Web Innovations LLC',
        duration: 'Jun 2018 - Dec 2019',
        technologies: ['JavaScript', 'Python', 'Django'],
        description:
            'Assisted in the development of client websites and applications. Gained experience in front-end and back-end technologies, contributing to several successful project launches.',
    },
]

export const education = [
    {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University of Technology',
        duration: '2014 - 2018',
        details:
            'Graduated with honors. Relevant coursework included Data Structures, Algorithms, Database Systems, and Software Engineering.',
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
        items: [
            'AWS Certified Solutions Architect',
            'Certified Scrum Master (CSM)',
        ],
    },
    {
        title: 'Languages',
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