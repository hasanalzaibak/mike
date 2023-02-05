import { motion as m } from "framer-motion";
import background from "../../assets/bg-2.jpg";

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

const About = () => {
  return (
    <m.section
      className="about"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <m.div variants={variants} className="about__image">
        <img src={background} />
        <m.h2 variants={variants}>BIO</m.h2>
        <m.p variants={variants}>
          Literature admiration frequently indulgence announcing are who you
          her. Was least quick after six. So it yourself repeated together
          cheerful.
        </m.p>
      </m.div>
      <div className="about__jobs">
        <m.div variants={variants} className="about__jobs-job">
          <h2>2011 - 2014</h2>
          <h3>Apple</h3>
          <h6>Web Designer</h6>
          <p>
            Endeavor bachelor but add eat pleasure doubtful sociable. Age
            forming covered you entered the examine. Blessing scarcely confined.
          </p>
        </m.div>
        <m.div variants={variants} className="about__jobs-job">
          <h2>2014 - 2017</h2>
          <h3>Microsoft</h3>
          <h6>Frontend Developer</h6>
          <p>
            Endeavor bachelor but add eat pleasure doubtful sociable. Age
            forming covered you entered the examine. Age forming covered you
            entered the examine.
          </p>
        </m.div>
        <m.div variants={variants} className="about__jobs-job">
          <h2>2017 - Current</h2>
          <h3>Google</h3>
          <h6>Full Stack Developer</h6>
          <p>
            Endeavor bachelor but add eat pleasure doubtful sociable. Age
            forming covered you entered the examine.
          </p>
        </m.div>
      </div>
    </m.section>
  );
};

export default About;
