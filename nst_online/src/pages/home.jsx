import React from "react";
import Header from "./component/header";
import ImageSlider from "./component/imageSlider";
import Footer from "./component/footer";
import ImageSliderDrag from "./component/imageSliderDrag";
import $ from "jquery";
import Enquiry from "./component/enquiry";
import SimpleSlider, { VerticalMode } from "./component/slider";

function Home() {
  const images = [
    "https://paruluniversity.ac.in/master_2024/images/banner/bannerd.webp",
    "https://paruluniversity.ac.in/master_2024/images/about/aboutus.webp",
    "https://paruluniversity.ac.in/app/images/slider/background_image/424961Home%20Page.jpeg",
  ];

  const images1 = [
    "https://static.wixstatic.com/media/07170d_5eae6a22a11f420285b459c47bde370f~mv2.jpg/v1/fill/w_338,h_436,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/07170d_5eae6a22a11f420285b459c47bde370f~mv2.jpg",
    "https://static.wixstatic.com/media/07170d_0cb2bbca511c4dcb9c9df98895afcea6~mv2.jpg/v1/fill/w_581,h_436,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/07170d_0cb2bbca511c4dcb9c9df98895afcea6~mv2.jpg",
    "https://static.wixstatic.com/media/07170d_a29f54f94f384c3492c06a9dd7e88751~mv2.jpg/v1/fill/w_581,h_436,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/07170d_a29f54f94f384c3492c06a9dd7e88751~mv2.jpg",
    "https://static.wixstatic.com/media/07170d_4c1f67375f8d49d4a5304993b6cd4dca~mv2.jpg/v1/fill/w_581,h_436,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/07170d_4c1f67375f8d49d4a5304993b6cd4dca~mv2.jpg",
  ];

  const placements = [
    "https://paruluniversity.ac.in/app/images/post/recruiter/image/6361r1.png",
    "https://paruluniversity.ac.in/app/images/post/recruiter/image/8801r10.png",
    "https://paruluniversity.ac.in/app/images/post/recruiter/image/8831r7.png",
    "https://paruluniversity.ac.in/app/images/post/recruiter/image/2713logo%202.png",
    "https://paruluniversity.ac.in/app/images/post/recruiter/image/5896r8.png",
    "https://paruluniversity.ac.in/app/images/post/recruiter/image/7463logo%208.jpg",
    "https://paruluniversity.ac.in/app/images/post/recruiter/image/9829logo%203.png",
    "https://paruluniversity.ac.in/app/images/post/recruiter/image/9517Page-72-Image-544.png",
    "https://paruluniversity.ac.in/app/images/post/recruiter/image/8195Logo-18.png",
    "https://paruluniversity.ac.in/app/images/post/recruiter/image/5559Logo%201.png",
    "https://paruluniversity.ac.in/app/images/post/recruiter/image/9665BYJUS.jpg",
  ];
  const services_n_facilities = [
    {
      title: "Computer Lab",
      href: "#",
      src: "https://static.wixstatic.com/media/07170d_c1be2e1736a949939041d6b175bd7ccc~mv2.png/v1/fill/w_61,h_61,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/07170d_c1be2e1736a949939041d6b175bd7ccc~mv2.png",
    },
    {
      title: "Free Wifi",
      href: "#",
      src: "https://static.wixstatic.com/media/07170d_57c974e6fcf74e94986a73488839b01f~mv2.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/07170d_57c974e6fcf74e94986a73488839b01f~mv2.png",
    },
    {
      title: "Finest Faculty",
      href: "#",
      src: "https://static.wixstatic.com/media/07170d_1f62aa1d0685416d819c1e7b634115ba~mv2.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/07170d_1f62aa1d0685416d819c1e7b634115ba~mv2.png",
    },
    {
      title: "Banking Services",
      href: "#",
      src: "https://static.wixstatic.com/media/07170d_2d704803a9f748948d57dc5ff06e329d~mv2.png/v1/fill/w_66,h_66,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/07170d_2d704803a9f748948d57dc5ff06e329d~mv2.png",
    },
    {
      title: "Placement Assistance",
      href: "#",
      src: "https://static.wixstatic.com/media/07170d_ed49cd9978784c63ab6b3e2dd737de90~mv2.png/v1/fill/w_61,h_61,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/care.png",
    },
    {
      title: "Hostel Facility",
      href: "#",
      src: "https://static.wixstatic.com/media/07170d_16ee1afcef704111a82cbcd8e41540fc~mv2.png/v1/fill/w_61,h_61,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/hotel.png",
    },
    {
      title: "",
      href: "#",
      src: "",
    },
    {
      title: "",
      href: "#",
      src: "",
    },
  ];

  // $(window).on("scroll", function () {
  //   var scroll = $(window).scrollTop();

  //   // Determine the point of trigger
  //   if (scroll >= 100) {
  //     // Adjust this value based on when you want the animation to start
  //     $(".animated-box").animate(
  //       {
  //         marginTop: "0px",
  //         opacity: 1,
  //       },
  //       1000
  //     ); // 1000 milliseconds for animation
  //   }
  // });

  $(window).on("scroll", function () {
    var div1Position = $("#call_elem_2").offset().top;
    var div2Position = $("#animated_box").offset().top;
    var scrollPosition = $(this).scrollTop();
    if (scrollPosition > div1Position) {
      // Apply animation to div1
      $(".animated-box").animate(
        {
          marginTop: "0px",
          opacity: 1,
        },
        1000
      ); // 1000 milliseconds for animation
    }

    if (scrollPosition > 200) {
      // Execute your custom logic when scrolled beyond 200 pixels
      console.log("Scrolled beyond 200 pixels!");
    }
    if (scrollPosition < 200) {
      // Execute your custom logic when scrolled beyond 200 pixels
      console.log("Scrolled below 200 pixels!");
    }
  });

  return (
    <>
      <Header />
      <section>
        <div id="call_elem_2"></div>
        <ImageSlider images={images} i1terval={3000} />

        <div
          id="animated_box"
          class="relative pt-60 text-center h-[400px] bg-pink-200 text-black"
        >
          <div className="animated-box">
            <h1 className="font-railway text-sky-900 font-bold text-3xl">
              New Steps Technology Ease your Study
            </h1>
            <h1 className="font-open-sans   font-bold text-7xl">
              Services & Facillities
            </h1>
            <div className="grid grid-cols-6 gap-8 justify-items-center mt-10">
              {services_n_facilities.map((service, index) => (
                <div>
                  <a href={service.href} className="grid">
                    <img
                      width={60}
                      className="justify-self-center"
                      src={service.src}
                    />
                    <h1 className="font-open-sans text-center font-semibold">
                      {service.title}
                    </h1>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          id="newsprofile"
          className="flex flex-3 gap-4 h-[500px] bg-white p-3"
        >
          <div className="w-3/12  bg-pink-100 p-1">
            <h1 className="text-2xl w-fit font-bold ml-0 m-2 font-railway text-sky-900">
              <span className="bg-gray-300 ">Quick Links</span>
            </h1>
            <h2 className="w-full h-[3px] -mt-6 mb-5  bg-red-500"></h2>
            <ul>
              <li className="h-14 bg-gray-400 p-2 w-full flex">
                <img src="	https://ddugu.ac.in/newweb/images/student2.png" />
                <h6 className="pt-2 text-xl">Students Facilities</h6>
              </li>
            </ul>
          </div>
          <div className="w-6/12 bg-pink-200 p-1">
            <h1 className="text-2xl w-fit font-bold ml-0 m-2 font-railway text-sky-900">
              <span className="bg-gray-300 ">Notice & Circulars</span>
            </h1>
            <h2 className="w-full h-[3px]  -mt-6 mb-7  bg-red-500"></h2>

            <VerticalMode></VerticalMode>
          </div>
          <div className="w-3/12 bg-pink-100 p-1">
            <h1 className="text-2xl w-fit font-bold ml-0 m-2 font-railway text-sky-900">
              <span className="bg-gray-300 ">Profile</span>
            </h1>
            <h2 className="w-full h-[3px] -mt-6 mb-5  bg-red-500"></h2>
            <ul>
              <li className="h-auto bg-white p-2 w-full grid grid-cols-1 justify-items-center">
                <div className="rounded-full h-28 w-28 overflow-hidden p-2 bg-sky-300">
                  <img
                    height={104}
                    width={104}
                    src="https://ddugu.ac.in/newweb/images/student2.png"
                  />
                </div>
                <h6 className="pt-2 text-slate-900 font-open-sans font-semibold text-sm ">
                  Dr.Om Prakash Singh
                </h6>
                <p className="text-sm text-slate-900  font-roboto font-light">
                  About the candidate above{" "}
                </p>
              </li>
              <li className="h-5 hover:bg-sky-800 cursor-pointer text-sm font-railway font-semibold text-center bg-sky-900 w-full">
                Profile
              </li>
              <li className="h-auto mt-3 bg-white p-2 w-full grid grid-cols-1 justify-items-center">
                <div className="rounded-full h-28 w-28 overflow-hidden p-2 bg-sky-300">
                  <img
                    height={104}
                    width={104}
                    src="https://ddugu.ac.in/newweb/images/student2.png"
                  />
                </div>
                <h6 className="pt-2 text-slate-900 font-open-sans font-semibold text-sm ">
                  Dr.Om Prakash Singh
                </h6>
                <p className="text-sm text-slate-900  font-roboto font-light">
                  About the candidate above{" "}
                </p>
              </li>
              <li className="h-5 hover:bg-sky-800 cursor-pointer text-sm font-railway font-semibold text-center bg-sky-900 w-full">
                Profile
              </li>
            </ul>
          </div>
        </div>
        {/* News Event Profile */}

        <div className="text-center bg-white text-black">
          <br></br>

          <div className="grid grid-cols-2 h-[500px]">
            <div className="text-slate-900 bg-gray-100 text-left pl-10">
              <h1 className="mt-10 text-5xl font-bold font-railway">
                Impeccable Placements
              </h1>
              <p className="text-lg  font-open-sans">
                Education That Goes Where Your Dreams Will Not Take You
              </p>
              <div className="flex flex-2 gap-8 mt-5">
                <img
                  className="h-16 mt-4"
                  src="https://paruluniversity.ac.in/app/201911/images/post/section_container/icon/placement-1-icon.png"
                />
                <div>
                  <div className="border-l-2 border-t-2 h-6 w-6 border-gray-500"></div>
                  <h1 className="ml-2 text-md font-bold font-railway">
                    2400+ Placements done{" "}
                  </h1>
                  <p className="ml-2 text-sm font-open-sans">
                    We continuously strive towards facilitating campus-drives
                    where eminent companies offer the most worth-while career
                    opportunities.
                  </p>
                </div>
              </div>
              <div className="flex flex-2 gap-8 mt-5">
                <img
                  className="h-16 mt-4"
                  src="https://paruluniversity.ac.in/app/201911/images/post/section_container/icon/placement-2-icon.png"
                />
                <div>
                  <div className="border-l-2 border-t-2 h-6 w-6 border-gray-500"></div>
                  <h1 className="ml-2 text-md font-bold font-railway">
                    30+ LPA Milestone Packages
                  </h1>
                  <p className="ml-2 text-sm font-open-sans pr-3">
                    Our students annually avail the most lucrative jobs which
                    offer lucrative packages in the most distinguished
                    industries.
                  </p>
                </div>
              </div>
              <div className="">
                <ImageSliderDrag images={placements} />
              </div>
            </div>
            <div>
              <div className="flex flex-2">
                <div className="grid grid-cols-2 h-[250px]">
                  <div className="overflow-hidden">
                    <img
                      className="object-cover object-center h-[250px] hover:h-[280px]"
                      src="https://static.wixstatic.com/media/07170d_8bb0631803964ac7b18c3130aebd0b26~mv2.jpg/v1/fill/w_285,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PHOTO-2022-11-28-19-40-33.jpg"
                    />
                  </div>
                  <div className="bg-sky-900 text-2xl font-bold pt-3 text-white relative h-[250px] w-full font-railway">
                    Devanand Pandey <br></br>
                    <br></br>
                    <small className="text-sm font-roboto font-light">
                      Software Consultant Engineering(tech lead)
                    </small>
                    <img
                      className="p-10 pt-3"
                      height={250}
                      width={190}
                      src="https://www.globallogic.com/wp-content/uploads/2021/07/Logo_GL-Hitachi_White-web.svg"
                    />
                    <div className=" bg-sky-900 h-10 absolute inset-y-0 mt-[70px] ml-[-20px] left-0 w-10   rotate-45"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 h-[250px]">
                  <div className="overflow-hidden">
                    <img
                      className="object-cover object-center h-[250px] hover:h-[280px]"
                      src="https://static.wixstatic.com/media/07170d_1283eb84c12645f69ae81d0428e5c435~mv2.jpg/v1/crop/x_7,y_0,w_398,h_531/fill/w_285,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DSC_1235_JPG.jpg"
                    />
                  </div>
                  <div className="bg-sky-900 text-2xl font-bold pt-3 text-white relative h-[250px] w-full font-railway">
                    Samridhi Srivastava <br></br>
                    <small className="text-sm font-roboto font-light">
                      Data Engineer
                    </small>
                    <img
                      className="p-10 pt-3"
                      height={250}
                      width={190}
                      src="https://www.coforge.com/hs-fs/hubfs/Imported%20sitepage%20images/dark_coforge_logo.png?width=418&height=94&name=dark_coforge_logo.png"
                    />
                    <div className=" bg-sky-900 h-10 absolute inset-y-0 mt-[70px] ml-[-20px] left-0 w-10   rotate-45"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-2 ">
                <div className="grid grid-cols-2 h-[250px]">
                  <div className="bg-sky-900 text-2xl font-bold pt-3 text-white relative h-[250px] w-full font-railway">
                    Arun Srivastava <br></br>
                    <br></br>
                    <small className="text-sm font-roboto  font-light">
                      Project Manager
                    </small>
                    <img
                      className="p-10 pt-3"
                      height={250}
                      width={190}
                      src="https://www.proind.in/wp-content/uploads/2019/01/logo.png"
                    />
                    <div className=" bg-sky-900 h-10 absolute inset-y-0 mt-[70px] mr-[-20px] right-0 w-10  z-10 rotate-45"></div>
                  </div>
                  <div className="overflow-hidden">
                    <img
                      className="object-cover object-center h-[250px] hover:h-[280px]"
                      src="https://static.wixstatic.com/media/07170d_2b85fb7a875b4f2ab791a5ac7d00483e~mv2.jpg/v1/crop/x_66,y_0,w_413,h_550/fill/w_285,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PHOTO-2022-11-28-19-45-43_edited.jpg"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 h-[250px]">
                  <div className="bg-sky-900 text-2xl font-bold pt-3 text-white relative h-[250px] w-full font-railway">
                    Vishnu Gupta<br></br>
                    <small className="text-sm font-roboto font-light">
                      Assistant Manager
                    </small>
                    <img
                      className="p-10 pt-3"
                      height={250}
                      width={190}
                      src="https://www.shreecement.com/public/front_assets/images/logo.jpg"
                    />
                    <div className=" bg-sky-900 h-10 absolute inset-y-0 mt-[70px] mr-[-20px] right-0 w-10   rotate-45"></div>
                  </div>
                  <div className="overflow-hidden">
                    <img
                      className="object-cover object-center h-[250px] hover:h-[280px]"
                      src="https://static.wixstatic.com/media/07170d_8fd3122108dd4b70b653f2cf9eb6c30d~mv2.jpg/v1/crop/x_60,y_0,w_1200,h_1600/fill/w_285,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/PHOTO-2022-11-28-19-42-04.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="font-railway font-bold pt-12 mt-1 text-white text-8xl h-56 bg-sky-900 ">
            New Steps Technology
          </h1>
          <div className="flex h-96 p-3">
            <div className="bg-sky-900 w-2/5 text-white text-left p-5">
              <h1 className="mt-10 text-7xl font-bold text-orange-400 font-railway">
                {" "}
                Our Partners
              </h1>
              <p className="text-xl mt-5 font-open-sans">
                We have tie-ups from different reputed universities accross
                India.
                <br></br>
                Our aim is the get the best for our students and always will .
                <br></br>
                There are courses offered by universities linked with us Some of
                universities are described as ..
              </p>
            </div>
            <div className="grid grid-cols-4 w-3/5 gap-4">
              <div>
                <img
                  className="h-28"
                  src="https://static.wixstatic.com/media/07170d_5c13194fc95041e0852da5e3bfeaf5c4~mv2.png/v1/fill/w_581,h_436,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/07170d_5c13194fc95041e0852da5e3bfeaf5c4~mv2.png"
                />
              </div>

              <div>
                <img
                  className="h-28"
                  src="https://static.wixstatic.com/media/07170d_fab7eb8326db459d9054cedb3603a947~mv2.jpg/v1/fill/w_300,h_300,al_c,q_80,enc_auto/07170d_fab7eb8326db459d9054cedb3603a947~mv2.jpg"
                />
              </div>

              <div>
                <img
                  className="h-28"
                  src="https://static.wixstatic.com/media/07170d_3f39d16ef0ab43c18fd7614a38e4c329~mv2.jpg/v1/fill/w_436,h_436,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/07170d_3f39d16ef0ab43c18fd7614a38e4c329~mv2.jpg"
                />
              </div>

              <div>
                <img
                  className="h-28"
                  src="https://static.wixstatic.com/media/07170d_9506596d72f84c42a87c9a1932bb561c~mv2.jpg/v1/fill/w_480,h_436,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/07170d_9506596d72f84c42a87c9a1932bb561c~mv2.jpg"
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-railway font-semibold text-red-600">
              Our Students Speak
            </h1>
            <div className="flex flex-3 mt-5">
              <div className="w-[38%]"></div>
              <div className="w-80 h-1 bg-red-600"></div>
              <div></div>
            </div>
            <div className="grid grid-cols-1 gap-4 p-10">
              <SimpleSlider />
            </div>
          </div>
        </div>
        <div>{/* <ImageSliderDrag images={images} /> */}</div>
      </section>{" "}
      <Footer />
      {/* IMPORT PLUGINS */}
      <Enquiry />
    </>
  );
}

export default Home;
