import React from "react";

function AchievementAwards() {
  const achievements = [
    {
      title: "Academic Achievements",
      discription: `Independence Day in schools is celebrated to honor freedom fighters, instill patriotism, and foster unity.
    
     
    `,
      href: "#",
      src: "/academic_achievement.jpg",
    },
    {
      title: "IIT-JEE Mains Result",
      discription: `Rangoli is a beautiful Indian art form used for decoration and as a welcoming gesture.
     
    `,
      href: "#",
      src: "/OUR-TOPPER4-1-768x487.jpg",
    },
    {
      title: "NEET UG Result",
      discription: `Sports Day at school is a fun-filled event where students showcase their athletic talents through races, games, and teamwork.
    `,
      href: "#",
      src: "/OUR-TOPPER5-1-768x487.jpg",
    },
  ];
  return (
    <div>
      {" "}
      <div className="h-auto bg-gray-50 p-10 text-center">
        <div className="bg-[url('/R.png')] h-40 w-full text-center bg-contain bg-no-repeat  font-poppins-semibold bg-top">
          <h2 className="text-2xl  font-light">LET'S SEE OUR</h2>
          <h1 className="text-3xl  text-[#145589] pt-8">
            ACIEVEMENTS & AWARDS
          </h1>
        </div>
        <p className=" text-xl  text-left font-serif italic font-thin">
          We have over 31 years of successful running academics session
          experience with record breaking student’s performance.We have over 31
          years of successful running academics session experience with record
          breaking student’s performance.We have over 31 years of successful
          running academics session experience with record breaking student’s
          performance.We have over 31 years of successful running academics
          session experience with record breaking student’s performance.
        </p>
        <div className="flex flex-row mt-6">
          <div className="basis-2/3 text-left font-poppins-semibold">
            <h1 className=" text-3xl mt-5">Awards & Recognition</h1>

            <p className=" text-xl mt-4 text-left font-serif italic font-thin">
              We have over 31 years of successful running academics session
              experience with record breaking student’s performance.We have over
              31 years of successful running academics session experience with
              record breaking student’s performance.We have over 31 years of
              successful running academics session experience with record
              breaking student’s performance.We have over 31 years of successful
              running academics session experience with record breaking
              student’s performance.
            </p>
            <a href="#">
              <button className="rounded-full text-gray-50 mt-8 w-32 h-12 bg-[#145589]">
                Know more
              </button>
            </a>
          </div>
          <div className="basis-1/3 rounded-md">
            <img
              className=" rounded-md h-full"
              src="/jagaran execellence awards.jpg"
            ></img>
          </div>
        </div>
        <div className=" h-auto text-left flex flex-row mt-8 gap-6">
          {achievements.map((achievement, key) => {
            return (
              <div className="basis-1/3 h-auto ">
                <div className="bg-gray-400 h-auto rounded-md">
                  <img
                    src={achievement.src}
                    className="h-auto w-full rounded-md"
                  ></img>
                </div>
                <h1 className="text-lg font-poppins-bold mt-1">
                  {achievement.title}
                </h1>
                <p className="font-poppins-regular">
                  {achievement.discription}
                </p>
                <a
                  className="text-[#145589] font-poppins-bold"
                  href={achievement.href}
                >
                  Know more
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AchievementAwards;
