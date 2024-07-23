import React from "react";

function UserProfileBox() {
  const userProfile = [
    {
      name: "Shri Ajay Kumar Shahi",
      href: "#",
      role: "Chairman",
      src: "/shri_ajay_shahi_dp.jpg",
    },
    {
      name: "Smt. Aradhana Shahi",
      href: "#",
      role: "Director",
      src: "https://img.icons8.com/bubbles/50/user.png",
    },
  ];
  return (
    <div>
      <ul>
        {userProfile.map((user, key) => {
          return (
            <li className="flex ml-4 mt-4">
              <a href="#" className="flex gap-4 ">
                <div className="border border-pink-600 rounded-full h-16 w-16 xl:h-24 xl:w-24 xl:text-2xl overflow-hidden">
                  <img
                    className="h-16 w-16 xl:h-24 xl:w-24 "
                    src={user.src}
                    alt={user.name + "photo"}
                  />
                </div>
                <div className="flex-col mt-3 xl:text-2xl">
                  <h4 className="font-bold font-raleway">{user.name}</h4>
                  <p>{user.role}</p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UserProfileBox;
