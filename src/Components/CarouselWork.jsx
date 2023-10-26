import React, { useState, useEffect } from "react";
import "../Styles/Carousel.css";

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
    <div className="carousel-container">
      <button onClick={handlePrevImage} className="carousel-button">
        {"<"}
      </button>
      {images[currentImageIndex] && (
        <div>
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="carousel-image"
          />
        </div>
      )}
      <button onClick={handleNextImage} className="carousel-button">
        {">"}
      </button>
    </div>
  );
};

export default CarouselWork;
