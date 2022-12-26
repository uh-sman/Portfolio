import React from "react";
import RepositoriesCard from "./RepositoriesCard";
import "animate.css";
import "./projects.css";
const Projects = () => {
  return (
    <div>
      <div className="about-section">
        <div className="about-card">
          <div className="about-button">
            <button className="btn1">Work WITH ME</button>
            <button className="btn2">WEB CV</button>
          </div>
        </div>
        <div>
          <RepositoriesCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
