import React, { useState } from "react";
import logo from "../assets/ico.png";
import "./navbar.css";
import { Profile } from "./Profile";
export const Navbar = () => {
  const [active, isActive] = useState(false);
  const activeLink = document.querySelector("nav-list");
  // activeLink.addEventListener()
  return (
    <div>
      <nav className="navbar-container">
        <div className="navbar">
          <div className="navbar-nav">
            <div>
              <a>
                <img src={logo} className="logo" />
              </a>
            </div>
            <ul className="nav-list">
              <button className="btn">
                <a href="">About</a>
              </button>
              <button className="btn">
                <a href="">Projects</a>
              </button>
              <button className="btn">
                <a href="">Services</a>
              </button>
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
