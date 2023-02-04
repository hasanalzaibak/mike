import a from "../../assets/project-1.jpg";
import b from "../../assets/project-2.jpg";
import c from "../../assets/project-3.jpg";

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects__image">
        <h2>My Projects</h2>
        <p>
          Literature admiration frequently indulgence announcing are who you
          her. Was least quick after six. So it yourself repeated together
          cheerful.
        </p>
      </div>
      <div className="projects__links">
        <div className="projects__links-link">
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
        </div>
        <div className="projects__links-link">
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
        </div>
        <div className="projects__links-link">
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
