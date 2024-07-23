import React from "react";

function Footer() {
  return (
    <div>
      {" "}
      <div className="bg-[#000000]/[0.9] text-gray-50 h-80 mt-20">
        <div class="grid grid-cols-3 gap-4 p-4">
          <div className="p-2">
            <div className="flex flex-row gap-5">
              <div>
                <h1 className="font-quicksand text-lg font-bold">
                  Admin Portal
                </h1>
                <ul className="font-quicksand text-gray-300 text-sm ">
                  <li>About Organization</li>
                  <li>Student's Login</li>
                  <li>Teacher's Login</li>
                  <li>Request Services</li>
                </ul>
              </div>
              <div>
                <h1 className="font-quicksand text-lg font-bold">
                  Quick Links
                </h1>
                <ul className="font-quicksand text-gray-300 text-sm ">
                  <li>Alumni</li>
                  <li>Career</li>
                  <li>Pay Fees</li>
                  <li>Admission Query Form</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1 className="font-quicksand text-lg font-bold pb-3">
                Downloads
              </h1>
              <div className="flex flex-row">
                {" "}
                <img
                  className="h-6"
                  src="/playstore.png"
                  alt="playstore photo"
                ></img>{" "}
                <h1>Google Play</h1>
              </div>
            </div>
            <div className="pt-10">
              <h1 className="font-quicksand text-lg font-bold">Contact Us</h1>
              <ul className="font-quicksand text-gray-300 text-sm ">
                <li>Mob.- 7607005202, 7607001136</li>
                <li>Email ID - admissions@rpmacademy.org</li>
              </ul>
            </div>
          </div>
          <div>
            {" "}
            <div>
              <div>
                <h1 className="font-quicksand text-lg font-bold pb-3">
                  Address
                </h1>
                <div className="flex flex-row gap-2">
                  {" "}
                  <img
                    className="h-6"
                    src="https://img.icons8.com/color/48/marker--v1.png"
                    alt="playstore photo"
                  ></img>{" "}
                  <i>RPM Academy, Green City, Gorakhnath , Gorakhpur -273015</i>
                </div>
                <div class="mapouter">
                  <div class="gmap_canvas">
                    <iframe
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=RPM%20ACADEMY%20green%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#000000] text-gray-50 font-quicksand h-10 w-full">
        <div className="flex flex-row p-1 pl-5 pr-5">
          <div className="basis-1/2 p-1">
            {" "}
            © 1993-2024 RPM Academy Group of Schools
          </div>
          <div className="basis-1/2">
            <ul className="flex flex-row justify-end gap-3">
              <li>
                <img className="h-8" src="/icons8-whatsapp-24.png"></img>
              </li>
              <li>
                <img className="h-8" src="/icons8-instagram-24.png"></img>
              </li>
              <li>
                <img className="h-8" src="/icons8-linked-in-24.png"></img>
              </li>
              <li>
                <img className="h-8" src="/icons8-facebook-24.png"></img>
              </li>
              <li>
                <img className="h-8" src="/icons8-twitterx-50.png"></img>
              </li>
              <li>
                <img className="h-8" src="/icons8-youtube-24.png"></img>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
