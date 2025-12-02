import image1 from '../../assets/png/iraProduction.png'
import image2 from '../../assets/png/americoConsultoria.png'
import image3 from '../../assets/png/barbeariaRoots.png'
import image4 from '../../assets/png/lapTravel.png'

export const data = {
    about: {
        "title": "Quem sou eu?",
        "description1": "Olá! Meu nome é Artur Boettger, e sou um desenvolvedor web que reside no Brasil.",
        "description2": "Atualmente estou cursando Sistemas para Internet na Universidade do Vale do Itajaí (Univali). O curso visa formar profissionais especializados em infraestrutura e desenvolvimento de sistemas web. Além dos meus estudos universitários, também estou fazendo um curso de desenvolvimento Front-End na Alura. Sou altamente proativo na busca por conhecimento, utilizando a vasta gama de conteúdo disponível na internet, incluindo recursos de inteligência artificial."
    },
    bio: "",
    achievements: [
        {
            id: 1,
            title: 'Intercâmbio ELS Language Center Vancouver',
            details: 'Estudo e prática de inglês como segunda língua',
            date: 'Janeiro, 2020',
            field: 'Idiomas'
        },
        {
            id: 2,
            title: 'Cultura Inglesa',
            details: 'Lá aprendi toda a base do meu inglês, com aulas teóricas e práticas de conversação',
            date: '2013 - 2016',
            field: 'Idiomas'
        },
        {
            id: 2,
            title: 'Campeão Catarinense de Basquete',
            details: 'Pode não ter uma ligação direta com o programação, mas mostra muita dedicação e trabalho em equipe',
            date: '2017',
            field: 'Esportes'
        }
    ],
    contacts: {
        title: "Contatos",
    },
    education: {
        title: "Educação",
        data: [
            {
                id: 1,
                institution: 'Univali',
                course: 'Sistemas para Internet',
                startYear: '2023',
                endYear: 'Cursando atualmente'
            },
            {
                id: 2,
                institution: 'Eem Prof Henrique Da Silva Fontes',
                course: 'Ensino Médio',
                startYear: '2020',
                endYear: '2022'
            },
            {
                id: 3,
                institution: 'Colégio São José',
                course: 'Ensino Fundamental',
                startYear: '2008',
                endYear: '2019'
            }
        ],
    },
    experience: {
        title: "Experiência",
        data: [
            {
                id: 1,
                company: 'FX Log',
                jobtitle: 'Assistente Administrativo',
                startYear: '2020',
                endYear: '2022',
                description: 'Trabalhei, começando no faturamento. Posteriormente, fui designado para um armazém, onde lidei com todos os aspectos de recebimento, verificação e expedição de mercadorias. Trabalhei com sistemas ERP, planilhas e Trello para organização de tarefas.'
            },
            {
                id: 2,
                company: 'GeoSapiens',
                jobtitle: 'Desenvolvedor Full Stack',
                startYear: '2023',
                endYear: '2024',
                description: 'Na GeoSapiens, desempenho a função de desenvolvedor no produto Coletum, onde minha atuação abrange o aprimoramento da interface, implementação de funcionalidades, integração de APIs e definição de rotas. Possuo experiência nas seguintes tecnologias: Git/GitHub para controle de versão, PHP/Symfony/Twig para o desenvolvimento back-end, JS/Angular/React para a construção de interfaces dinâmicas, Postman para testes e Docker para facilitar a gestão de contêineres. Estou constantemente empenhado em aprimorar minhas habilidades e contribuir para o sucesso contínuo do projeto Coletum.'
            },
            {
                id: 3,
                company: 'Grupo Nelson Heusi',
                jobtitle: 'Desenvolvedor Full Stack',
                startYear: '2024',
                endYear: '2025',
                description: 'Atuei como Desenvolvedor Full Stack com foco em soluções de automação e análise de dados. Implementei técnicas avançadas de Web Scraping para otimizar processos críticos, resultando em significativa economia de tempo e recursos. Paralelamente, contribuí para o aprimoramento de um portal web corporativo, onde desenvolvi e integrei dashboards interativos com filtros dinâmicos. Essas implementações permitiram análises de dados mais profundas e intuitivas, facilitando a tomada de decisões baseadas em dados. Minha atuação abrangeu tanto o desenvolvimento front-end, utilizando tecnologias como NextJs, Vue3, Vuetify, quanto o back-end, trabalhando com linguagens como Node e frameworks como NestJS. Esta experiência multifacetada fortaleceu minha capacidade de criar soluções tecnológicas completas e eficientes, desde a concepção até a implementação.'
            },
        ],
    },
    header: {
        name: 'Artur Boettger',
        title: "Desenvolvedor Full Stack",
        subtitle: "Cidadanias: Brasileira & italiana",
        description: "Encare os desafios como oportunidades de crescimento",
    },
    projects: {
        title: "Projetos",
        viewAll: "Ver Todos",
        data: [
            {
                id: 1,
                projectName: 'iraProduction',
                projectDesc: 'Este projeto foi feito para uma empresa de edição audiovisual',
                tags: ['HTML', 'CSS', 'Javascript', 'GSAP'],
                code: 'https://github.com/artur-boettger/iraProduction',
                demo: 'https://iraproduction.com/',
                image: image1
            },
            {
                id: 2,
                projectName: 'TLD Global',
                projectDesc: 'Projeto feito para uma empresa relacionada a comércio exterior',
                tags: ['React', 'Tailwind', 'JavaScript', 'Material UI'],
                code: '',
                demo: 'https://www.tldglobal.com.br/',
                image: image2
            },
            {
                id: 3,
                projectName: 'rootsBarber',
                projectDesc: 'Neste projeto fiz o front-end de um site da Barbearia Roots com formulário para agendamento de horário',
                tags: ['HTML', 'CSS', 'JavaScript'],
                code: 'https://github.com/artur-boettger/Roots-barber',
                demo: 'https://barbearia-roots.web.app/',
                image: image3
            },
            {
                id: 4,
                projectName: 'lapTravel',
                projectDesc: 'Contribuí com este trabalho na disciplina de WebDesign na Univali',
                tags: ['HTML', 'TypeScript'],
                code: 'https://github.com/artur-boettger/laptravel',
                demo: 'https://lucasdev-sc.github.io/website-design-sc/',
                image: image4
            },
            {
                id: 5,
                projectName: 'Pode ser o seu',
                projectDesc: 'Entre em contato para fazer um orçamento',
                tags: [''],
                code: '',
                demo: ''
            }
        ]
    }
}