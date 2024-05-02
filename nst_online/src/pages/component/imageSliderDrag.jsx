import React from "react";
import Slider from "react-slick";

const ImageSliderDrag = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    draggable: true,
    swipeToSlide: true,
    adaptiveHeight: true,
  };

  return (
    <div className="w-[95%] p-5">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-full">
            <img src={image} width={100} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSliderDrag;
