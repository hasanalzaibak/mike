import a from "../../assets/project-1.jpg";
import b from "../../assets/project-2.jpg";
import c from "../../assets/project-3.jpg";
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

const Projects = () => {
  return (
    <m.section
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="projects"
    >
      <m.div variants={variants} className="projects__image">
        <m.h2 variants={variants}>My Projects</m.h2>
        <m.p variants={variants}>
          Literature admiration frequently indulgence announcing are who you
          her. Was least quick after six. So it yourself repeated together
          cheerful.
        </m.p>
      </m.div>
      <div className="projects__links">
        <m.div variants={variants} className="projects__links-link">
          <img src={a} />
          <div className="projects__links-link__btns">
            <a className="btn" href="#!">
              <i className="fas fa-eye" />
              Preview
            </a>
            <a className="btn" href="#!">
              <i className="fab fa-github" />
              GitHub
            </a>
          </div>
        </m.div>
        <m.div variants={variants} className="projects__links-link">
          <img src={b} />
          <div className="projects__links-link__btns">
            <a className="btn" href="#!">
              <i className="fas fa-eye" />
              Preview
            </a>
            <a className="btn" href="#!">
              <i className="fab fa-github" />
              GitHub
            </a>
          </div>
        </m.div>
        <m.div variants={variants} className="projects__links-link">
          <img src={c} />
          <div className="projects__links-link__btns">
            <a className="btn" href="#!">
              <i className="fas fa-eye" />
              Preview
            </a>
            <a className="btn" href="#!">
              <i className="fab fa-github" />
              GitHub
            </a>
          </div>
        </m.div>
      </div>
    </m.section>
  );
};

export default Projects;
