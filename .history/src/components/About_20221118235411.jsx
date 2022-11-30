import React from "react";
import monitor from "../assets/monitor.png";
import "./about.css";
import RepositoriesCard from "./RepositoriesCard";
const About = () => {
  return (
    <div>
      <div className="about">
        <div className="introduction">
          <h2>Hello,</h2>
          <h4>Am UMAR USMAN</h4>
        </div>
        <div className="about-myself">
          <p className="text">
            I'm Umar Usman, a cola lover, 22-year-old front-end web developer
            {""}
            {/* <img src={monitor} className="computer-image" /> */}
            with a solid and strong self taught educational background in
            Information Technology (I.C.T). I work as a freelancer. Now in
            Ilorin, Kwarar State, Nigeria. But work remotely for international
            clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
