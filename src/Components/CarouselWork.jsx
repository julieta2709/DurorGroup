import React, { useState, useEffect } from "react";
import "../Styles/CarouselWork.css";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

const CarouselWork = ({ images }) => {
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
    <div className="carouselWork-container">
      {images[currentImageIndex] && (
        <div className="carouselWork-image-container">
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="carouselWork-image"
          />
        </div>
      )}
      <div className="carousel-buttons">
        <button onClick={handlePrevImage} className="carouselWork-button">
          <FaChevronCircleLeft />
        </button>
        <button onClick={handleNextImage} className="carouselWork-button">
          <FaChevronCircleRight />
        </button>
      </div>
    </div>
  );
};

export default CarouselWork;
