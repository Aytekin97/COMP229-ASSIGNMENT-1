// components/Projects.js
import React from 'react';

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project">
        <img src="/project1.jpg" alt="Project 1" />
        <h2>Project Title 1</h2>
        <p>Role: Developer | Outcome: Successfully launched a responsive web application.</p>
      </div>
      {/* Repeat for Project 2 and Project 3 */}
    </div>
  );
}

export default Projects;