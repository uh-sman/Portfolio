import React from "react";
import logo from "../assets/icons.png";
import "./navbar.css";
export const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <ul className="nav-list">
            <a>
              <img src={logo} />
            </a>
            <a href="">About</a>
            <a href="">Projects</a>
            <a href="">Services</a>
          </ul>
        </div>
      </nav>
    </div>
  );
};
