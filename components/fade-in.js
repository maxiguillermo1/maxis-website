import { motion, useReducedMotion } from 'framer-motion'

// FadeIn
// A gentle on-scroll reveal: soft upward drift + opacity. Honors
// prefers-reduced-motion by rendering instantly with no transform.
const FadeIn = ({ children, delay = 0, y = 14, ...props }) => {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) {
    return <div {...props}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
