import React from "react";
import $ from "jquery";
function Header() {
  const nav = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "Admissions",
      href: "#",
      submenu: [
        {
          title: "Registration",
          href: "#",
        },
        {
          title: "Fee Stuctures",
          href: "#",
        },
        {
          title: "Admission Brochure",
          href: "#",
        },
      ],
    },
    {
      title: "Courses",
      href: "#",
      submenu: [
        {
          title: "UG Courses",
          href: "#",
        },
        {
          title: "PG Courses",
          href: "#",
        },
        {
          title: "Diploma",
          href: "#",
        },
        {
          title: "Certificate",
          href: "#",
        },
      ],
    },
    {
      title: "About Us",
      href: "#",
      submenu: [
        {
          title: "Director's Desk",
          href: "#",
        },
        {
          title: "Event Gallery",
          href: "#",
        },
        {
          title: "Facilities",
          href: "#",
        },
        {
          title: "Contacts",
          href: "#",
        },
        {
          title: "T&Cs",
          href: "#",
        },
      ],
    },
    {
      title: "Alumnis",
      href: "#",
    },
    {
      title: "Brochure",
      href: "#",
    },
  ];

  return (
    <>
      <header
        id="header"
        className="bg-pink-100 shadow-md fixed h-14 top-0 w-full left-0 z-50"
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://static.wixstatic.com/media/07170d_6b296df07e804793abf9035a11c08368~mv2.jpg/v1/fill/w_120,h_74,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/65a678fb-fb0b-4251-b37c-62fdf81cfeef_JPG.jpg"
              alt="Logo"
              className="h-8 w-8 mr-2 mix-blend-multiply"
            />
            <span className="text-xl text-black">New Steps Technology</span>
          </div>
          <div>
            <button className="bg-sky-900 text-sm  p-1 pl-2 pr-2 rounded-md text-white roboto-bold h-8">
              Call Free : 9415378687
            </button>
            <button className="bg-sky-900 text-sm ml-2 p-1 pl-2 pr-2 rounded-md text-white roboto-bold h-8">
              Need Counselling
            </button>
          </div>
          <div class=" flex gap-2 ">
            <a
              href="https://api.whatsapp.com/send?phone=918808879487&amp;text=Hi"
              target="_blank"
              class=""
            >
              <img src="whatsapp.svg" alt="" class="h-7" />
            </a>

            <a href="https://t.me/PUOfficialChannel" target="_blank" class="">
              <img src="telegram.svg" alt="" class="h-7" />
            </a>
          </div>
          <nav className="relative ">
            <ul className="flex space-x-10 text-sm ">
              {nav.map((navItem, index) => {
                return (
                  <>
                    <li
                      key={index}
                      id={navItem.title.toLowerCase()}
                      className=" border-b-[3px] border-transparent hover:border-b-slate-950 h-6 hover:font-bold roboto-regular"
                    >
                      <div class="dropdown">
                        <a
                          href={navItem.href}
                          className=" text-slate-700 hover:text-slate-950"
                        >
                          {navItem.title}
                        </a>
                        {navItem.submenu ? (
                          <div class="dropdown-content text-black">
                            {navItem.submenu.map((item, index) => (
                              <a
                                href={item.href}
                                className="flex hover:bg-sky-700 hover:text-white"
                              >
                                {item.title}
                              </a>
                            ))}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </li>
                  </>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
