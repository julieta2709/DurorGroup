import React from "react";
import Carousel from "react-carousel";
import "react-carousel/lib/styles/carousel.min.css";
import "../Styles/CardWork.css";
import { AkaiTecho } from "../assets/trabajos/images";

const CardWork = ({item}) => {
  return (
<div className="CardWork">
      <div className="CardWork-container">
        <h3 className="CardWork-title">{item.title}</h3>
        <Carousel>
          {AkaiTecho.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Carousel>
        <p className="CardWorkd-description">{item.description}</p>
      </div>
    </div>
  )
}

export default CardWork;
