import React, { Component } from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="p-1 bg-white h-72">
        <div className="  border bg-pink-100 ">
          <p className="text-sm font-roboto p-3">
            NST helped me grow in fields of education and other verbal and
            non-verbal skills. I appreciate the time and assistance provided by
            this institution in my most struggling phase of life and today all
            my credit goes to NST for making me achieve my dreams.I would truely
            recommend all to be a part of NST.
          </p>
          <div className="grid justify-items-center grid-cols-1">
            <img
              className="h-24 w-24 rounded-full"
              src="https://static.wixstatic.com/media/07170d_3b41f33269dd4f129c62fa42bc955a6c~mv2.jpg/v1/fill/w_285,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_9505%20(1).jpg"
            />
            <h1 className="font-railway text-xl font-semibold">
              Shristi Srivastava
            </h1>
          </div>
        </div>
      </div>
      <div className="p-1 bg-white h-72">
        <div className="  border bg-pink-100 ">
          <p className="text-sm font-roboto p-3">
            NST helped me grow in fields of education and other verbal and
            non-verbal skills. I appreciate the time and assistance provided by
            this institution in my most struggling phase of life and today all
            my credit goes to NST for making me achieve my dreams.I would truely
            recommend all to be a part of NST.
          </p>
          <div className="grid justify-items-center grid-cols-1">
            <img
              className="h-24 w-24 rounded-full"
              src="https://static.wixstatic.com/media/07170d_3b41f33269dd4f129c62fa42bc955a6c~mv2.jpg/v1/fill/w_285,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_9505%20(1).jpg"
            />
            <h1 className="font-railway text-xl font-semibold">
              Shristi Srivastava
            </h1>
          </div>
        </div>
      </div>
      <div className="p-1 h-72 bg-white">
        <div className="  border bg-pink-100 ">
          <p className="text-sm font-roboto p-3">
            NST helped me grow in fields of education and other verbal and
            non-verbal skills. I appreciate the time and assistance provided by
            this institution in my most struggling phase of life and today all
            my credit goes to NST for making me achieve my dreams.I would truely
            recommend all to be a part of NST.
          </p>
          <div className="grid justify-items-center grid-cols-1">
            <img
              className="h-24 w-24 rounded-full"
              src="https://static.wixstatic.com/media/07170d_3b41f33269dd4f129c62fa42bc955a6c~mv2.jpg/v1/fill/w_285,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_9505%20(1).jpg"
            />
            <h1 className="font-railway text-xl font-semibold">
              Shristi Srivastava
            </h1>
          </div>
        </div>
      </div>
    </Slider>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        marginTop: "-236px",
        rotate: "90deg",
        display: "block",
        marginRight: "5.5%",
        background: "orangered",
        border: "1px solid red ",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        marginTop: "-236px",
        marginLeft: "93%",
        rotate: "90deg",
        display: "block",
        background: "orangered",

        border: "1px solid red ",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

export function VerticalMode() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        <div>
          <div className="h-24 bg-sky-600/[0.18] p-2 w-full flex">
            <div className="p-5">
              <img src="	https://ddugu.ac.in/newweb/images/student2.png" />
            </div>
            <div>
              <p className=" uppercase text-sm  text-slate-900 font-bold font-open-sans">
                date uploaded:20 april 2024
              </p>
              <p className=" text-sm font-semibold text-sky-900 font-railway">
                Notice Text Here ---- Notice Text here Notice Text Here ----
                Notice Text here Notice Text Here ---- Notice Text here
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="h-24 bg-sky-600/[0.18] p-2 w-full flex">
            <div className="p-5">
              <img src="	https://ddugu.ac.in/newweb/images/student2.png" />
            </div>
            <div>
              <p className=" uppercase text-sm  text-slate-900 font-bold font-open-sans">
                date uploaded:20 april 2024
              </p>
              <p className=" text-sm font-semibold text-sky-900 font-railway">
                Notice Text Here ---- Notice Text here Notice Text Here ----
                Notice Text here Notice Text Here ---- Notice Text here
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="h-24 bg-sky-600/[0.18] p-2 w-full flex">
            <div className="p-5">
              <img src="	https://ddugu.ac.in/newweb/images/student2.png" />
            </div>
            <div>
              <p className=" uppercase text-sm  text-slate-900 font-bold font-open-sans">
                date uploaded:20 april 2024
              </p>
              <p className=" text-sm font-semibold text-sky-900 font-railway">
                Notice Text Here ---- Notice Text here Notice Text Here ----
                Notice Text here Notice Text Here ---- Notice Text here
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="h-24 bg-sky-600/[0.18] p-2 w-full flex">
            <div className="p-5">
              <img src="	https://ddugu.ac.in/newweb/images/student2.png" />
            </div>
            <div>
              <p className=" uppercase text-sm  text-slate-900 font-bold font-open-sans">
                date uploaded:20 april 2024
              </p>
              <p className=" text-sm font-semibold text-sky-900 font-railway">
                Notice Text Here ---- Notice Text here Notice Text Here ----
                Notice Text here Notice Text Here ---- Notice Text here
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="h-24 bg-sky-600/[0.18] p-2 w-full flex">
            <div className="p-5">
              <img src="	https://ddugu.ac.in/newweb/images/student2.png" />
            </div>
            <div>
              <p className=" uppercase text-sm  text-slate-900 font-bold font-open-sans">
                date uploaded:20 april 2024
              </p>
              <p className=" text-sm font-semibold text-sky-900 font-railway">
                Notice Text Here ---- Notice Text here Notice Text Here ----
                Notice Text here Notice Text Here ---- Notice Text here
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
