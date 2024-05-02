import React, { useState, useEffect, useRef } from "react";

function AutoSlideImageSlider({ images, interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      setCurrentIndex((currentIndex + 1) % images.length);
    } else if (touchStartX.current - touchEndX.current < -50) {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div
      className="slider w-full overflow-hidden"
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="slider-inner flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            src={image}
            key={index}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

export default AutoSlideImageSlider;
