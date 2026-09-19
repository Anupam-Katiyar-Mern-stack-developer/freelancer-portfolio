export const animations = {
  fadeUp: {
    hidden: {
      opacity: 0,
      y: 28,
    },

    visible: {
      opacity: 1,
      y: 0,
    },
  },

  fadeIn: {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
    },
  },

  scaleIn: {
    hidden: {
      opacity: 0,
      scale: 0.94,
    },

    visible: {
      opacity: 1,
      scale: 1,
    },
  },

  slideLeft: {
    hidden: {
      opacity: 0,
      x: -30,
    },

    visible: {
      opacity: 1,
      x: 0,
    },
  },

  slideRight: {
    hidden: {
      opacity: 0,
      x: 30,
    },

    visible: {
      opacity: 1,
      x: 0,
    },
  },

  staggerContainer: {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  },

  staggerItem: {
    hidden: {
      opacity: 0,
      y: 20,
    },

    visible: {
      opacity: 1,
      y: 0,
    },
  },
};

export const animationTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
};

export const floatAnimation = {
  animate: {
    y: [0, -8, 0],
  },

  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};