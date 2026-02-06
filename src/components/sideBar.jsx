import React from "react";
import logoicon from "../assets/icon.svg";
import dashicon from "../assets/icondash1.svg";
import VectorIcon from "../assets/Vecto.svg";
import dashicon2 from "../assets/icondash2.svg";
import dashicon3 from "../assets/icondash3.svg";
import pageicon from "../assets/pageicon.svg";
import pageicon1 from "../assets/pageicon1.svg";
import pageicon2 from "../assets/pageicon2.svg";
import pageicon3 from "../assets/pageicon3.svg";
import pageicon4 from "../assets/pageicon4.svg";
import arrowline from "../assets/ArrowLineRight-s.svg";

const sideBar = () => {
  return (
    <div className="flex justify-start">
      <div className="h-[1024px] w-[212px] rounded-tl-3xl rounded-bl-3xl bg-gray-50 shadow-lg">
        <div className=" h-[180px] w-[172px] flex flex-col items-start  bg-white mx-auto    ">
          <div className="w-[180px] h-[28px] flex flex-row  ml-2 mt-3 gap-2">
            <img src={logoicon} alt="mainlogicon" />
            <h1 className="text-black font-bold text-lg ">ByeWind</h1>
          </div>
          <div className="w-[180px] h-[28px] flex flex-row   mt-3 gap-5  ">
            <button className="w-[61px] h-[20px] text-gray-500 ml-2">
              Favorites
            </button>
            <button className="w-[61px] h-[20px] text-gray-400 ml-2">
              Recently
            </button>
          </div>

          <div className="w-[180px] h-[28px] flex flex-row   mt-3 gap-5  ">
            <img
              src={VectorIcon}
              alt="vector icon"
              className="ml-2 mt-2 w-[6px] h-[6px]"
            />
            <button className="w-[61px] h-[20px]  ml-2">Overview</button>
          </div>
          <div className="w-[180px] h-[28px] flex flex-row   mt-3 gap-5  ">
            <img
              src={VectorIcon}
              alt="vector icon"
              className="ml-2 mt-2 w-[6px] h-[6px]"
            />
            <button className="w-[61px] h-[20px] ml-2">Projects</button>
          </div>

          <div className=" h-[180px] w-[172px] flex flex-col items-start  bg-white mx-auto mt-8   ">
            <div className="w-[180px] h-[28px] flex flex-row  ml-2 mt-3 gap-2">
              <h1 className="text-gray-700   text-lg ml-2">Dashbaord</h1>
            </div>
            <div className="w-[180px] h-[28px] flex flex-row   mt-3 gap-2 bg-gray-200  rounded-lg ">
              <img src={dashicon} alt="dashboard icon" className="ml-8" />
              <button className="w-[61px] h-[20px] text-gray-500 ml-2">
                Overview
              </button>
            </div>

            <div className="w-[180px] h-[28px] flex flex-row   mt-3 gap-2  ">
              <img src={arrowline} alt="dashboard icon" className="ml-2" />
              <img src={dashicon2} alt="dashboard icon" className="ml-2" />
              <button className="w-[61px] h-[20px]  ">eCommerce</button>
            </div>
            <div className="w-[180px] h-[28px] flex flex-row   mt-3 gap-2  ">
              <img src={arrowline} alt="dashboard icon" className="ml-2" />
              <img src={dashicon3} alt="dashboard icon" className="ml-2" />
              <button className="w-[61px] h-[20px]  ">Projects</button>
            </div>
          </div>

          <div className=" h-[180px] w-[172px] flex flex-col items-start  bg-white mx-auto mt-10   ">
            <div className="w-[180px] h-auto flex flex-row  ml-2 mt-3 gap-2">
              <h1 className="text-gray-700  text-lg ml-2">Pages</h1>
            </div>
            <div className="w-[180px] h-[28px] flex flex-row   mt-3 gap-2  ">
              <img src={arrowline} alt="dashboard icon" className="ml-2" />
              <img src={pageicon} alt="dashboard icon" className="ml-2" />
              <button className="w-[61px] h-[20px] ">UserProfile</button>
            </div>

            <div className="w-[180px] h-[28px] flex flex-row   mt-3 gap-2  ">
              <img src={arrowline} alt="dashboard icon" className="ml-2" />
              <img src={pageicon1} alt="dashboard icon" className="ml-2" />
              <button className="w-[61px] h-[20px]  ">Account</button>
            </div>
            <div className="w-[180px] h-[28px] flex flex-row   mt-3 gap-2  ">
              <img src={arrowline} alt="dashboard icon" className="ml-2" />
              <img src={pageicon2} alt="dashboard icon" className="ml-2" />
              <button className="w-[61px] h-[20px]  ">Corporate</button>
            </div>

            <div className="w-[180px] h-[28px] flex flex-row   mt-3 gap-2  ">
              <img src={arrowline} alt="dashboard icon" className="ml-2" />
              <img src={pageicon3} alt="dashboard icon" className="ml-2" />
              <button className="w-[61px] h-[20px]  ">Blog</button>
            </div>

            <div className="w-[180px] h-[28px] flex flex-row   mt-3 gap-2  ">
              <img src={arrowline} alt="dashboard icon" className="ml-2" />
              <img src={pageicon4} alt="dashboard icon" className="ml-2" />
              <button className="w-[61px] h-[20px]  ">Social</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sideBar;
