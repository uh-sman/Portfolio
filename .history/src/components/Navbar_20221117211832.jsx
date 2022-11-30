import React from "react";
import logo from "../assets/ico.png";
import "./navbar.css";
import { Profile } from "./Profile";
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar-container">
        <div className="navbar">
          <div>
            <ul className="nav-list">
              <a>
                <img src={logo} className="logo" />
              </a>
              <a href="">About</a>
              <a href="">Projects</a>
              <a href="">Services</a>
            </ul>
          </div>
          <div>
            <Profile />
          </div>
        </div>
      </nav>
    </div>
  );
};
