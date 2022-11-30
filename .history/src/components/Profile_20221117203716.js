import React from "react";
import { SiFacebook } from "react-icons/si";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";
import "./profile.css";
export const Profile = () => {
  return (
    <div>
      <div>
        <section className="profile-section">
          <button>
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
      </div>
    </div>
  );
};
