import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
const roles = ["Full Stack Engineer", "AI & ML Engineer", "Web Developer"];
export default function AnimateText() {
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(
      () => setIndex((previous) => (previous + 1) % roles.length),
      4000,
    );
    return () => clearInterval(interval);
  }, [reducedMotion]);
  return (
    <>
      <span className="sr-only">
        Full Stack Engineer, AI & ML Engineer,Web Developer
      </span>
      <span key={index} className="animated-role" aria-hidden="true">
        {roles[index]}
      </span>
    </>
  );
}
