import { CustomDataArrayTypes, ManualProjectTypes } from './types/home.d';

const customFields: CustomDataArrayTypes[] = [
  {
    id: 715777960,
    demoURL: '',
    projectThumbnail: '/next-auth-auth0.png',
    tags: ['Next.js', 'Auth0', 'Next Auth', 'Typescript', 'Tailwind CSS'],
  },
  {
    id: 709445731,
    demoURL: 'https://ajs-block-game.netlify.app/',
    projectThumbnail: '/tetris.jpg',
    tags: ['Typescript', 'HTML', 'CSS'],
  },
  {
    id: 491245212,
    demoURL: '',
    projectThumbnail: '/react-native-weather.png',
    tags: ['React Native', 'Typescript', 'Expo'],
  },
  {
    id: 455672935,
    demoURL: '',
    projectThumbnail: '/quiz-app.png',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
  },
  {
    id: 439105172,
    demoURL: '',
    projectThumbnail: '/users-CRUD.png',
    tags: ['Node.js', 'Express', 'Javascript', 'PostgreSQL'],
  },
  {
    id: 362217174,
    demoURL: 'https://top-videogames-portal.netlify.app/',
    projectThumbnail: '/top-videogames.png',
    tags: ['React', 'Sass', 'Redux'],
  },
  {
    id: 361238021,
    demoURL: 'https://www.ajsevillano.com',
    projectThumbnail: '/portfolio.png',
    tags: ['Next.js', 'Sass'],
  },
  {
    id: 354868893,
    demoURL: 'https://animated-photographer-portfolio.netlify.app/',
    projectThumbnail: '/animated-portfolio.png',
    tags: ['React', 'Styled Components', 'Framer Motion'],
  },
  {
    id: 351733523,
    demoURL: 'https://ajs-password-generator.netlify.app/',
    projectThumbnail: '/password-generator.png',
    tags: ['React', 'Typescript', 'Sass'],
  },
  {
    id: 337684354,
    demoURL: 'https://catalogue-management-portal.netlify.app/',
    projectThumbnail: '/catalogue-management-app.png',
    tags: ['React', 'Sass'],
  },
  {
    id: 334662367,
    demoURL: '',
    projectThumbnail: '/firebase-authentication.png',
    tags: ['React', 'Firebase', 'Sass'],
  },
  {
    id: 322001903,
    demoURL: 'https://ajs-react-music-player.netlify.app/',
    projectThumbnail: '/react-music-player.png',
    tags: ['React', 'Sass'],
  },
  {
    id: 302134704,
    demoURL: 'https://api.uniondistribuidora.com/',
    projectThumbnail: '/api.uniondistribuidora.com.png',
    tags: ['PHP', 'MySQL'],
  },
  {
    id: 296066823,
    demoURL: null,
    projectThumbnail: '/solar-system.png',
    tags: ['React', 'Sass'],
  },
  {
    id: 253575136,
    demoURL: null,
    projectThumbnail: '/socketIO.png',
    tags: ['Node.js', 'Express', 'Javascript', 'Socket IO'],
  },
];

// Projects that aren't in the GitHub API response (e.g. private repos) but should
// still be displayed in the portfolio.
const manualProjects: ManualProjectTypes[] = [
  {
    id: 1,
    name: 'school-menu-app',
    description: 'A PWA that shows the daily school lunch menu and sends a push notification at 07:00 AM',
    html_url: '',
    demoURL: 'https://school-menu.ajsevillano.com',
    projectThumbnail: '/menu-app.jpg',
    tags: ['Next.js', 'Auth0', 'Next Auth', 'Typescript', 'Tailwind CSS'],
  },
  {
    id: 2,
    name: 'catalogue-management-portal',
    description:
      'A web application that allows users to manage a catalogue of products, including adding, editing, and deleting products.',
    html_url: '',
    demoURL: 'https://catalogue-management-portal.netlify.app/',
    projectThumbnail: '/catalogue-management-app.png',
    tags: ['React', 'Typescript', 'Sass'],
  },
];

export default customFields;
export { manualProjects };
