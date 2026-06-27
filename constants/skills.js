import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer,
  SiNodedotjs, SiExpress, SiMongodb, SiGit, SiGithub, SiVscodium, SiPostman, SiVercel,
} from 'react-icons/si'
import { Globe, Lock, Database } from 'lucide-react'

export const SKILL_GROUPS = [
  {
    label: 'Frontend',
    skills: [
      { name: 'HTML5',      icon: SiHtml5       },
      { name: 'CSS3',       icon: SiCss         },
      { name: 'JavaScript', icon: SiJavascript  },
      { name: 'React',      icon: SiReact       },
      { name: 'Next.js',    icon: SiNextdotjs   },
      { name: 'Tailwind',   icon: SiTailwindcss },
      { name: 'Motion',     icon: SiFramer      },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js',    icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress   },
      { name: 'REST API',   icon: Globe       },
      { name: 'JWT Auth',   icon: Lock        },
    ],
  },
  {
    label: 'Database',
    skills: [
      { name: 'MongoDB',  icon: SiMongodb },
      { name: 'Mongoose', icon: Database  },
    ],
  },
  {
    label: 'Tools',
    skills: [
      { name: 'Git',     icon: SiGit              },
      { name: 'GitHub',  icon: SiGithub           },
      { name: 'VS Code', icon: SiVscodium         },
      { name: 'Postman', icon: SiPostman          },
      { name: 'Vercel',  icon: SiVercel           },
    ],
  },
]
