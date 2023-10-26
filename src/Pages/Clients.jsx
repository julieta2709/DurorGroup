import React from "react";
import CarouselClient from "../Components/CarouselClient";
import akaiEnergy from "../assets/clientes/akaiEnergy.png";
import armada from "../assets/clientes/armada.png";
import BGHlogo from "../assets/clientes/BGHlogo.png";
import cancilleria from "../assets/clientes/cancilleria.jpg";
import donsatur from "../assets/clientes/donsatur.png";
import Galicia from "../assets/clientes/Galicia.png";
import igenar from "../assets/clientes/igenar.png";
import larocca from "../assets/clientes/larocca.png";
import omnisat from "../assets/clientes/omnisat.jpg";
import "../Styles/Carousel.css";
import "../Styles/PagesStyles.css";

const Clients = () => {
  const images = [
    akaiEnergy,
    armada,
    BGHlogo,
    cancilleria,
    donsatur,
    Galicia,
    igenar,
    larocca,
    omnisat,
  ];
  return (
    <div className="Clients">
      <h2>Contamos con la confianza de:</h2>
      <CarouselClient images={images} />
    </div>
  );
};
export default Clients;
