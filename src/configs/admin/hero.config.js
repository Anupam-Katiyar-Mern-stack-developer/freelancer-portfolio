export const heroFormFields = [
  {
    name: "badge",
    label: "Badge Text",
    type: "text",
    placeholder: "Available for freelance & job opportunities",
    required: true,
    fullWidth: true,
  },

  {
    name: "intro",
    label: "Intro Text",
    type: "text",
    placeholder: "Hi, I'm",
    required: true,
  },

  {
    name: "heading",
    label: "Main Heading",
    type: "text",
    placeholder: "I build digital products",
    required: true,
  },

  {
    name: "highlight",
    label: "Highlighted Text",
    type: "text",
    placeholder: "that feel fast, scale well & create impact.",
    required: true,
    fullWidth: true,
  },

  {
    name: "description",
    label: "Description",
    type: "textarea",
    placeholder:
      "Write a short introduction about your development work...",
    required: true,
    rows: 4,
    fullWidth: true,
  },

  {
    name: "roles",
    label: "Developer Roles",
    type: "textarea",
    placeholder:
      "Full Stack Developer\nMERN Developer\nBackend Developer\nFreelance Developer",
    required: true,
    rows: 5,
    fullWidth: true,
    helperText:
      "Enter one role per line. These roles are used by the Hero text animation.",
  },

  {
    name: "primaryButton",
    label: "Primary Button Text",
    type: "text",
    placeholder: "Explore My Work",
    required: true,
  },

  {
    name: "primaryLink",
    label: "Primary Button Link",
    type: "text",
    placeholder: "#projects",
    required: true,
  },

  {
    name: "secondaryButton",
    label: "Secondary Button Text",
    type: "text",
    placeholder: "Let's Work Together",
    required: true,
  },

  {
    name: "secondaryLink",
    label: "Secondary Button Link",
    type: "text",
    placeholder: "#contact",
    required: true,
  },
];


/* =========================================
   API HERO → ADMIN FORM

   API:
   roles: [
     "Full Stack Developer",
     "MERN Developer"
   ]

   Form:
   roles:
   Full Stack Developer
   MERN Developer
========================================= */

export const mapHeroToFormValues = (
  hero
) => {
  if (!hero) {
    return {};
  }

  return {
    ...hero,

    roles: Array.isArray(hero.roles)
      ? hero.roles.join("\n")
      : "",
  };
};


/* =========================================
   ADMIN FORM → API PAYLOAD

   Form textarea:
   Full Stack Developer
   MERN Developer

   API payload:
   roles: [
     "Full Stack Developer",
     "MERN Developer"
   ]
========================================= */

export const mapHeroFormToPayload = (
  values
) => {
  return {
    ...values,

    roles: String(
      values.roles || ""
    )
      .split("\n")
      .map((role) => role.trim())
      .filter(Boolean),
  };
};