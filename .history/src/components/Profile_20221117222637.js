import React, { useState } from "react";
import { SiFacebook } from "react-icons/si";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";
import burger from "../assets/burger-menu.png";
import close from "../assets/close.png";
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
              <img
                className="close"
                src={close}
                onClick={() => setIsActive(!isActive)}
              />
            </div>
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
