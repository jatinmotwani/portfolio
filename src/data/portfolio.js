// All site content lives here. Edit this file to update the portfolio —
// no component changes needed.

export const profile = {
  name: 'Jatin Motwani',
  firstName: 'Jatin',
  role: 'Backend Software Engineer',
  location: 'Bengaluru, India',
  currently: 'SDE 2 @ Yocket',
  email: 'jatinmotwani77@gmail.com',
  // Drop a PDF into /public (e.g. public/resume.pdf) and set this to 'resume.pdf'
  // to show a "Resume" button in the hero.
  resumeUrl: '',
  // Rotating phrases shown after "I design & build …" in the hero.
  building: ['scalable APIs', 'loan platforms', 'real-time systems', 'automated workflows'],
  tagline:
    'Backend-focused engineer with 6.5+ years shipping Node.js, TypeScript and PostgreSQL systems — currently leading backend engineering for Yocket Finance.',
  about: [
    "I'm a backend engineer who likes owning a system end to end — the data model, the API contract, the background jobs, and the 2 a.m. alert when something misbehaves.",
    "Over 6.5+ years I've built education-loan platforms processing ₹3,500+ crore in applications a year, payment and marketplace backends, and real-time chat with WebSockets. I care about system design, API performance and automating away manual work.",
    "Outside the day job I enjoy bug bashes, building things from the ground up, and grinding DSA to keep the problem-solving muscles sharp.",
  ],
  socials: [
    { name: 'GitHub', url: 'https://github.com/jatinmotwani', icon: 'mdi-github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jatin-motwani/', icon: 'mdi-linkedin' },
    { name: 'Email', url: 'mailto:jatinmotwani77@gmail.com', icon: 'mdi-email-outline' },
  ],
};

// Rendered as a little now.json card in the About section.
export const now = {
  role: 'SDE 2 @ Yocket',
  focus: 'Yocket Finance backend',
  learning: 'DSA',
  based_in: 'Bengaluru, IN',
  side_projects: 'compiling…',
};

export const stats = [
  { value: '6.5+', label: 'years building backend systems' },
  { value: '₹3,500+ Cr', label: 'in loan applications processed yearly' },
  { value: '120%', label: 'lift in premium counselling leads' },
  { value: '~30%', label: 'less manual effort in site & email creation' },
];

