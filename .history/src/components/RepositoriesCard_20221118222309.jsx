import React from "react";
import "./repositories.css";
import { FaRegHandPointRight } from "react-icons/fa";
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
                <FaRegHandPointRight className="icon-right" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RepositoriesCard;
