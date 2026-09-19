import {
  FaBolt,
  FaDatabase,
  FaLayerGroup,
  FaServer,
  FaSearch,
  FaBug,
} from "react-icons/fa";

export const servicesData = {
  hero: {
    eyebrow: "Services",
    title: "Solutions built around",
    accent: "your business.",
    description:
      "Frontend, backend and complete full-stack development services focused on performance, scalability and clean architecture.",
  },

  items: [
    {
      title: "Full Stack Development",
      description:
        "Complete web applications from responsive frontend to production-ready backend.",
      icon: FaLayerGroup,
    },

    {
      title: "Backend Development",
      description:
        "Secure REST APIs, authentication, PostgreSQL databases and scalable Node.js architecture.",
      icon: FaServer,
    },

    {
      title: "Database Development",
      description:
        "Relational database design, query optimization, indexing and clean data architecture.",
      icon: FaDatabase,
    },

    {
      title: "Performance Optimization",
      description:
        "Improve frontend loading, API response time and database performance.",
      icon: FaBolt,
    },

    {
      title: "SEO-Friendly Websites",
      description:
        "Technical SEO structure, clean URLs, metadata and performance optimization.",
      icon: FaSearch,
    },

    {
      title: "Bug Fixing & Improvements",
      description:
        "Fix existing React, Node.js, PHP and database issues and improve existing products.",
      icon: FaBug,
    },
  ],
};