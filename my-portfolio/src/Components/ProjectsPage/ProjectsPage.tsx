import { ProjectHistory } from "../../Data/project_history";
import ErrorPage from "../ErrorPage/ErrorPage";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  // const projectHistory = ProjectHistory.map((project, index) => {
  //   return (
  //     <div key={index}>
  //       <div className="individual-project-container">
  //         <h1 className="project-title">{project.ProjectName}</h1>
  //         <img className="project-image" src={project.ImageName} alt="" />
  //         <p className="project-description">{project.ProjectDescription}</p>
  //         <div className="project-button-group">
  //           <button className="project-button">
  //             <a href={project.LiveUrl}>Live</a>
  //           </button>
  //           <button className="project-button">
  //             <a href={project.CodeUrl}>
  //               Code
  //             </a>
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // });

  //   return <div className="projects-container">{projectHistory}</div>;

  return (
    <div className="errorMessageDiv">
      <div className="errorContent">
        <h1>Under construction, please bear with us until we're ready</h1>
        <h1>👷</h1>
        <h2 style={{ textAlign: "center" }}>
          In the meantime, you can visit my github page below for previous personal
          projects that I have done and new ones that I am currently embarking
          on.
        </h2>
        <a href="https://github.com/njrgit">
          <img src="github.png" alt="github" />
        </a>
      </div>
    </div>
  );
};

export default ProjectsPage;
