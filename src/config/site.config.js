import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

export const SITE = {
  brand: {
    name: "ANUPAM",
    suffix: ".",
  },

  navLinks: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Blog", path: "/blog" },
  ],

  navbarCta: {
    label: "Let's Talk",
    path: "/contact",
  },

  contact: {
    email: "your-email@example.com",
    phone: "+91 XXXXX XXXXX",
    location: "Kanpur, Uttar Pradesh, India",
  },

  socials: [
    {
      label: "LinkedIn",
      href: "#",
      icon: FaLinkedinIn,
    },
    {
      label: "GitHub",
      href: "#",
      icon: FaGithub,
    },
    {
      label: "Instagram",
      href: "#",
      icon: FaInstagram,
    },
    {
      label: "Email",
      href: "mailto:your-email@example.com",
      icon: FaEnvelope,
    },
  ],

  footerProjects: [
    {
      name: "Foodie Delivery Platform",
      slug: "foodie-delivery-platform",
    },
    {
      name: "Hospital Management System",
      slug: "hospital-management-system",
    },
    {
      name: "Netflix Clone",
      slug: "netflix-clone",
    },
    {
      name: "Developer Portfolio",
      slug: "developer-portfolio",
    },
  ],
};