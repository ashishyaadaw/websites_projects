import React from "react";

function RpmGroupofSchool() {
  return (
    <div>
      {" "}
      <div className="flex flex-row gap-4 p-10 pr-0  h-[450px] ">
        <div className="basis-1/3 text-2xl font-poppins-bold">
          <h1>RPM Academy at a glance</h1>
          <div className="h-[250px] mt-3 bg-gray-400 rounded-md">
            <iframe
              className="w-full h-full rounded-md"
              src="https://www.youtube.com/embed/f0y0dtzEpzo"
              title="GORAKHPUR MAHOTSAV -2019 (YOGA DISPLAY AT RPM ACADEMY GREEN CITY GORAKHNATH GORAKHPUR, U.P. )"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <span className="underline font-light text-xl mt-">More Videos</span>
        </div>
        <div className="basis-2/3 text-2xl font-poppins-bold ">
          <h1>RPM Academy - Group of Schools</h1>
          <div className=" mt-3 text-base font-normal ">
            <p>
              {" "}
              Welcome To RPM Academy Educational Society, A Visionary Endeavor
              Established In 1993 In Kauriram, Gorakhpur, Uttar Pradesh. Our
              Foundation Stems From The Dreams Of The Visionary Shri. Ajay Kumar
              Shahi Is A Remarkable Individual Driven By An Exceptional Vision.
              With Dedication And Hard Work, Shri. Ajay Kumar Shahi Has Nurtured
              A Profound Aspiration Into Reality. The Name R.P. Pays Tribute To
              The Cherished Memory Of The Late Ram Pyare Shahi, A Truly Upright
              And Benevolent Soul. RPM Academy Stands As A Testament To His
              Legacy. As A Privately Owned Co-Educational English Medium School,
              We Embrace A Commitment To Academic Excellence.
            </p>
            <br></br>
            <p>
              At The Core Of Our Educational Society Lies A Fundamental
              Objective: To Extend The Reach Of Quality Education Across All
              Classes Of Society. We Aspire To Empower Students With An
              Outstanding Education, Regardless Of Their Social Standing. We
              Firmly Believe That Each Child Within Our Society Deserves Nothing
              Less Than The Finest Education.
            </p>
            <br></br>
          </div>
          <a
            href="#"
            className="underline  font-semibold text-lg text-red-500 mt-"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default RpmGroupofSchool;
