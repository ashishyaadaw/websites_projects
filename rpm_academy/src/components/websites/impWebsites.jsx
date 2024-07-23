import React from "react";

function ImpWebsites() {
  return (
    <div>
      <h1 className="text-3xl text-center font-dancing-script text-[#145589] p-16">
        Some Important Websites
      </h1>
      <div className="grid grid-cols-4 gap-5">
        <div className=" h-24 flex justify-center ">
          <img src={"cbse_logo.png"}></img>
        </div>
        <div className=" h-24 flex justify-center ">
          <img src={"digilocker_logo_new.png"}></img>
        </div>
        <div className=" h-24 flex justify-center ">
          <img src={"mygov_logo.svg"}></img>
        </div>
        <div className=" h-24 flex justify-center ">
          <img src={"swayam_logo.png"}></img>
        </div>
      </div>
    </div>
  );
}

export default ImpWebsites;
