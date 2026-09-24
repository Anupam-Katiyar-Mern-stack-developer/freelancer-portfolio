import {
  FiGrid,
  FiHome,
  FiUser,
  FiLayers,
  FiBriefcase,
  FiFolder,
  FiHelpCircle,
  FiEdit3,
  FiUsers,
  FiMessageSquare,
  FiSettings,
} from "react-icons/fi";

export const adminNavigation = [
  {
    group: "Overview",
    items: [
      {
        label: "Dashboard",
        path: "/admin",
        icon: FiGrid,
        end: true,
      },
    ],
  },

  {
    group: "Content",
    items: [
      {
        label: "Hero",
        path: "/admin/hero",
        icon: FiHome,
      },
      {
        label: "About",
        path: "/admin/about",
        icon: FiUser,
      },
      {
        label: "Skills",
        path: "/admin/skills",
        icon: FiLayers,
      },
      {
        label: "Services",
        path: "/admin/services",
        icon: FiBriefcase,
      },
      {
        label: "Projects",
        path: "/admin/projects",
        icon: FiFolder,
      },
      {
        label: "FAQs",
        path: "/admin/faqs",
        icon: FiHelpCircle,
      },
      {
        label: "Blogs",
        path: "/admin/blogs",
        icon: FiEdit3,
      },
    ],
  },

  {
    group: "Business",
    items: [
      {
        label: "Leads",
        path: "/admin/leads",
        icon: FiUsers,
      },
      {
        label: "Reviews",
        path: "/admin/reviews",
        icon: FiMessageSquare,
      },
    ],
  },

  {
    group: "System",
    items: [
      {
        label: "Settings",
        path: "/admin/settings",
        icon: FiSettings,
      },
    ],
  },
];