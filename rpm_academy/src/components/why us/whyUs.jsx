import React from "react";

function WhyUs() {
  const whyUs = [
    {
      title: "Curriculum",
      discription:
        "Igniting minds, empowering futures - Our curriculum nurtures holistic development and empowers students to excel academically, creatively, and personally.",
      src: "/icons8-curriculum-100.png",
    },
    {
      title: "Faculty",
      discription:
        "We have a team of highly qualified and experienced teachers who are dedicated to delivering the best quality education and imparting knowledge effectively.",
      src: "/icons8-curriculum-100.png",
    },
    {
      title: "Facility",
      discription:
        "The academy provides a modern and stimulating learning environment with excellent amenities, attractive infrastructure, and access to laboratories, a library, and smart classes.",
      src: "/icons8-school-64.png",
    },
    {
      title: "Events",
      discription:
        "Different activities & events were here in school that enhance the overall development of child. Like debate, PTM, cultural fests, theatre etc.",
      src: "/icons8-events-100.png",
    },
  ];
  return (
    <div>
      {" "}
      <div className="absolute w-full bottom-0">
        <div className="flex flex-row m-10  gap-3 mb-0 rounded-t-md bg-[#145589] h-54 opacity-85">
          {whyUs.map((item, key) => {
            return (
              <div className="basis-1/4 text-gray-50 gap-6  p-4">
                <div className="flex flex-row-reverse ">
                  <div className="w-1/4 mt-1 pr-4">
                    <img
                      className="h-12 w-12 float-right mr-2"
                      src={item.src}
                    ></img>
                  </div>
                  <h1 className="text-2xl w-3/4 pt-6 text-left">
                    {item.title}
                  </h1>
                </div>
                <p className="text-left pt-3 text-sm font-normal">
                  {item.discription}
                </p>
              </div>
            );
          })}
        </div>
        {/* <h1 className=" text-gray-50 text-4xl bg-yellow-500">
Best <span className="text-[#145589] text-8xl">educational</span>
environment for{" "}
<span className="text-[#89146c] text-8xl">your</span> child
</h1> */}
      </div>
    </div>
  );
}

export default WhyUs;
