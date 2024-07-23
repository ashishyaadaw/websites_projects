import { document } from "postcss";
import "./header.css";
import { useState } from "react";

function Header() {
  const menu = [
    {
      title: "About Us",
      href: "#",
    },
    {
      title: "Admissions",
      href: "#",
    },
    {
      title: "Academics",
      href: "#",
    },
    {
      title: "News",
      href: "#",
    },
    {
      title: "Gallery",
      href: "#",
    },
    {
      title: "Activities",
      href: "#",
    },
    {
      title: "CBSE",
      href: "#",
    },
  ];
  return (
    <>
      <div class="flex flex-row h-6 xl:h-8 xl:pt-1 text-md font-quicksand bg-[#891414] text-gray-300 font-medium">
        <div class="basis-2/3 flex gap-4">
          {/* Phone Number --1  */}
          <a href="tel:+91-7607005202" className="flex">
            <img
              className="w-6 h-6"
              src="https://img.icons8.com/glyph-neue/64/D9D9D9/phone.png"
              alt="phone"
            />
            &nbsp;+91-7607005202
          </a>
          {/* Phone Number --2  */}
          <a href="tel:+91-7607001136">+91-7607001136</a>
          &nbsp;
          {/* email address */}
          <a href="mail:info@rpmacademy.org" className="flex">
            <img
              className="w-6 h-6"
              src="https://img.icons8.com/ios-glyphs/30/D9D9D9/secured-letter--v1.png"
              alt="phone"
            />
            &nbsp;info@rpmacademy.org
          </a>
        </div>
        <div class="basis-1/3">
          <div className="basic-1 text-end mr-10 text-[#FFDE59] font-bold uppercase">
            <a href="#">login</a>
          </div>
        </div>
      </div>
      <div class="flex flex-row h-20 font-poppins-bold  text-[#891414] font-bold bg-[#f5ac4041]">
        <div class="basis-3/4 flex gap-5 mt-2 ml-2">
          <img src="./logo.png" width={86}></img>
          <div className="mt-2">
            <h1 className="text-2xl">
              RPM ACADEMY,<i>Green City - Gorakhnath</i>
            </h1>
            <p className="font-noyo-serif font-semibold text-[10.5px] text-[#145589]">
              [ Affiliated to: Central Board Of Secondary Education, Delhi ,
              Affiliation Number - 2132489 ]
            </p>
          </div>
        </div>
        <div class="basis-1/4">
          <div className="flex flex-row-reverse gap-5 mt-2 text-end mr-10 text-[#FFDE59] font-bold uppercase">
            <img
              className="w-16 h-16 mix-blend-multiply "
              src="/31.png"
              alt="31 years of academics excellence"
            />
            <img
              className="w-16 h-16"
              src="/jagaran-excellence-award-logo.png"
              alt="jagaran excellence awards to Rpm Academy group of school"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-row h-6 xl:h-8 text-md font-poppins-regular bg-[#145589] text-gray-300 ">
        <ul className="flex gap-5 ">
          <li className="hover:bg-[#f98f2b] xl:p-1 xl:pl-10 xl:pr-10 ">
            <a href="#" className="flex">
              <img
                className="w-6 h-6"
                src="https://img.icons8.com/sf-black-filled/64/D9D9D9/home.png"
                alt="home"
              />
              &nbsp;Home
            </a>
          </li>
          {menu.map((title, key) => (
            <li
              onMouseEnter={() => {
                setDisplay("block");
              }}
              onMouseLeave={() => {
                setDisplay("none");
              }}
              className="relative dropdown hover:bg-[#f98f2b] xl:p-1 xl:pl-10 xl:pr-10 hover:text-[#145589]"
            >
              <a key={key} href="#" className="flex">
                {title.title}
                &nbsp;
                <img
                  className="w-4 mt-1 h-4"
                  src="https://img.icons8.com/sf-regular-filled/48/D9D9D9/expand-arrow.png"
                  alt="home"
                />
              </a>
              <div class="dropdown-content text-sm font-quicksand">
                <ul>
                  <li>List Item 01</li>
                  <li>List Item 01</li>
                  <li>List Item 01</li>
                  <li>List Item 01</li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Header;