// Companies in reverse-chronological order. A company can hold multiple roles.
export const experience = [
  {
    company: 'Yocket',
    url: 'https://yocket.com',
    period: 'May 2022 — Present',
    roles: [
      {
        title: 'SDE 2',
        period: 'Jul 2024 — Present',
        points: [
          'Lead backend engineering for Yocket Finance, an education-loan aggregation platform processing ₹3,500+ crore in loan applications annually — owning system design, delivery and reliability across lead, loan and lender workflows.',
          'Designed and built the Disbursement Management system: disbursement reconciliation, payout and commission calculation, and automated invoice generation, cutting manual finance and ops effort.',
          'Built the Lender RM Assignment System that routes applications to lender relationship managers using configurable state-wise, zone-wise and round-robin strategies, with a fallback team so no application goes unassigned.',
          'Built scalable Node.js, TypeScript and PostgreSQL services for lead processing, loan workflows, advisor operations and multiple lender integrations, with background jobs for async processing.',
          'Improved issue-resolution speed and platform reliability through funnel visibility, backend optimisations, monitoring and workflow automation.',
        ],
        tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'Background Jobs', 'System Design'],
      },
      {
        title: 'SDE 1',
        period: 'May 2022 — Dec 2023',
        points: [
          'Built and launched the Loan Finder Tool end to end, letting students estimate education-loan eligibility across lenders from financial, academic and profile inputs.',
          'Increased premium counselling leads by 120% by optimising high-traffic user journeys and adding conversion-focused product hooks.',
          'Developed APIs, lead-management systems and workflows for loan discovery, counsellor operations and high-volume application processing.',
        ],
        tags: ['Node.js', 'REST APIs', 'Vue.js', 'Lead Management'],
      },
    ],
  },
  {
    company: 'MetaDesign Solutions',
    url: 'https://www.metadesignsolutions.com/',
    period: 'Dec 2023 — Jul 2024',
    roles: [
      {
        title: 'Senior Software Engineer',
        period: 'Dec 2023 — Jul 2024',
        points: [
          'Developed a dynamic website-generation platform and scalable APIs for content generation, configuration management and publishing workflows.',
          'Designed reusable component-based workflows that reduced manual website and email creation effort by ~30%.',
        ],
        tags: ['APIs', 'Content Platforms', 'Workflow Design'],
      },
    ],
  },
  {
    company: 'TatvaSoft',
    url: 'https://www.tatvasoft.com/',
    period: 'Jun 2021 — Apr 2022',
    roles: [
      {
        title: 'Software Engineer',
        period: 'Jun 2021 — Apr 2022',
        points: [
          'Developed scalable backend services and REST APIs for payment solutions and business-critical transaction workflows.',
          'Contributed to architecture, performance optimisation, and a service-marketplace platform covering booking and service-management workflows.',
        ],
        tags: ['Payments', 'Serverless', 'Microservices', 'REST APIs'],
      },
    ],
  },
  {
    company: 'Trinarybits Technologies',
    url: 'https://www.trinarybits.com/',
    period: 'Jan 2020 — May 2021',
    roles: [
      {
        title: 'Full Stack Developer',
        period: 'Jul 2020 — May 2021',
        points: [
          'Built backend systems for social and dating platforms: authentication, profiles, connections, subscriptions and content workflows.',
          'Implemented WebSocket chat, FCM notifications, and automated API tests with Supertest, Mocha, Chai and Sinon.',
        ],
        tags: ['WebSockets', 'FCM', 'Mocha', 'Chai', 'Supertest'],
      },
      {
        title: 'Web Development Intern',
        period: 'Jan 2020 — Jun 2020',
        points: ['Developed responsive web features using HTML, CSS, JavaScript, Bootstrap, jQuery and Angular.'],
        tags: ['JavaScript', 'Angular', 'jQuery'],
      },
    ],
  },
];

export const skills = [
  {
    group: 'Backend',
    icon: 'mdi-server-network',
    items: ['Node.js', 'TypeScript', 'JavaScript', 'Express.js', 'NestJS', 'REST APIs', 'WebSockets'],
  },
  {
    group: 'Data & Architecture',
    icon: 'mdi-database-cog-outline',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'System Design', 'Microservices', 'Background Jobs', 'Performance Optimization'],
  },
  {
    group: 'Cloud & Tools',
    icon: 'mdi-cloud-outline',
    items: ['Serverless', 'Docker', 'Git', 'React', 'Vue.js', 'Mocha', 'Chai', 'Sinon', 'Supertest'],
  },
];

export const education = [
  {
    title: 'B.Tech — Electronics & Communication Engineering',
    org: 'Shankersinh Vaghela Bapu Institute of Technology, GTU',
    period: '2016 — 2020',
    detail: 'CGPA 8.22 / 10',
    icon: 'mdi-school-outline',
  },
  {
    title: 'Backend Engineering Launchpad',
    org: 'Airtribe',
    detail: 'Certification',
    icon: 'mdi-certificate-outline',
  },
];

// Add side projects here — the section switches from the "coming soon"
// state to a card grid as soon as this array has an entry.
// {
//   title: 'Project name',
//   description: 'One or two lines on what it does and why.',
//   tags: ['Node.js', 'Redis'],
//   githubUrl: 'https://github.com/jatinmotwani/…',
//   demoUrl: 'https://…',
// }
export const projects = [];

// Add blog posts here — same idea as projects.
// {
//   title: 'Post title',
//   date: 'Oct 2026',
//   description: 'A one-line summary.',
//   url: 'https://…',
//   readingTime: '6 min read',
// }
export const blogs = [];
