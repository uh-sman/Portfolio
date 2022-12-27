import React, { useState } from "react";
import { SiFacebook } from "react-icons/si";
import { FaWhatsapp, FaFacebook, FaRegWindowClose } from "react-icons/fa";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { NavLink, Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import burger from "../assets/burger-menu.png";
import close from "../assets/icons8.png";

import "animate.css";
import "./profile.css";
export const Profile = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndexChange = {};
  // const name = "usman";
  // const lastName = "umar";
  // if (name != name) {
  //   console.log("the name is incorrect");
  // } else {
  //   console.log("correct");
  // }
  return (
    <div>
      <div>
        <section className="profile-section ">
          <button className="button">
            <a href="https://github.com/uh-sman">Github</a>
          </button>
          <Link to="/contact" className="contact">
            Contact
          </Link>
          <a>
            <BsInstagram />
          </a>
          <a href="https://twitter.com/home">
            <TiSocialTwitterCircular className="twitter" />
          </a>
          <a>
            <FaFacebook />
          </a>
        </section>
        {isActive ? (
          <div className="sidebar-container">
            <div>
              <FaRegWindowClose
                className="close"
                onClick={() => setIsActive(!isActive)}
              />
              {/* <img src={close} /> */}
            </div>
            <section className="sidebar-section ">
              <ul className="links">
                <NavLink to="/">
                  <a href="">About</a>
                </NavLink>
                <NavLink to="/projects">
                  <a href="">Projects</a>
                </NavLink>
                <NavLink to="/services">
                  <a href="">Services</a>
                </NavLink>
                <button className="button">
                  <a href="https://github.com/uh-sman" className="link">
                    Github
                  </a>
                </button>
                <Link to="/contact">Contact</Link>
              </ul>
              <ul className="link-icons">
                <a>
                  <BsInstagram className="instagram" />
                </a>
                <a>
                  <TiSocialTwitterCircular className="twitter" />
                </a>
                <a>
                  <FaFacebook className="facebook" />
                </a>
              </ul>
            </section>
          </div>
        ) : (
          <div>
            <img
              src={burger}
              className="burger-menu"
              onClick={() => setIsActive(!isActive)}
            />
          </div>
        )}
      </div>
    </div>
  );
};
