import React from "react";

function ActivityCorner() {
  const activities = [
    {
      title: "Yoga Day",
      discription: `
              Yoga is like a superpower for our minds and bodies. It teaches us
              to control our breath, stay calm, and boost focus.`,
      href: "#",
      src: "/yogaday-2.jpg",
    },
    {
      title: "Rangoli Day",
      discription: `Rangoli is a beautiful Indian art form used for decoration and as a welcoming gesture.
 
`,
      href: "#",
      src: "/rangoli.jpg",
    },
    {
      title: "Sports Day",
      discription: `Sports Day at school is a fun-filled event where students showcase their athletic talents through races, games, and teamwork.
`,
      href: "#",
      src: "/sports-day.jpg",
    },
    {
      title: "Independence Day",
      discription: `Independence Day in schools is celebrated to honor freedom fighters, instill patriotism, and foster unity.

 
`,
      href: "#",
      src: "/independenceday.jpg",
    },
  ];
  return (
    <div>
      <div className=" p-10 mt-10">
        <h1 className="text-2xl font-poppins-bold">Activity Corner</h1>
        <div className=" h-auto flex flex-row mt-8 gap-6">
          {activities.map((activity, key) => {
            return (
              <div className="basis-1/4 h-auto ">
                <div className="bg-gray-400 h-auto rounded-md">
                  <img
                    src={activity.src}
                    className="h-auto w-full rounded-md"
                  ></img>
                </div>
                <h1 className="text-lg font-poppins-bold mt-1">
                  {activity.title}
                </h1>
                <p className="font-poppins-regular">{activity.discription}</p>
                <a
                  className="text-[#145589] font-poppins-bold"
                  href={activity.href}
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

export default ActivityCorner;
