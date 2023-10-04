import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import "../Styles/Footer.css";
import "../Styles/Contact-data.css"

const ContactData = ({render}) => {
  return (
    <div className={render === "footer" ? "Footer-container" : "Contact-container"}>
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
      <div className="contact-wsp">
        <a
          href="https://api.whatsapp.com/send?phone=5491151180872"
          className="wsp-icon"
        >
          <FaWhatsapp className="wsp-number" />
          <p>11 5118-0872</p>
        </a>
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