import React from "react";
import "./about.css";
import RepositoriesCard from "./RepositoriesCard";
const About = () => {
  return (
    <div>
      <div className="about-section">
        <div className="introduction">
          <h2>Hello</h2>
          <h4>UMAR USMAN</h4>
        </div>
        <div>
          <button>Work WITH ME</button>
          <button>WEB CV</button>
        </div>
        <div>
          <RepositoriesCard />
        </div>
      </div>
    </div>
  );
};

export default About;
