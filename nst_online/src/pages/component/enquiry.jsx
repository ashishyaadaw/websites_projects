import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

function Enquiry() {
  function handleClick() {
    // jQuery code here
    if ($("#enquiryContainer").width() > 100) {
      $("#enquiryContainer").animate(
        {
          width: "0px",
        },
        500,
        function () {
          // Animation complete callback
          console.log($("#enquiryContainer").width());
        }
      );
    } else {
      $("#enquiryContainer").animate(
        {
          width: "352px",
        },
        500,
        function () {
          // Animation complete callback
          console.log($("#enquiryContainer").width());
        }
      );
    }
  }

  return (
    <div className="fixed  text-black font-open-sans text-xl font-semibold top-0 right-0 mt-40  ">
      <button
        id="enquiryBtn"
        onClick={handleClick}
        className="h-10 absolute -ml-[92px] hover:bg-yellow-500/[0.98] mt-20 flex w-36 bg-yellow-500 rotate-90 p-2 pt-1  rounded-bl-md rounded-br-md"
      >
        Enquiry Now
      </button>
      <div id="enquiryContainer" className="flex  w-[22rem] h-96">
        <div className=" h-96 w-full border  rounded-tl-md rounded-bl-md bg-white">
          <h1 className="text-xl font-semibold rounded-tl-md text-center bg-black text-white font-railway h-12 pt-2 w-full">
            Enquiry Now
          </h1>
          <form className="p-2">
            {/* FOR NAME */}
            <label class="block">
              <input
                type="text"
                placeholder="Name"
                class="mt-1 font-roboto font-light block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
            </label>
            {/* FOR EMAIL */}
            <label class="block">
              <input
                type="email"
                placeholder="Email"
                class="mt-1 font-roboto font-light block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
            </label>
            {/* FOR PHONE */}
            <label class="block">
              <input
                type="text"
                placeholder="Phone Number"
                class="mt-1 font-roboto font-light block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
            </label>
            {/* FOR STATE */}
            <label class="block">
              <select
                class="mt-1 font-roboto font-light block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 uppercase
    "
              >
                <option>Bihar</option>
                <option>UTTAR PRADESH</option>
              </select>
            </label>
            {/* FOR CITY */}
            <label class="block">
              <select
                class="mt-1 font-roboto font-light block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 uppercase
    "
              >
                <option>Gorakhpur</option>
                <option>Sant Kabir Nagar</option>
              </select>
            </label>
            {/* FOR SPECIALIZATION ENQUIRY */}
            <label class="block">
              <select
                class="mt-1 font-roboto font-light block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 uppercase
    "
              >
                <option>Courses</option>
                <option>Fees</option>
                <option>Other</option>
              </select>
            </label>
            <div className="grid justify-items-center grid-cols-1 mt-5">
              <button className="bg-red-600 text-white font-open-sans text-sm rounded-full pl-2 pr-2  h-8 w-full overflow-hidden">
                Submit and Download Brochure
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Enquiry;
