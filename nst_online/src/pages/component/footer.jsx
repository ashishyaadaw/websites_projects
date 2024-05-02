import React from "react";

function Footer() {
  const footer = {
    menu_1: [
      {
        title: "How to Apply",
        href: "#",
      },
      {
        title: "Admissions",
        href: "#",
      },
      {
        title: "Student Welfare",
        href: "#",
      },
      {
        title: "Courses",
        href: "#",
      },
    ],
    menu_2: [
      {
        title: "Courses",
        href: "#",
      },
      {
        title: "Syllabus",
        href: "#",
      },
      {
        title: "Libraries",
        href: "#",
      },
      {
        title: "ABC Scheme",
        href: "#",
      },
      {
        title: "Entrepreneurship",
        href: "#",
      },
      {
        title: "NST Advantages",
        href: "#",
      },
      {
        title: "UGC Proforma/Mandatory",
        href: "#",
      },
      {
        title: "Disclosure",
        href: "#",
      },
    ],
    menu_3: [
      {
        title: "Placements",
        href: "#",
      },
      {
        title: "Career Development",
        href: "#",
      },
      {
        title: "Social Responsiveness",
        href: "#",
      },
      {
        title: "Skills Programs",
        href: "#",
      },
      {
        title: "Awards and Ranking",
        href: "#",
      },
    ],
    menu_4: [
      {
        title: "Contact Us",
        href: "#",
      },
      {
        title: "Admission Helpline",
        href: "#",
      },
      {
        title: "Visit Us",
        href: "#",
      },
      {
        title: "Student MIS",
        href: "#",
      },
      {
        title: "Internal Complaints Committee",
        href: "#",
      },
      {
        title: "Exam Corner",
        href: "#",
      },
      {
        title: "Tenders",
        href: "#",
      },
      {
        title: "Sexual Harassment of Women & Workplace Act",
        href: "#",
      },
    ],
    // get in touch
    menu_5: [
      {
        title: "facebook",
        href: "#",
        src: "https://static.xx.fbcdn.net/rsrc.php/yv/r/B8BxsscfVBr.ico",
      },
      {
        title: "instagram",
        href: "#",
        src: "https://static.cdninstagram.com/rsrc.php/v3/yR/r/lam-fZmwmvn.png",
      },
      {
        title: "twitterX",
        href: "#",
        src: "https://abs.twimg.com/responsive-web/client-web/icon-ios.77d25eba.png",
      },
      {
        title: "youtube",
        href: "#",
        src: "https://www.youtube.com/s/desktop/70217e23/img/favicon_32x32.png",
      },
      {
        title: "linkedin",
        href: "#",
        src: "https://static.licdn.com/aero-v1/sc/h/8a1a8xqjolkyjbf9n3i40oimj",
      },
    ],
    menu_6: [
      {
        title: "Contact Us",
        href: "#",
      },
      {
        title: "Admission Helpline",
        href: "#",
      },
      {
        title: "Visit Us",
        href: "#",
      },
      {
        title: "Student MIS",
        href: "#",
      },
      {
        title: "Internal Complaints Committee",
        href: "#",
      },
      {
        title: "Exam Corner",
        href: "#",
      },
      {
        title: "Tenders",
        href: "#",
      },
      {
        title: "Sexual Harassment of Women & Workplace Act",
        href: "#",
      },
    ],
  };

  return (
    <div>
      <div className="w-full h-[830px] bg-black font-roboto font-medium">
        <h1 className="text-center text-2xl text-white uppercase font-bold font-railway p-4">
          Starts your Career journey with nst
        </h1>
        <div className="grid grid-cols-4 gap-8 border-t-4 border-t-sky-800 pt-20 p-24 pb-0">
          <div className=" border-r-indigo-50 border-r h-64 pt-0   ">
            <h1 className="font-railway font-semibold leading-loose text-sm">
              Enroll with us
            </h1>
            <ul>
              {footer.menu_1.map((list, index) => {
                return (
                  <li className="text-gray-400/[0.89] text-sm hover:text-white   leading-relaxed">
                    <a href={list.href}>{list.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" border-r-indigo-50 border-r h-64 pt-0   ">
            <h1 className="font-railway font-semibold leading-loose text-sm">
              Learn with us
            </h1>
            <ul>
              {" "}
              {footer.menu_2.map((list, index) => {
                return (
                  <li className="text-gray-400/[0.89] text-sm hover:text-white  leading-relaxed">
                    <a href={list.href}>{list.title}</a>
                  </li>
                );
              })}{" "}
            </ul>
          </div>
          <div className=" border-r-indigo-50 border-r h-64 pt-0   ">
            <h1 className="font-railway font-semibold leading-loose text-sm">
              Grow with us
            </h1>
            <ul>
              {footer.menu_3.map((list, index) => {
                return (
                  <li className="text-gray-400/[0.89] text-sm hover:text-white  leading-relaxed">
                    <a href={list.href}>{list.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" h-64 pt-0   ">
            <h1 className="font-railway font-semibold leading-loose text-sm">
              Contact with us
            </h1>
            <ul>
              {footer.menu_4.map((list, index) => {
                return (
                  <li className="text-gray-400 text-sm font-open-sans hover:text-white">
                    <a href={list.href}>{list.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8 pt-5 p-24 pb-5">
          <div className="  h-64 pt-0   ">
            <h1 className="font-railway font-semibold leading-loose text-sm">
              News & Updates
            </h1>
            <p className="text-gray-400/[0.89] text-sm hover:text-white  leading-relaxed">
              By feeding email in the box you register yourself for updates and
              offers of NST direct in your inbox.
            </p>
            <input
              type="text"
              placeholder="Please enter your email address"
              className="bg-gray-300 mt-2 text-gray-600 px-4 py-1 min-w-[270px]  text-sm font-roboto outline-none focus:ring-0 focus:border-none rounded-md"
            />
            <button
              type="submit"
              className="bg-sky-900 rounded-md p-2 pt-1 pb-1 mt-2"
            >
              Submit
            </button>
            <h1 className="font-railway font-semibold leading-loose text-sm">
              Find Courses
            </h1>
            <select
              type="text"
              placeholder="Please enter your email address"
              className="bg-gray-300 mt-2 text-gray-700 px-4 py-1 min-w-[270px]  text-sm font-roboto outline-none focus:ring-0 focus:border-none rounded-md"
            >
              <option>B.Sc IT</option>
              <option>B.Sc CS</option>
              <option>BCA </option>
              <option>MCA</option>
              <option>BBA</option>
              <option>MBA</option>
            </select>
            <button
              type="submit"
              className="bg-sky-900 rounded-md p-2 pt-1 pb-1 mt-2"
            >
              Search
            </button>
          </div>
          <div className="  h-64 pt-0   ">
            <h1 className="font-railway font-semibold leading-loose text-sm">
              Who we are ?
            </h1>
            <ul>
              {" "}
              {footer.menu_1.map((list, index) => {
                return (
                  <li className="text-gray-400/[0.89] text-sm hover:text-white   leading-relaxed">
                    <a href={list.href}>{list.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" h-64 pt-0   ">
            <h1 className="font-railway font-semibold leading-loose text-sm">
              Get in Touch with us
            </h1>
            <ul>
              <li className="text-gray-400/[0.89] text-sm hover:text-white  leading-loose">
                <a href="#" className="flex gap-4">
                  <img
                    width="25"
                    height="15"
                    src="https://img.icons8.com/ios-filled/50/ffffff/phone.png"
                    alt="phone"
                  />
                  +91-94153-78687
                </a>
              </li>
              <li className="text-gray-400/[0.89] text-sm hover:text-white  leading-loose">
                <a href="#" className="flex gap-4">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/DBD6D6/new-post.png"
                    alt="new-post"
                  />
                  nstgkp@gmail.com
                </a>
              </li>
            </ul>{" "}
            <h1 className="font-railway font-semibold leading-loose text-sm">
              Follow us on
            </h1>
            <ul className="flex gap-4 ">
              <li className="text-gray-400/[0.89] text-sm hover:text-white  leading-relaxed">
                <a href="#" className="flex gap-4">
                  <img
                    width="20"
                    height="20"
                    src="https://static.xx.fbcdn.net/rsrc.php/yv/r/B8BxsscfVBr.ico"
                    alt="phone"
                  />
                </a>
              </li>
              <li className="text-gray-400/[0.89] text-sm hover:text-white  leading-relaxed">
                <a href="#" className="flex gap-4">
                  <img
                    width="24"
                    height="24"
                    src="https://static.cdninstagram.com/rsrc.php/v3/yR/r/lam-fZmwmvn.png"
                    alt="new-post"
                  />
                </a>
              </li>
              <li className="text-gray-400/[0.89] text-sm hover:text-white  leading-relaxed">
                <a href="#" className="flex gap-4">
                  <img
                    width="24"
                    height="24"
                    src="https://abs.twimg.com/responsive-web/client-web/icon-ios.77d25eba.png"
                    alt="new-post"
                  />
                </a>
              </li>
              <li className="text-gray-400/[0.89] text-sm hover:text-white  leading-relaxed">
                <a href="#" className="flex gap-4">
                  <img
                    width="24"
                    height="24"
                    src="https://www.youtube.com/s/desktop/70217e23/img/favicon_32x32.png"
                    alt="new-post"
                  />
                </a>
              </li>
              <li className="text-gray-400/[0.89] text-sm hover:text-white  leading-relaxed">
                <a href="#" className="flex gap-4">
                  <img
                    width="24"
                    height="24"
                    src="https://static.licdn.com/aero-v1/sc/h/5bukxbhy9xsil5mb7c2wulfbx"
                    alt="new-post"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className=" h-64 pt-0   ">
            <img
              className=""
              src="https://paruluniversity.ac.in/app/202001/images/post/section_container/image/356827award-footer.jpg"
            />
          </div>
        </div>

        <div className="m-20  border-t border-t-gray-400 text-sm font-roboto font-light text-gray-400 pt-3">
          <div className="absolute flex gap-8 ">
            <p>Privacy Policy</p>
            <p>Terms of use</p>
          </div>
          <p className="text-center">
            © Copyright 2024. All Rights Reserved by New Steps Technology.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
