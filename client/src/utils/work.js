import img1 from '../assets/carrer/carrer-1.webp'
import img2 from '../assets/carrer/carrer-2.png'
import img3 from '../assets/carrer/carrer-3.png'
import img4 from '../assets/carrer/carrer-4.png'
import img5 from '../assets/carrer/career-5.avif'
import img6 from '../assets/carrer/carrer-5.png'

export const work = [
    {
        date: 'Dec 2025- Present',
        icon: img6,
        title: 'SDE Intern',
        company: 'CloudSEK',
        description: [
            "Engineered Incident/Event Management microservices (NestJS, Golang), made async worker-based deletion architecture ensuring data consistency",
            "Mitigated production-critical issues (OOM, cost/risk mismatches, Redis outages with SQL fallback), improving system reliability.",
            "Worked on automation scripts leveraging SQL tuning, batching, and pagination to handle high-volume datasets efficiently.",
            "Designed an internal lifecycle tracing system for incidents and events, accelerating cross-team production debugging."
        ]
    },
    {
        date: 'Feb 2025- Aug 2025',
        icon: img5,
        title: 'SDE Intern',
        company: 'Zero65 Technologies Pvt. Ltd.',
        description: [
            'Developed and maintained scalable microservices for a fintech platform, ensuring high availability and efficient data processing.',
            'Designed and optimized data pipelines to streamline data preparation and cleaning, improving overall system performance.',
            'Collaborated with a team of 4 to enhance system reliability and ensure seamless integration of microservices.'
        ]
    },
    {
        date: 'Sep 2024- Nov 2024',
        icon: img4,
        title: 'Full Stack Developer Intern',
        company: 'Rehaabit',
        description: [
            'Improved frontend design and made the website responsive using Tailwind CSS for enhanced cross-device compatibility.',
            'Developed an interactive admin panel dashboard using React, streamlining data management and user workflows.',
            'Implemented search functionality, enabling fast and accurate search across the platform.',
            'Fixed bugs and integrated Redux for efficient state management in the Node.js and MongoDB backend.'
        ]
    },
    {
        date: 'Apr 2024- Aug 2024',
        icon: img1,
        title: 'Development Team Member',
        company: 'IIIT Una',
        description: [
            'Developed backend APIs using Node.js to support faculty and admin portals.',
            'Implemented secure authentication for faculty and admin portals.',
            'Enhanced interactivity of the website through well-structured APIs.'
        ]
    },
    {
        date: 'July 2024- Sep 2024',
        icon: img3,
        title: 'Backend Developer Intern',
        company: 'Bista Technologies Inc.',
        description: [
            'Engineered scalable backend architecture using Node.js, Express, and MongoDB for the platform.',
            'Integrated third-party email services for automated user notifications and communications.',
            'Developed and optimized RESTful APIs for seamless frontend-backend integration.',
            'Collaborated with cross-functional teams to ensure efficient deployment and system integration.',
        ]
    }
]

export default work;