import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div className="Footer-container">
      <div className="Footer-social">
        <p>Seguinos en nuestras redes sociales:</p>
        <div className="social-icons">
          <a href="https://www.instagram.com">
            <FaInstagram className="IG" />
          </a>
          <a href="https://www.facebook.com">
            <FaFacebook className="FB" />
          </a>
        </div>
      </div>
      <div className="Footer-contact">
        <a
          href="https://api.whatsapp.com/send?phone=5491151180872"
          className="Footer-wsp"
        >
          <FaWhatsapp className="WSP" />
          <p>11 5118-0872</p>
        </a>
        <a href="mailto:infoduror@gmail.com" className="Footer-mail">
          <FaEnvelope className="envelope" />
          <p>infoduror@gmail.com</p>
        </a>
        <div className="Footer-direction">
          <FaMapMarkerAlt className="location" />
          <p>Pasaje Belgrado 3180, CABA</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
