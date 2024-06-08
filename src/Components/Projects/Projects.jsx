import React from "react";
import { projects } from "../../utils/profile";

const Projects = () => {
  const statusName = (status) => {
    const allStatus = {
      Completed: "completed",
      "In Progress": "in-progress",
      Pending: "pending",
    };

    return allStatus[status];
  };

  return (
    <section className="projects--container">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className={`project__card glass-effect ${
                project.isHighlight && "highlight"
              }`}
            >
              <img src={project.banner} alt="banner" />
              <div className="project__card-description">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p
                  className={`status glass-effect ${statusName(
                    project.status
                  )} ${project.isHighlight && "highlight"}`}
                >
                  {project.status}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
