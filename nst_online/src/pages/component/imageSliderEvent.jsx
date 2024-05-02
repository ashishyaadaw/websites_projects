import React, { useState, useEffect, useRef } from "react";

const images = [
  "https://via.placeholder.com/600x300?text=First+Image",
  "https://via.placeholder.com/600x300?text=Second+Image",
  "https://via.placeholder.com/600x300?text=Third+Image",
];

const ImageSliderEvent = ({ autoPlayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleAutoPlay = () => {
      setCurrentIndex((currentIndex + 1) % images.length);
    };

    if (autoPlayInterval !== null) {
      const timer = setInterval(handleAutoPlay, autoPlayInterval);
      return () => clearInterval(timer);
    }
  }, [currentIndex, autoPlayInterval]);

  const handleDragStart = (e) => {
    const startX = e.type.includes("mouse") ? e.pageX : e.touches[0].pageX;
    sliderRef.current.startX = startX;
    sliderRef.current.isDragging = true;
  };

  const handleDragging = (e) => {
    if (!sliderRef.current.isDragging) return;
    const movingX = e.type.includes("mouse") ? e.pageX : e.touches[0].pageX;
    const deltaX = sliderRef.current.startX - movingX;
    if (deltaX > 50) {
      setCurrentIndex((currentIndex + 1) % images.length);
      sliderRef.current.isDragging = false;
    } else if (deltaX < -50) {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
      sliderRef.current.isDragging = false;
    }
  };

  const handleDragEnd = () => {
    sliderRef.current.isDragging = false;
  };

  return (
    <div
      className="relative select-none"
      onMouseDown={handleDragStart}
      onMouseMove={handleDragging}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragging}
      onTouchEnd={handleDragEnd}
      ref={sliderRef}
    >
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-full h-auto block"
      />
    </div>
  );
};

export default ImageSliderEvent;
