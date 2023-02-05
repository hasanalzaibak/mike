import { motion as m } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.7,
    },
  },
};

const Main = () => {
  return (
    <m.main
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <m.section variants={variants}>
        <m.h2 variants={variants}>Hello! My name is</m.h2>
        <m.h1 variants={variants}>
          Mike <m.span variants={variants}>Smith</m.span>
        </m.h1>
        <m.h2 variants={variants}>Web Developer, Designer & Programmer</m.h2>
      </m.section>
    </m.main>
  );
};

export default Main;
