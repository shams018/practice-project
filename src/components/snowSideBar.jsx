import React from "react";
import dashicon from "../assets/Icondash1.svg";
import dashicon2 from "../assets/Icondash2.svg";
import dashicon3 from "../assets/Icondash3.svg";
import pageicon from "../assets/pageicon.svg";
import pageicon1 from "../assets/pageicon1.svg";
import pageicon2 from "../assets/pageicon2.svg";
import pageicon3 from "../assets/pageicon3.svg";
import pageicon4 from "../assets/pageicon4.svg";
import snowUi from "../assets/SnowUI.svg";
import unionTxt from "../assets/Union.svg";
import unionT from "../assets/Union1.svg";

const snowSideBar = () => {
  return (
    <>
      <div className="w-[180px] h-[36px] flex flex-row    ">
        <div className="w-[188px] h-[48px] flex items-center ml-12 mt-3">
          <button onClick={() => window.location.reload()}>
            <img
              src={snowUi}
              alt="plus icon"
              className="ml-2 w-[32px] h-[32px]"
            />
          </button>

          <img
            src={unionTxt}
            alt="dashboard icon"
            className="ml-3 w-[60px] h-[20px]"
          />

          <img
            src={unionT}
            alt="dashboard icon"
            className="w-[20px] h-[20px]"
          />
        </div>
      </div>
      <div className="w-[180px] flex flex-col items-start mx-auto mt-8 p-2">
        {/* Overview */}
        <div className="flex items-center w-full h-8 mt-3 gap-2 p-2 cursor-pointer rounded-lg border border-transparent hover:bg-gray-200 hover:border-gray-300 transition-all duration-200">
          <img src={dashicon} alt="dashboard icon" className="w-5 h-5" />
          <button className="">Overview</button>
        </div>

        {/* eCommerce */}
        <div className="flex items-center w-full h-8 mt-3 gap-2 p-2 cursor-pointer rounded-lg border border-transparent hover:bg-gray-200 hover:border-gray-300 transition-all duration-200">
          <img src={dashicon2} alt="dashboard icon" className="w-5 h-5" />
          <button>eCommerce</button>
        </div>

        {/* Projects */}
        <div className="flex items-center w-full h-8 mt-3 gap-2 p-2 cursor-pointer rounded-lg border border-transparent hover:bg-gray-200 hover:border-gray-300 transition-all duration-200">
          <img src={dashicon3} alt="dashboard icon" className="w-5 h-5" />
          <button>Projects</button>
        </div>

        {/* UserProfile */}
        <div className="flex items-center w-full h-8 mt-3 gap-2 p-2 cursor-pointer rounded-lg border border-transparent hover:bg-gray-200 hover:border-gray-300 transition-all duration-200">
          <img src={pageicon} alt="dashboard icon" className="" />
          <button>UserProfile</button>
        </div>

        {/* Account */}
        <div className="flex items-center w-full h-8 mt-3 gap-2 p-2 cursor-pointer rounded-lg border border-transparent hover:bg-gray-200 hover:border-gray-300 transition-all duration-200">
          <img src={pageicon1} alt="dashboard icon" className="" />
          <button>Account</button>
        </div>

        {/* Corporate */}
        <div className="flex items-center w-full h-8 mt-3 gap-2 p-2 cursor-pointer rounded-lg border border-transparent hover:bg-gray-200 hover:border-gray-300 transition-all duration-200">
          <img src={pageicon2} alt="dashboard icon" className="" />
          <button>Corporate</button>
        </div>

        {/* Blog */}
        <div className="flex items-center w-full h-8 mt-3 gap-2 p-2 cursor-pointer rounded-lg border border-transparent hover:bg-gray-200 hover:border-gray-300 transition-all duration-200">
          <img src={pageicon3} alt="dashboard icon" className="" />
          <button>Blog</button>
        </div>

        {/* Social */}
        <div className="flex items-center w-full h-8 mt-3 gap-2 p-2 cursor-pointer rounded-lg border border-transparent hover:bg-gray-200 hover:border-gray-300 transition-all duration-200">
          <img src={pageicon4} alt="dashboard icon" className="" />
          <button>Social</button>
        </div>
      </div>
    </>
  );
};

export default snowSideBar;
