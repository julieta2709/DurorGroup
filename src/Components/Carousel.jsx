import React, { useState, useEffect } from "react";
import "../Styles/Carousel.css";

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel-container">
      <button onClick={handlePrevImage} className="carousel-button">
        {"<"}
      </button>
      <img
        src={images[currentImageIndex]}
        alt="carousel"
        className="carousel-image"
      />
      <button onClick={handleNextImage} className="carousel-button">
        {">"}
      </button>
    </div>
  );
}

export default Carousel;
