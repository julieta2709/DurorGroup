import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import "../Styles/Footer.css";
import "../Styles/Contact-data.css";

const ContactData = ({ render }) => {
  return (
    <div
      className={render === "footer" ? "Footer-container" : "Contact-container"}
    >
      <div className="social">
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
      <div className="contact-data">
        <div className="wsp-container">
          <a
            href="https://api.whatsapp.com/send?phone=5491151180872"
            className="wsp"
          >
            <FaWhatsapp className="wsp-icon" />
          </a>
          <div className="wsp-numberContainer">
            <p className="wsp-number">11 5118-0872</p>
            <p className="wsp-numberS">11 3244-2237</p>
          </div>
        </div>
        <a href="mailto:infoduror@gmail.com" className="mail">
          <FaEnvelope className="envelope" />
          <p>infoduror@gmail.com</p>
        </a>
        <div className="direction">
          <FaMapMarkerAlt className="location" />
          <p>Pasaje Belgrado 3180, CABA</p>
        </div>
      </div>
    </div>
  );
};
export default ContactData;
