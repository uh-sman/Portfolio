import React from "react";
import "./repositories.css";

import hand from "../assets/hand-right.png";
import { repositories } from "./repositories";
const RepositoriesCard = () => {
  return (
    <div>
      <div className="card-container">
        {repositories.map(({ id, title, link }) => {
          return (
            <div className="card-content" key={id}>
              <h3>{title}</h3>
              <a href={link}>
                View
                <img src={hand} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RepositoriesCard;
