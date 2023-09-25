import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Footer>
      <p>Síguenos en nuestras redes sociales:</p>
      <div className="social-icons">
        <a href="https://www.instagram.com">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com">
          <FaFacebook />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5491151180872">
          <FaWhatsapp />
        </a>
      </div>
      <p>Dirección: pasaje Belgrado 3180, CABA</p>
      <FaMapMarkerAlt />
      <p>Mail: infoduror@gmail.com</p>
      <FaEnvelope />
    </Footer>
  );
};
export default Footer;
