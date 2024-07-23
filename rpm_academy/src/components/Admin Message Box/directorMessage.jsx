import React from "react";

function DirectorMessage() {
  return (
    <div>
      <div className="bg-[url('/R.png')] h-40 w-full bg-contain bg-no-repeat font-poppins-semibold bg-top">
        <h1 className="text-3xl  text-[#145589] pt-16">DIRECTOR’S MESSAGE</h1>
        <p className="text-xl text-black font-raleway text-left mt-12 p-2">
          At RPM Academy, our aim is to provide an enriching curriculum in a
          conducive learning environment that will prepare students for success
          while at academy and for the years beyond academy. While we accord
          priority to academic excellence, we also lay strong emphasis on the
          holistic development of our students by achieving a balance between
          the academic, physical and artistic pursuits. We are committed to
          prepare students for the challenges of the 21st century. <br></br>
          <a className="text-red-600 underline" href="#">
            Read More
          </a>
        </p>
      </div>
    </div>
  );
}

export default DirectorMessage;
