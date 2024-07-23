import React from "react";

function NoticeBox() {
  const notices = [
    {
      date: `April 14 , 2025 | 08:00 am - Thursday`,
      notice:
        "Dear, Students the school will remain close on 14 April 2025 due to heavy rain.the school will remain close on 14 April 2025 due to heavy rain.the school will remain close on 14 April 2025 due to heavy rain.the school will remain close on 14 April 2025 due to heavy rain.",
      href: "#",
    },
    {
      date: `April 14 , 2025 | 08:00 am - Thursday`,
      notice:
        "Dear, Students the school will remain close on 14 April 2025 due to heavy rain.the school will remain close on 14 April 2025 due to heavy rain.the school will remain close on 14 April 2025 due to heavy rain.the school will remain close on 14 April 2025 due to heavy rain.",
      href: "#",
    },
  ];
  return (
    <div>
      {" "}
      <div id="noticeDisplayer" className=" p-5">
        <ul className="m-4 font-poppins-semibold text-center text-black">
          {notices.map((notice, key) => {
            return (
              <li className=" border-b-4 pb-4 mb-4  border-[#145589]">
                <ul className="flex flex-row gap-4">
                  <li className="w-20">
                    <span className="text-xl uppercase">
                      {notice.date.substring(0, 3)}
                    </span>{" "}
                    <br></br>{" "}
                    <span className="text-2xl">
                      {notice.date.substring(5, 8)}
                    </span>
                  </li>
                  <li className="w-auto text-left pt-1">
                    <span className="text-gray-500">{notice.date}</span>
                    <br></br>
                    <span className="text-lg font-medium">{notice.notice}</span>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default NoticeBox;
