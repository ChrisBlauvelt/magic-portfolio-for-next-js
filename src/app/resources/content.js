import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Chris',
    lastName:  'Blauvelt',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Systems Administrator',
    avatar:    '/images/avatar.jpg',
    location:  'America/New_York',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Spanish']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/chrisblauvelt',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/christopherjohnblauveltjr',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/techieneighba',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:admin@techieneighbor.net',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>TechieNeighbor</>,
    subline: <>I'm Chris, the proud operator at <InlineCode>Techie Neighbor LLC</InlineCode>, where I assist businessess and neighbors untangle their complicated digital lives. After hours, I practice my web-development and spend far too much time creating infrastructure in my Linux and NixOS homelab to stay current with the newest tech and look forward to contributing to the open source community more ion the coming months.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/techieneighbor/'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Chris loves to take on complicated challenges head first, and the challenge of integrating many systems into a unified and user-friendly interface.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: '360 Smart Networks',
                timeframe: '2022 - 2024',
                role: 'Deploymnet | Project Engineer',
                achievements: [
                    <>Developed and maintained processes and best-practice documentation for software integration, UNIX command-line best practices for appliance-based distributions, as well as Microsoft Entra I.D. and Azure.</>,
                    <>Collaborated with cross-functional teams to meet expected deadlines and targets, while maintaining stringent security and network administration practices & protocols for a Managed Service Provider undergoing a rapid growth period. </>
                ],
                images: [ ]
            },
            {
                company: 'Lorenzo Provisions',
                timeframe: '2009 - 2021',
                role: 'Service Industry Veteran',
                achievements: [
                    <>Having worked in restaruants and hospitality industries since High School, my work ethic and interactions are informed by my wealth of customer service expertise.</>,
                    <>Diverse and non-traditional technical background reinforces my ability to think differently than the average SysAdmin, allowing me to utilize the UNIX skills that were forged by way of a thousand re-installations of Arch (and every other distro under the sun, of) Linux.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Appalachian State University',
                description: <>Studied Philosophy and English Literature.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Integrations/Autmoations',
                description: <>Able to integrate products that are connected to various networks from various vendors, as well as design and implement the network infrastrucutre to support it all reliably.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Troubleshooting/Remote Support',
                description: <>Extremely adept at quickly and accurately determining the source of a wide range of technical issues that relate to networking, audio/visual, electrical signals, and the like.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about tech and the wonderful (and awful) interactions that are linked to our daily lives..',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Installations, Repairs, and Integrations by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
