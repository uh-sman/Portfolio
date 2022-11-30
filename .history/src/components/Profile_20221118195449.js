import React, { useState } from "react";
import { SiFacebook } from "react-icons/si";
import { FaWhatsapp, FaFacebook, FaRegWindowClose } from "react-icons/fa";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import burger from "../assets/burger-menu.png";
import close from "../assets/icons8.png";

import "animate.css";
import "./profile.css";
export const Profile = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div>
        <section className="profile-section ">
          <button className="button">
            <a>Github</a>
          </button>
          <a>Contact</a>
          <a>
            <BsInstagram />
          </a>
          <a>
            <TiSocialTwitterCircular />
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
                <Link to="/">
                  <a href="">About</a>
                </Link>
                <Link to="/projects">
                  <a href="">Projects</a>
                </Link>
                <Link to="/services">
                  <a href="">Services</a>
                </Link>
                <button className="button">
                  <a className="link">Github</a>
                </button>
                <a>Contact</a>
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
