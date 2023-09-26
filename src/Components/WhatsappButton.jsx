import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../Styles/WhatsappButton.css";

const WhatsappButton = () => {
  return (
    <div className="WspButton-container">
      <a href="https://api.whatsapp.com/send?phone=5491151180872">
        <FaWhatsapp className="WspButton" />
      </a>
    </div>
  );
};
export default WhatsappButton;
