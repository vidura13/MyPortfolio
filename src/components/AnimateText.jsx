import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const roles = [
  'Frontend Developer',
  'Full Stack Engineer',
  'Web Developer',
];

const AnimateText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="block"
    >
      {roles[index]}
    </motion.span>
  );
};

export default AnimateText;