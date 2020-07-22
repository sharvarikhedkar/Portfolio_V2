import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Sharvari Khedkar', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sharvari',
  subtitle: '',
  cta: '',
  subtext: 'MS Computer Science. Cal State Fullerton.',
  subsubtext: 'Class of 2021.',
};

// ABOUT DATA
export const aboutData = {
  img: 'portrait.jpg',
  paragraphOne:
    'I am a Computer Science Graduate student at California State University, Fullerton. Previously I have worked wit Persistent as Software Engineer Intern and with Techbuzz solutions as Software as Software Engineer Intern.',
  paragraphTwo:
    'Having experience in various domains such as Web Application Development, Software Development, Pattern Recognition and Machine Learning. I have good understanding of Javascript frameworks such as React.js, Node.js and database systems such as MongoDB and MySQL.',
  paragraphThree:
    'Also have understanding of Agile  Development, Docker, Kubernetes and tools such as Git, SVN, JIRA and Postman. Being a passionate techie, in my spare time, you can find me exploring new tools and technologies and working on projects, or "passion projects" as I like to call them.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'sb.jpg',
    title: 'Smart Brain',
    info:'A full stack web application with features such face detection from image URL provided by user.',
    info2: 'Work in Progress!!',
    url: 'https://sharvarikhedkar.github.io/SmartBrain/',
    repo: 'https://github.com/sharvarikhedkar/SmartBrain', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'weather.jpg',
    title: 'Weather App',
    info:'A simple weather web application using HTML, CSS, and React.js',
    info2: '',
    url: '',
    repo: 'https://github.com/sharvarikhedkar/Weather_Web_App', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'gradient.jpg',
    title: 'Gradient Generator',
    info: 'A Gradient Generator using vanilla Javascript, HTML5 and CSS3.',
    info2: '',
    info3: '',
    url: 'https://sharvarikhedkar.github.io/Gradient-Generator/',
    repo: 'https://github.com/sharvarikhedkar/Gradient-Generator', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project1.jpg',
    title: 'Music System Application - 1',
    info:
      'A microservice architecture based music system application. Provides users with functionality to create music playlists. Built with Python, Flask API and SQLite3.',
    info2: '',
    url: '',
    repo: 'https://github.com/sharvarikhedkar/Music-System-1', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project2.jpg',
    title: 'Music System Application - 2',
    info:
      'Expands on Music-System-1, introducing an API gateway, sharding the tracks database, and generating playlists in a format that can be opened in a music player.',
    info2:'',
    url: '',
    repo: 'https://github.com/sharvarikhedkar/Music-System-2', // if no repo, the button will not show up
    link: '',
  },
  {
    id: uuidv1(),
    img: 'project3.jpg',
    title: 'Music System Application - 3',
    info:
      'Music-System-2 is ported to a NoSQL database-ScyllaDB and object caching is added using Memcached to improve the performance of XSPF playlist service',
    info2:'',
    url: '',
    repo: 'https://github.com/sharvarikhedkar/Music-System-3', // if no repo, the button will not show up
    link: '',
  },
  {
    id: uuidv1(),
    img: 'port.JPG',
    title: 'Personal Portfolio',
    info:
      'A fully responsive personal portfolio website with features such as Single page layout, Modern UI design, Animations and styled with Bootstrap and custom SCSS.',
    info2: '',
    info3: '"This Website"',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sharvari996@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'instagram',
      url: 'https://www.instagram.com/sharvarikhedkar',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sharvarikhedkar',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://www.github.com/sharvarikhedkar',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
