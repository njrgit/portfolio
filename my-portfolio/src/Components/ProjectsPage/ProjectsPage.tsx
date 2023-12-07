import { ProjectHistory } from "../../Data/project_history";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  const projectHistory = ProjectHistory.map((project, index) => {
    return (
      <div key={index}>
        <div className="individual-project-container">
          <h1 className="project-title">{project.ProjectName}</h1>
          <img className="project-image" src={project.ImageName} alt="" />
          <p className="project-description">{project.ProjectDescription}</p>
          <div className="project-button-group">
            <button className="project-button">
              <a href={project.LiveUrl}>Live</a>
            </button>
            <button className="project-button">
              <a href={project.CodeUrl}>
                Code
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  });

    return <div className="projects-container">{projectHistory}</div>;
};

export default ProjectsPage;
