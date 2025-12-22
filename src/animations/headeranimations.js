export const headerAnimations = {
  profileImage: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  },
  
  linesGif: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
  },
  
  infoBox: {
    initial: { 
      width: "2px",
      height: "80px",
      padding: 0,
      opacity: 0.8
    },
    expanded: {
      width: "300px",
      height: "100px",
      padding: "0.5rem",
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  },
  
  timing: {
    imagesFadeInDelay: 1000
  }
};