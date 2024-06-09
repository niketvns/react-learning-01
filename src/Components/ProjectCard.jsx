import React from "react";

// Functional Component -> 2019 react 15 version
const ProjectCard = ({ project }) => {
  const statusName = (status) => {
    const allStatus = {
      Completed: "completed",
      "In Progress": "in-progress",
      Pending: "pending",
    };

    return allStatus[status];
  };

  return (
    <div
      className={`project__card glass-effect ${
        project.isHighlight && "highlight"
      }`}
      style={{ backgroundColor: project.bgColor }}
    >
      <img src={project.banner} alt="banner" />
      <div className="project__card-description">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <p
          className={`status glass-effect ${statusName(project.status)} ${
            project.isHighlight && "highlight"
          }`}
        >
          {project.status}
        </p>
      </div>
    </div>
  );
};

export { ProjectCard };
