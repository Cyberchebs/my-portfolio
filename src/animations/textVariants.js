export const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Variants for each skill item
export const itemVariants = {
  hidden: { opacity: 0, y: -30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.7,
      duration: 0.9,
    },
  },
};

export const boxVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.7,
    },
  },
};

// Each card animation
export const cardVariants = {
  hidden: {
    opacity: 0,
    rotateY: 90,
  },
  show: {
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
