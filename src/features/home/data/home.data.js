import {
  FaBolt,
  FaCode,
  FaSearch,
  FaShieldAlt,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaLayerGroup,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

export const homeData = {
  hero: {
  eyebrow: "Available for freelance projects",

  titleBefore: "I build",
  titleAccent: "premium digital products",
  titleAfter: "that perform beautifully.",

  description:
    "Full Stack Developer helping startups and businesses build responsive, scalable and production-ready web applications.",

  primaryCta: {
    label: "Start a Project",
    path: "/contact",
  },

  secondaryCta: {
    label: "Explore My Work",
    path: "/projects",
  },

  image: "/images/profile/anupam.webp",

  miniStats: [
    {
      value: "Fast",
      label: "Performance",
    },
    {
      value: "100%",
      label: "Responsive",
    },
    {
      value: "SEO",
      label: "Ready",
    },
  ],

  floatingTech: [
    {
      label: "React",
      icon: FaReact,
    },
    {
      label: "Node.js",
      icon: FaNodeJs,
    },
    {
      label: "PostgreSQL",
      icon: SiPostgresql,
    },
  ],
},

  technologies: {
    eyebrow: "My Stack",
    title: "Technologies I use to build modern products.",

    items: [
      { name: "React.js", icon: FaReact },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: FaServer },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },

  projects: {
    eyebrow: "Selected Work",
    title: "Products designed around real business needs.",
    description:
      "A selection of full-stack products focused on performance, clean architecture and user experience.",

    items: [
      {
        id: 1,
        title: "Foodie Delivery Platform",
        slug: "foodie-delivery-platform",
        image: "/images/projects/foodie.webp",
        category: "Full Stack Platform",
        description:
          "Multi-role food delivery system with customers, restaurants, delivery agents and real-time order management.",
        technologies: [
          "React",
          "Node.js",
          "PostgreSQL",
          "Socket.io",
        ],
      },

      {
        id: 2,
        title: "Hospital Management System",
        slug: "hospital-management-system",
        image: "/images/projects/hospital.webp",
        category: "Management System",
        description:
          "Complete healthcare management application with admin and doctor workflows.",
        technologies: [
          "React",
          "Node.js",
          "Database",
        ],
      },

      {
        id: 3,
        title: "Developer Portfolio Platform",
        slug: "developer-portfolio",
        image: "/images/projects/portfolio.webp",
        category: "Portfolio Platform",
        description:
          "Dynamic freelancer portfolio with lead management, SEO and admin control.",
        technologies: [
          "React",
          "Redux",
          "PostgreSQL",
        ],
      },
    ],
  },

  about: {
  eyebrow: "About Me",

  titleBefore: "I build",
  titleAccent: "useful digital products",
  titleAfter: "not just lines of code.",

  description:
    "I'm a Full Stack Developer focused on building clean, responsive and production-ready web applications. I combine modern frontend experiences with scalable backend systems to turn business ideas into practical digital products.",

  image: "/images/profile/anupam-about.webp",

  imageAlt: "Anupam - Full Stack Developer",

  highlight: {
    value: "Full Stack",
    label: "Frontend + Backend",
  },

  points: [
    "Responsive UI",
    "Clean Architecture",
    "Scalable Backend",
    "Performance Focused",
  ],

  cta: {
    label: "More About Me",
    path: "/about",
  },
},

  services: {
    eyebrow: "Services",
    title: "Development services built around your business.",
    description:
      "From frontend experiences to secure backend systems, I build complete solutions.",

    items: [
      {
        title: "Web Application Development",
        description:
          "Responsive and modern web applications built around real business workflows.",
        icon: FaLayerGroup,
      },

      {
        title: "Backend Development",
        description:
          "Clean, secure and optimized APIs using Node.js, Express and PostgreSQL.",
        icon: FaServer,
      },

      {
        title: "Database Architecture",
        description:
          "Structured relational databases with optimized queries and indexing.",
        icon: FaDatabase,
      },

      {
        title: "Performance Optimization",
        description:
          "Frontend and backend performance improvements for faster applications.",
        icon: FaBolt,
      },
    ],
  },

  benefits: {
    eyebrow: "Why Work With Me",

    title: "Built with the details that matter.",

    items: [
      {
        title: "Responsive",
        description: "Optimized across mobile, tablet and desktop.",
        icon: FaMobileAlt,
      },

      {
        title: "SEO Ready",
        description: "Structured to support better search visibility.",
        icon: FaSearch,
      },

      {
        title: "Secure",
        description: "Security-first backend and API architecture.",
        icon: FaShieldAlt,
      },

      {
        title: "Clean Code",
        description: "Reusable and scalable project structure.",
        icon: FaCode,
      },
    ],
  },

process: {
  eyebrow: "My Process",

  title: "A structured journey from idea to production.",

  items: [
    {
      number: "01",
      title: "Discover",
      description:
        "Understand requirements, users and business goals.",
    },

    {
      number: "02",
      title: "Plan",
      description:
        "Design architecture, database and development flow.",
    },

    {
      number: "03",
      title: "Build",
      description:
        "Develop frontend and backend with clean architecture.",
    },

    {
      number: "04",
      title: "Test",
      description:
        "Test responsiveness, performance and functionality.",
    },

    {
      number: "05",
      title: "Launch",
      description:
        "Deploy and prepare the product for real users.",
    },
  ],
},

  caseStudies: {
    eyebrow: "Case Studies",
    title: "The thinking behind the products.",

    items: [
      {
        title:
          "Building a scalable food delivery architecture",
        slug:
          "scalable-food-delivery-architecture",
        image:
          "/images/case-studies/foodie-case.webp",
        category:
          "System Architecture",
      },

      {
        title:
          "Designing a production-ready Node.js backend",
        slug:
          "production-ready-node-backend",
        image:
          "/images/case-studies/backend-case.webp",
        category:
          "Backend Engineering",
      },
    ],
  },

  testimonials: {
    eyebrow: "Testimonials",
    title: "What people say about working with me.",

    items: [
      {
        quote:
          "A structured approach to development with strong attention to frontend and backend quality.",
        name: "Client Name",
        role: "Business Owner",
        image:
          "/images/testimonials/client-1.webp",
      },

      {
        quote:
          "Clear communication, clean implementation and a professional development process.",
        name: "Client Name",
        role: "Founder",
        image:
          "/images/testimonials/client-2.webp",
      },
    ],
  },

  blogs: {
    eyebrow: "Latest Insights",
    title: "Thoughts on building better web products.",
    description:
      "Practical development articles around frontend, backend, databases and performance.",

    items: [
      {
        title:
          "How to Structure a Production-Ready Node.js Backend",
        slug:
          "production-ready-nodejs-backend",
        category:
          "Backend",
        image:
          "/images/blog/node-backend.webp",
        readTime:
          "6 min read",
      },

      {
        title:
          "React Performance Techniques for Faster Applications",
        slug:
          "react-performance-techniques",
        category:
          "React",
        image:
          "/images/blog/react-performance.webp",
        readTime:
          "5 min read",
      },

      {
        title:
          "PostgreSQL Optimization for Web Applications",
        slug:
          "postgresql-web-performance",
        category:
          "Database",
        image:
          "/images/blog/postgresql.webp",
        readTime:
          "7 min read",
      },
    ],
  },

  cta: {
    eyebrow: "Have a project in mind?",
    title:
      "Let's turn your idea into a product people enjoy using.",
    description:
      "Tell me about your business, idea or existing product and let's build something fast, scalable and professional.",

    primary: {
      label: "Start Your Project",
      path: "/contact",
    },

    secondary: {
      label: "View Projects",
      path: "/projects",
    },
  },
  benefits: {
    eyebrow: "Why Work With Me",

    title: "Built with the details that matter.",

    items: [
      {
        title: "Responsive",
        description: "Optimized across mobile, tablet and desktop.",
        icon: FaMobileAlt,
      },

      {
        title: "SEO Ready",
        description: "Structured to support better search visibility.",
        icon: FaSearch,
      },

      {
        title: "Secure",
        description: "Security-first backend and API architecture.",
        icon: FaShieldAlt,
      },

      {
        title: "Clean Code",
        description: "Reusable, maintainable and scalable project structure.",
        icon: FaCode,
      },
    ],
  },
};

