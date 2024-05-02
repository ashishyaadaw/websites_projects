import React, { useState, useEffect } from "react";

function ImageSlider({ images, interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="w-full ">
      <div
        className="slider-img-container h-[600px] mt-10 w-full"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        {/* <button onClick={goToPrevious}>Prev</button>
        <button onClick={goToNext}>Next</button> */}
      </div>
      <div class="flex mt-[-50px] bg-transparent justify-center select-none">
        <div className="indicators  ml-">
          {images.map((image, index) => (
            <button
              key={index}
              className={`h-3 ml-1 w-3 bg-gray-300 rounded-full ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
