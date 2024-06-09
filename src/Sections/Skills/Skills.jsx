import React from "react";
import { skills } from "../../utils/profile";

// We cannot export default a functional components in the same line using arrow functin
const Skills = () => {
  return (
    <section className="skills--container">
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((skill) => {
          return (
            <span
              key={skill.id}
              className={`skill__card glass-effect ${
                skill.isHighlight && "highlight"
              }`}
            >
              {skill.name}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export { Skills };
