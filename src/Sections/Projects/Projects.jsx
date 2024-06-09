import React from "react";
import { projects } from "../../utils/profile";
import { ProjectCard } from "../../Components";

const Projects = () => {
  return (
    <section className="projects--container">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};

export { Projects };
