import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AkaiTecho2 from "../assets/trabajos/AkaiTecho2.jpg";
import AkaiTecho3 from "../assets/trabajos/AkaiTecho3.jpg";
import AkaiTecho4 from "../assets/trabajos/AkaiTecho4.jpg";
import caldera1 from "../assets/trabajos/caldera1.jpg";
import caldera2 from "../assets/trabajos/caldera2.jpg";

const CardWork = ({ item }) => {
  const images = {
    card1: [AkaiTecho2, AkaiTecho3, AkaiTecho4],
    card2: [caldera1, caldera2],
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="card">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        centerMode={true}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {/*  {images[item.id].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className="carousel-image"
          />
        ))} */}
      </Carousel>
    </div>
  );
};
export default CardWork;
