export const links = {
  github: 'https://github.com/tasleemk17',
  linkedin: 'https://www.linkedin.com/in/tasleemkousar-inamdar/',
  instagram: 'https://instagram.com/tasalimx.websolutions',
  email: 'mailto:tasleemkausarshaikh@gmail.com',
  emailText: 'tasleemkausarshaikh@gmail.com',
  location: 'Pune, Maharashtra, India',
};

export const tools = ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'Java', 'Spring Boot', 'Spring Data JPA', 'Node.js', 'Express', 'FastAPI', 'Python', 'PostgreSQL', 'MySQL', 'MongoDB', 'Microservices', 'Maven', 'JUnit', 'Mockito', 'Jenkins', 'AWS', 'Git', 'GitHub', 'Claude API'];

export const services = [
  { icon: 'Globe', title: 'Business websites', description: 'Clear, responsive websites and landing pages that explain your work and make it easy to connect.' },
  { icon: 'Atom', title: 'React applications', description: 'Interactive interfaces, reusable components and connected API flows built around the people using them.' },
  { icon: 'Server', title: 'Full-stack apps', description: 'Backend APIs, authentication and databases that connect with your frontend, plus deployment support.' },
];

export const whyPoints = [
  'Mobile-first interfaces',
  'Connected frontend & backend',
  'Practical problem-solving',
];

export const projects = [
  {
    name: 'Tomato', category: 'Full Stack', image: '/assets/tomato.webp',
    alt: 'Tomato food ordering app home page',
    description: 'A connected food-ordering app, from exploring the menu to managing orders. Built across a React customer app, an admin interface and backend services.',
    stack: ['React', 'Spring Boot', 'Node.js', 'PostgreSQL', 'MongoDB'],
    live: 'https://tomato-shop.duckdns.org/',
    note: 'Project screenshot from an earlier portfolio build. Payments use test mode.',
  },
  {
    name: 'Job Radar AI', category: 'AI-powered', image: '/assets/job-radar.png',
    alt: 'Job Radar AI listings and match scores using sample resume data',
    description: 'Jobs ranked against your resume, AI-powered fit analysis and an application board. A practical tool to bring the job search into one place.',
    stack: ['React', 'TypeScript', 'FastAPI', 'SQLAlchemy', 'Claude API'],
    live: 'https://job-radar-ai-m713.vercel.app/',
    note: 'Sample resume data in screenshot. Live demo needs sign-in and may take time to wake up.',
  },
  {
    name: 'Live Project', category: 'Full Stack', image: '/assets/sessio-home.png',
    gallery: [
      { src: '/assets/sessio-home.png', caption: 'Candidate home page' },
      { src: '/assets/munaf-career.png', caption: 'Expert services page' },
      { src: '/assets/sessio-dashboard.png', caption: 'Seeker dashboard - personal details hidden' },
      { src: '/assets/sessio-categories.png', caption: 'Find by Category - personal details hidden' },
    ],
    alt: 'Candidate-facing pages of the live project: home page, expert services, seeker dashboard and category browsing',
    description: 'A booking and digital-products platform built and delivered for Munaf, a career-guidance creator. On the candidate-facing home page, visitors find an expert, book a 1:1 video call, ask a priority question with a written answer, buy resume templates and interview-prep guides, or subscribe to a monthly all-access membership - with Razorpay payments. Signed-in candidates get a seeker dashboard with their bookings, owned documents, pending answers and memberships in one place, and can browse experts by category.',
    stack: ['React', 'Vite', 'Vercel', 'Render', 'Razorpay'],
    live: 'https://munaf-career.vercel.app/',
    note: 'Screenshots captured from the live site: candidate home page, expert services page, and seeker pages with personal details hidden. Razorpay payments were in test mode at last check.',
  },
];

export const testimonials = [
  {
    "name": "Munaf",
    "role": "Client / Career-guidance platform",
    "photo": "/assets/munaf-portrait.webp",
    "quote": "Tasalimkausar brought my career-guidance platform together in one place, with expert bookings, digital products and a dashboard for candidates. I'm happy with the result and how it presents my services.",
    "projects": [
      {
        "name": "Live Project",
        "type": "Bookings & Digital Products",
        "url": "https://munaf-career.vercel.app/"
      }
    ],
    "contact": "https://wa.me/918485074374?text=Hi+Munaf%2C+I+saw+your+project+on+Tasalimkausar%27s+portfolio+and+would+like+to+ask+about+your+experience."
  }
];

export const pricing = [
  { name: 'Starter', tag: 'For Beginners', price: '\u20B94,999', featured: false, features: ['Responsive single-page website', 'Modern design and animations', 'Contact section'] },
  { name: 'Professional', tag: 'Best Value', price: '\u20B911,999', featured: true, features: ['Multi-page website', 'Smooth scroll and section animations', 'Contact form and backend connection'] },
  { name: 'Elite', tag: 'For Businesses', price: '\u20B921,999', featured: false, features: ['Fully custom website or web app', 'Admin panel to manage content', 'Deployment and domain support'] },
];

export const about = {
  journey: 'I started with curiosity about how websites work. Today I build across responsive React interfaces, backend APIs and databases, and I enjoy connecting those pieces into a product that feels clear and works well. My personal projects explore full-stack development and AI integrations, from food ordering to a more focused job search.',
  problems: [
    ['rocket', 'Slow or outdated websites'],
    ['phone', 'Interfaces that don\u2019t adapt to phones and desktops'],
    ['link', 'Frontends and backends that don\u2019t connect'],
    ['idea', 'Ideas that need a clear, working product'],
  ],
  experience: [
    { period: 'ABOUT 1 YEAR / INDUSTRY EXPERIENCE', title: 'Software development', description: 'React interfaces, JavaScript, Node.js, Express, REST API integration and databases. Hands-on work across frontend and full-stack features.' },
  ],
  education: [
    { period: '2022 - 2024 / POSTGRADUATE', title: 'Master of Computer Applications', description: 'Abhijit Kadam Institute of Management & Social Sciences, Solapur', grade: 'CGPA 8.44' },
    { period: '2018 - 2022 / UNDERGRADUATE', title: 'Bachelor of Computer Applications', description: 'Vasundhara Kala Mahavidyalaya, Solapur', grade: 'CGPA 8.75' },
  ],
  certifications: [
    { title: 'Alpha - DSA with Java', description: 'Completed the Alpha (DSA with Java) course from Apna College, covering data structures and algorithms in Java.', file: '/assets/certificates/alpha-dsa-java-apna-college.pdf' },
    { title: 'MERN Stack', description: 'Completed MERN Stack training (MongoDB, React JS, Express JS, Node JS) at The Kiran Academy, Pune.', file: '/assets/certificates/mern-stack-kiran-academy.pdf' },
  ],
};
