import React from "react";
import "../Styles/CardWork.css";
import AkaiTecho2 from "../assets/trabajos/AkaiTecho2.jpg";
import AkaiTecho3 from "../assets/trabajos/AkaiTecho3.jpg";
import AkaiTecho4 from "../assets/trabajos/AkaiTecho4.jpg";
import caldera1 from "../assets/trabajos/caldera1.jpg";
import caldera2 from "../assets/trabajos/caldera2.jpg";
import cctv1 from "../assets/trabajos/cctv1.jpg";
import cctv2 from "../assets/trabajos/cctv2.jpg";
import cctv3 from "../assets/trabajos/cctv3.jpg";
import Escalera7 from "../assets/trabajos/Escalera7.jpeg";
import EscaleraFinal1 from "../assets/trabajos/EscaleraFinal1.jpg";
import EscaleraFinal2 from "../assets/trabajos/EscaleraFinal2.jpg";
import EscaleraFinal6 from "../assets/trabajos/EscaleraFinal6.jpg";
import EscaleraFinal7 from "../assets/trabajos/EscaleraFinal7.jpg";
import Linea1 from "../assets/trabajos/Linea1.jpeg";
import Linea2 from "../assets/trabajos/Linea2.jpeg";
import Linea3 from "../assets/trabajos/Linea3.jpeg";
import Linea4 from "../assets/trabajos/Linea4.jpeg";
import Linea5 from "../assets/trabajos/Linea5.jpeg";
import Linea6 from "../assets/trabajos/Linea6.jpeg";
import macro1 from "../assets/trabajos/macro1.png";
import macro2 from "../assets/trabajos/macro2.png";
import macro3 from "../assets/trabajos/macro3.png";
import oficina1 from "../assets/trabajos/oficina1.png";
import oficina2 from "../assets/trabajos/oficina2.png";
import oficina3 from "../assets/trabajos/oficina3.png";
import pintura1 from "../assets/trabajos/Pintura1.jpg";
import pintura2 from "../assets/trabajos/Pintura2.jpeg";
import pintura3 from "../assets/trabajos/Pintura3.jpeg";
import pintura4 from "../assets/trabajos/Pintura4.jpeg";
import rosario1 from "../assets/trabajos/rosario1.png";
import rosario2 from "../assets/trabajos/rosario2.png";
import rosario3 from "../assets/trabajos/rosario3.png";
import rosario4 from "../assets/trabajos/rosario4.png";
import rosario5 from "../assets/trabajos/rosario5.png";
import urg1 from "../assets/trabajos/urg1.jpg";
import urg2 from "../assets/trabajos/urg2.jpg";
import urg3 from "../assets/trabajos/urg3.png";
import urg4 from "../assets/trabajos/urg4.png";
import LogoDuror from "../assets/LogoDuror-removebg.png";
import CarouselWork from "./CarouselWork";

const AkaiTecho = [AkaiTecho2, AkaiTecho3, AkaiTecho4];
const caldera = [caldera1, caldera2];
const cctv = [cctv1, cctv2, cctv3];
const Escalera = [
  Escalera7,
  EscaleraFinal1,
  EscaleraFinal2,
  EscaleraFinal6,
  EscaleraFinal7,
];
const Linea = [Linea1, Linea2, Linea3, Linea4, Linea5, Linea6];
const macro = [macro1, macro2, macro3];
const oficina = [oficina1, oficina2, oficina3];
const Pintura = [pintura1, pintura2, pintura3, pintura4];
const rosario = [rosario1, rosario2, rosario3, rosario4, rosario5];
const urg = [urg1, urg2, urg3, urg4];

const CardWork = ({ item }) => {
  let images = [];
  if (item.id === 17) {
    images = Escalera;
  } else if (item.id === 18) {
    images = Pintura;
  } else if (item.id === 19) {
    images = Linea;
  } else if (item.id === 20) {
    images = AkaiTecho;
  } else if (item.id === 21) {
    images = rosario;
  } else if (item.id === 22) {
    images = macro;
  } else if (item.id === 23) {
    images = oficina;
  } else if (item.id === 24) {
    images = caldera;
  } else if (item.id === 25) {
    images = cctv;
  } else if (item.id === 26) {
    images = urg;
  }
  return (
    <div className="CardWork">
      <div className="CardWork-container">
        <div className="CardWork-header">
          <img className="logo" src={LogoDuror} alt="Logo Duror Group" />
          <h3 className="CardWork-title">{item.title}</h3>
        </div>
        <div className="CardWork-images">
          <CarouselWork images={images} />
        </div>
        <p className="CardWorkd-description">{item.description}</p>
      </div>
    </div>
  );
};

export default CardWork;
