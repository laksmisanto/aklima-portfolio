export const PROJECTS = [
  {
    id: 1,
    title: 'E-commerce platform',
    description:
      'Full stack e-commerce app with product catalog, cart, Stripe payments, and admin panel. Handles 500+ products.',
    image: '/images/projects/project-1.png',
    techStack: ['Next.js', 'MongoDB', 'Express', 'Tailwind'],
    category: 'fullstack',
    liveUrl: 'https://your-live-url.com',
    githubUrl: 'https://github.com/aklima/ecommerce',
    featured: true,
    accentColor: '#7C3AED',
  },
  {
    id: 2,
    title: 'Analytics dashboard',
    description:
      'Real-time admin dashboard with charts, user management, RBAC, and JWT authentication for SaaS teams.',
    image: '/images/projects/project-2.png',
    techStack: ['React', 'Node.js', 'MongoDB', 'JWT'],
    category: 'dashboard',
    liveUrl: 'https://your-live-url.com',
    githubUrl: 'https://github.com/aklima/dashboard',
    featured: true,
    accentColor: '#16A34A',
  },
  {
    id: 3,
    title: 'Developer portfolio',
    description:
      'Modern developer portfolio with MDX blog, Framer Motion animations, dark mode, and 95+ Lighthouse score.',
    image: '/images/projects/project-3.png',
    techStack: ['Next.js', 'MDX', 'Motion', 'Vercel'],
    category: 'nextjs',
    liveUrl: 'https://your-live-url.com',
    githubUrl: 'https://github.com/aklima/portfolio',
    featured: false,
    accentColor: '#EA580C',
  },
  {
    id: 4,
    title: 'Task management app',
    description:
      'Collaborative task manager with drag-and-drop boards, real-time updates via Socket.io, and team workspaces.',
    image: '/images/projects/project-4.png',
    techStack: ['React', 'Express', 'Socket.io', 'MongoDB'],
    category: 'fullstack',
    liveUrl: 'https://your-live-url.com',
    githubUrl: 'https://github.com/aklima/taskmanager',
    featured: false,
    accentColor: '#0284C7',
  },
]

export const PROJECT_FILTERS = [
  { label: 'All',        value: 'all'       },
  { label: 'Full stack', value: 'fullstack' },
  { label: 'Next.js',    value: 'nextjs'    },
  { label: 'Dashboard',  value: 'dashboard' },
]
