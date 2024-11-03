import image1 from '../../assets/png/iraProduction.png'
import image2 from '../../assets/png/americoConsultoria.png'
import image3 from '../../assets/png/barbeariaRoots.png'
import image4 from '../../assets/png/lapTravel.png'

export const data = {
    about: {
        "title": "Who am I?",
        "description1": "Hello! My name is Artur Boettger, and I'm a web developer based in Brazil.",
        "description2": "I'm currently studying Internet Systems at the University of Vale do Itajaí (Univali). The course aims to train professionals specialized in infrastructure and web systems development. In addition to my university studies, I'm also taking a Front-End development course at Alura. I'm highly proactive in seeking knowledge, utilizing the vast array of content available on the internet, including artificial intelligence resources."
    },
    bio: "",
    achievements: [
        {
            id: 1,
            title: 'ELS Language Center Vancouver Exchange',
            details: 'Study and practice of English as a second language',
            date: 'January, 2020',
            field: 'Languages'
        },
        {
            id: 2,
            title: 'English Culture',
            details: 'There I learned all the basics of my English, with theoretical classes and conversation practice',
            date: '2013 - 2016',
            field: 'Languages'
        },
        {
            id: 2,
            title: 'Santa Catarina State Basketball Champion',
            details: 'It may not have a direct connection to the job market, but it shows a lot of dedication and teamwork',
            date: '2017',
            field: 'Sports'
        }
    ],
    contacts: {
        title: "Contacts",
    },
    education: {
        title: "Education",
        data: [
            {
                id: 1,
                institution: 'Univali',
                course: 'Internet Systems',
                startYear: '2023',
                endYear: 'Currently studying'
            },
            {
                id: 2,
                institution: 'Eem Prof Henrique Da Silva Fontes',
                course: 'High School',
                startYear: '2020',
                endYear: '2022'
            },
            {
                id: 3,
                institution: 'Colegio São José',
                course: 'Elementary and Middle School',
                startYear: '2008',
                endYear: '2019'
            }
        ],
    },
    experience: {
        title: "Experience",
        data: [
            {
                id: 1,
                company: 'FX Log',
                jobtitle: 'Administrative Assistant',
                startYear: '2020',
                endYear: '2022',
                description: 'I worked, starting in billing. Subsequently, I was assigned to a warehouse, where I handled all aspects of receiving, checking, and dispatching goods. I worked with ERP systems, spreadsheets, and Trello for task organization.'
            },
            {
                id: 2,
                company: 'GeoSapiens',
                jobtitle: 'Full Stack Developer',
                startYear: '2023',
                endYear: 'Currently',
                description: 'At GeoSapiens, I perform the role of developer for the Coletum product, where my work encompasses interface improvement, functionality implementation, API integration, and route definition. I have experience in the following technologies: Git/GitHub for version control, PHP/Symfony/Twig for back-end development, JS/Angular/React for building dynamic interfaces, Postman for testing, and Docker to facilitate container management. I am constantly committed to improving my skills and contributing to the ongoing success of the Coletum project.'
            },
        ],
    },
    header: {
        name: 'Artur Boettger',
        title: "Full Stack Developer",
        description: "Errors are not roadblocks; they're stepping stones to success. Embrace challenges as opportunities for growth",
    },
    projects: {
        title: "Projects",
        viewAll: "View All",
        data: [
            {
                id: 1,
                projectName: 'iraProduction',
                projectDesc: 'This project was made for an audiovisual editing company',
                tags: ['HTML', 'CSS', 'Javascript', 'GSAP'],
                code: 'https://github.com/artur-boettger/iraProduction',
                demo: 'https://iraproduction.com/',
                image: image1
            },
            {
                id: 2,
                projectName: 'americoConsultoria',
                projectDesc: 'Project made for a consulting company in the foreign trade area',
                tags: ['HTML', 'CSS', 'Javascript', 'Scroll Reveal'],
                code: 'https://github.com/artur-boettger/siteAmericoConsultoria',
                demo: 'https://americomex.com.br/',
                image: image2
            },
            {
                id: 3,
                projectName: 'rootsBarber',
                projectDesc: 'In this project I made the front of a Roots Barbershop website with a form for scheduling appointments',
                tags: ['HTML', 'CSS', 'JavaScript'],
                code: 'https://github.com/artur-boettger/Roots-barber',
                demo: 'https://barbearia-roots.web.app/',
                image: image3
            },
            {
                id: 4,
                projectName: 'lapTravel',
                projectDesc: 'I contributed to this work in the WebDesign subject at Univali',
                tags: ['HTML', 'TypeScript'],
                code: 'https://github.com/artur-boettger/laptravel',
                demo: 'https://lucasdev-sc.github.io/website-design-sc/',
                image: image4
            },
            {
                id: 5,
                projectName: 'It could be yours',
                projectDesc: 'Contact me for a quote',
                tags: [''],
                code: '',
                demo: ''
            }
        ]
    }
}