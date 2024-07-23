import React from "react";

function Branches() {
  const branches = [
    {
      name: "RPM ACADEMY KAURIRAM",
      location: "Ranipur, Kauriram, Gorakhpur - 273412",
      src: "/branch_01.jpg",
      className: "",
    },
    {
      name: "RPM ACADEMY KAURIRAM",
      location: "Ranipur, Kauriram, Gorakhpur - 273412",
      src: "/branch_01.jpg",
      className: "",
    },
    {
      name: "RPM ACADEMY KAURIRAM",
      location: "Ranipur, Kauriram, Gorakhpur - 273412",
      src: "/branch_01.jpg",
      className: "",
    },
    {
      name: "RPM ACADEMY KAURIRAM",
      location: "Ranipur, Kauriram, Gorakhpur - 273412",
      src: "/branch_01.jpg",
      className: "",
    },
    {
      name: "RPM ACADEMY KAURIRAM",
      location: "Ranipur, Kauriram, Gorakhpur - 273412",
      src: "/branch_01.jpg",
      className: "",
    },
    {
      name: "RPM ACADEMY KAURIRAM",
      location: "Ranipur, Kauriram, Gorakhpur - 273412",
      src: "/branch_01.jpg",
      className: "",
    },
  ];
  return (
    <div>
      {" "}
      <div className=" bg-gray-50 p-5 text-center ">
        <div className="bg-[url('/blue_brush_stroke.png')] h-40 w-full text-center bg-contain bg-no-repeat  font-poppins-semibold bg-top">
          {/* <h2 className="text-2xl  font-light">LET'S SEE OUR</h2> */}
          <h1 className="text-3xl  text-gray-50 pt-16">OUR BRANCHES</h1>
        </div>
        <div className="grid grid-cols-3   gap-2">
          {branches.map((branch, key) => {
            return (
              <div
                className={`h-auto bg-[#145589]/[0.10] p-1 ${branch.className}`}
              >
                <div className="bg-gray-50 h-auto  ">
                  <img src={branch.src} className="h-auto w-full "></img>
                </div>
                <h1 className="text-base text-left text-[#F4382D] font-poppins-bold mt-1">
                  {branch.name}
                </h1>

                <div className="flex flex-row gap-2">
                  <img
                    src="/icons8-location.gif"
                    className="h-5 w-5 mt-1 mix-blend-multiply rounded-md"
                  ></img>
                  <p className="font-noto-serif text-sm font-semibold text-left ">
                    <i>
                      <small> {branch.location}</small>
                    </i>
                  </p>
                </div>
                <p className="text-left text-sm  font-rajdhani-regular uppercase font-semibold">
                  <small>
                    {" "}
                    Affiliated with CISCE BOARD
                    <br></br>Affiliation No. UP-211 <br></br>Mobile No:
                    7607001127, 7607001128
                  </small>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Branches;
