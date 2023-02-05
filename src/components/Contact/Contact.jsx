import { motion as m } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const Contact = () => {
  return (
    <m.section
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="contact"
    >
      <m.h2 variants={variants}>Contact Me</m.h2>
      <m.div variants={variants} className="contact__list">
        <m.div variants={variants} className="contact__email">
          <i className="fas fa-envelope" />
          Email
          <p>email@email.com</p>
        </m.div>
        <m.div variants={variants} className="contact__phone">
          <i className="fas fa-mobile-alt" />
          Phone
          <p>+1(555)5555555</p>
        </m.div>
        <m.div variants={variants} className="contact__address">
          <i className="fa-solid fa-location-dot" />
          Address
          <p>123 First St. Houston, TX</p>
        </m.div>
      </m.div>
    </m.section>
  );
};

export default Contact;
