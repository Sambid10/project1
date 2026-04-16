import { Variants } from 'framer-motion'
export const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
}

export const anim1: Variants = {
  hidden: {
    opacity: 0,
    y: 5,
    filter: "blur(3px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
}

export const anim2: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    filter: "blur(5px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
      ease: [0.64, 0, 0.78, 0]
    }
  }
}