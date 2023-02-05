import { motion as m } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const Footer = () => {
  return (
    <m.footer
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div>
        <a href="#">
          <i className="fab fa-twitter fa-2x" />
        </a>
        <a href="#">
          <i className="fab fa-instagram fa-2x" />
        </a>
        <a href="#">
          <i className="fab fa-github fa-2x" />
        </a>
      </div>
      <p>&copy; Copyrights 2023</p>
    </m.footer>
  );
};

export default Footer;
