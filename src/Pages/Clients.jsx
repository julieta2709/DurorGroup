import React from "react";
import Carousel from "../Components/Carousel";
import akaiEnergy from "../assets/clientes/akaiEnergy.png";
import armada from "../assets/clientes/armada.png";
import bgh from "../assets/clientes/bgh.png";
import cancilleria from "../assets/clientes/cancilleria.jpg";
import donsatur from "../assets/clientes/donsatur.png";
import Galicia from "../assets/clientes/Galicia.png";
import igenar from "../assets/clientes/igenar.png";
import larocca from "../assets/clientes/larocca.png";
import omnisat from "../assets/clientes/omnisat.jpg";

const Clients = () => {
  const images = [
    akaiEnergy,
    armada,
    bgh,
    cancilleria,
    donsatur,
    Galicia,
    igenar,
    larocca,
    omnisat,
  ];
  return (
    <div>
      <h2>Contamos con la confianza de:</h2>
      <Carousel images={images} />
    </div>
  );
};
export default Clients;
