import "./App.css";
import UserProfileBox from "./components/user profile/userProfile";
import NoticeBox from "./components/notice box/noticeBox";
import DirectorMessage from "./components/Admin Message Box/directorMessage";
import RpmGroupofSchool from "./components/RPM at glance/rpmGroupofSchool";
import ActivityCorner from "./components/user profile/activity corner/activityCorner";
import TextDesign, { TextDesign2 } from "./components/2D Design/textDesign";
import WhyUs from "./components/why us/whyUs";
import AchievementAwards from "./components/awardsNachievement/achievements&awards";
import Branches from "./components/branch/branches";
import ImpWebsites from "./components/websites/impWebsites";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <Header />
      <div class="flex flex-row">
        <div class=" w-[72%] overflow-hidden relative bg-gray-500 h-[auto]">
          <img
            className="opacity-75"
            src="https://rpmacademy.org/wp-content/uploads/2023/07/5_1-scaled.jpg"
          ></img>
        </div>
        <div className="w-[28%]  bg-gray-300">
          <UserProfileBox />
        </div>
      </div>

      <div class="flex flex-row gap-5 p-5 bg-gray-200 text-gray-50 mt-4 rounded-md m-1 h-[700px]">
        {/* SLider ANd Admin User Profile */}
        <div class="basis-1/2 h-[650px] bg-[#FFE497] m-4 rounded-md">
          <div className="h-20 bg-[#145589] text-center rounded-t-md">
            <ul className="flex text-3xl  font-poppins-bold">
              <li className="w-1/2 p-4 bg-[#FFE497] text-[#145589]  rounded-t-md m-2">
                Notice
              </li>
              <li className="w-1/2 p-5">Event</li>
            </ul>
          </div>
          {/* Noticebox Here */}
          <NoticeBox />
        </div>
        <div class="basis-1/2 p-5 text-center">
          <DirectorMessage />
        </div>
      </div>

      {/* RPM at a Glance */}
      <RpmGroupofSchool />

      {/* Activity Corner */}
      <ActivityCorner />

      <div className="h-[800px] bg-no-repeat bg-cover bg-[url('/branch_04-768x400.jpg')] relative">
        <div className="bg-[url('/R.png')] h-40 w-full text-center bg-contain bg-no-repeat  font-poppins-semibold bg-top">
          <h1 className="text-3xl  text-[#145589] pt-16">Why Us ?</h1>
          <p className="mt-28 text-pink-500 font-dancing-script text-3xl ">
            a branch of{" "}
            <span className="text-4xl">RPM Academy - group of school</span>
          </p>
          <TextDesign />
          <WhyUs />
        </div>
      </div>

      {/* Achievements & Awards */}
      <AchievementAwards />
      <Branches />
      <ImpWebsites />
      <Footer />
    </>
  );
}

export default App;
