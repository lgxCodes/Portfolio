import type { Project } from '../types/index.ts'

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description:
      'A dark-themed personal portfolio with a keyboard-navigable project carousel, scroll-reveal animations, a frosted-glass navbar with mobile hamburger menu, and a contact section — all fully responsive.',
    image: 'projects/Portfolio.png',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://lgxcodes.github.io/Portfolio/',
    githubUrl: 'https://github.com/lgxCodes/Portfolio',
  },
  {
    id: 'Task-Manager',
    title: 'Task Manager',
    description:
      'A Kanban-style task management app with drag-and-drop functionality, dynamic task creation, search functionality, and a responsive design that adapts seamlessly to different screen sizes.',
    image: 'projects/Task Manager.png',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'React Router'],
    liveUrl: 'https://lgxcodes.github.io/Task-Manager/',
    githubUrl: 'https://github.com/lgxCodes/Task-Manager',
  },
  {
    id: 'Guitar-Ecommerce',
    title: 'Guitar E-commerce Website',
    description:
      'A fully responsive e-commerce product showcase featuring an interactive image gallery with thumbnail navigation, a dynamic shopping cart with itemized totals, and a category-based dropdown menu.',
    image: 'projects/Guitar Ecommerce.webp',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://lgxcodes.github.io/Guitar-Webpage/',
    githubUrl: 'https://github.com/lgxCodes/Guitar-Webpage',
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    description:
      'A two-player Tic Tac Toe game with win and draw detection, move validation, and instant restart.',
    image: 'projects/TicTacToe.png',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://lgxcodes.github.io/TicTacToe/',
    githubUrl: 'https://github.com/lgxCodes/TicTacToe',
  },
  {
    id: 'lgx-bot',
    title: 'LGX Bot',
    description:
      'A clickable animated character that plays randomized voice-overs with synchronized mouth animations and preloaded audio for instant playback.',
    image: 'projects/LGX Bot.png',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://lgxcodes.github.io/LGX-Bot/',
    githubUrl: 'https://github.com/lgxCodes/LGX-Bot',
  },
  {
    id: 'valentine',
    title: 'Valentine\'s Day App',
    description:
      'A playful Valentine\'s Day webpage that pops the big question with a twist. The "No" button dodges every click by jumping to a random spot, and saying "Yes" triggers a fullscreen celebration with animated floating hearts.',
    image: 'projects/Valentine.png',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://lgxcodes.github.io/Valentines-Day/',
    githubUrl: 'https://github.com/lgxCodes/Valentines-Day',
  },
]
