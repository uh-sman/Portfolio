import React from "react";
import { repositories } from "./repositories";
const RepositoriesCard = () => {
  return (
    <div>
      <div>
        {repositories.map(({ id, title, link }) => {
          return (
            <div key={id}>
              <h3>{title}</h3>
              <a>{link}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RepositoriesCard;
