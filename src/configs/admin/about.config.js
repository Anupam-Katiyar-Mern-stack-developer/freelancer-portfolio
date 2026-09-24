export const homeAboutFormFields = [
  {
    name: "eyebrow",
    label: "Eyebrow",
    type: "text",
    placeholder: "About Me",
    required: true,
  },

  {
    name: "heading",
    label: "Heading",
    type: "text",
    placeholder: "I turn ideas into",
    required: true,
  },

  {
    name: "highlight",
    label: "Highlighted Text",
    type: "text",
    placeholder: "reliable digital products.",
    required: true,
  },

  {
    name: "availability",
    label: "Availability",
    type: "text",
    placeholder:
      "Open to freelance projects & job opportunities",
    required: true,
  },

  {
    name: "description",
    label: "Description",
    type: "textarea",
    rows: 4,
    required: true,
    fullWidth: true,
  },

  {
    name: "secondDescription",
    label: "Second Description",
    type: "textarea",
    rows: 4,
    required: true,
    fullWidth: true,
  },

  {
    name: "ctaLink",
    label: "Projects CTA Link",
    type: "text",
    placeholder: "#projects",
    required: true,
    fullWidth: true,
    helperText:
      "Only the destination is editable. The visible CTA text stays unchanged.",
  },
];


export const homeAboutHighlightFields = [
  {
    name: "text",
    label: "Highlight",
    type: "text",
    placeholder:
      "Production-ready applications",
    required: true,
    fullWidth: true,
  },
];


export const homeAboutHighlightColumns = [
  {
    key: "text",
    label: "Highlight",
    nowrap: false,
  },
];


export const homeAboutStatFields = [
  {
    name: "value",
    label: "Value",
    type: "text",
    placeholder: "10+",
    required: true,
  },

  {
    name: "label",
    label: "Label",
    type: "text",
    placeholder: "Projects Built",
    required: true,
  },
];


export const homeAboutStatColumns = [
  {
    key: "value",
    label: "Value",
  },

  {
    key: "label",
    label: "Label",
  },
];

export const aboutAdminTabs = [
  {
    id: "home",
    label: "Home About",
  },

  {
    id: "hero",
    label: "About Hero",
  },

  {
    id: "journey",
    label: "Journey",
  },

  {
    id: "work",
    label: "What I Do",
  },

  {
    id: "career",
    label: "Career",
  },

  {
    id: "process",
    label: "Work Process",
  },
];