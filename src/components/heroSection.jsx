import React, { useState } from "react";
import arrowIcon from "../assets/ArrowLineDown2.svg";
import heroIcon from "../assets/heroIcon.svg";
import AnalyticsChart from "../components/chatSection.jsx";
import TrafficByDevice from "../components/barchat.jsx";
import TrafficByLocation from "../components/taficByLocation.jsx";
const heroSection = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleArrowClick = () => {
    setDropdownOpen(!dropdownOpen);
    console.log("Dropdown toggled:", !dropdownOpen);
  };
  return (
    <div className=" w-[948px] h-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-black font-semibold ml-8">Overview</h1>
        <div className="items-center justify-center flex gap-2  mr-8">
          <p className="text-black">Today</p>
          <button
            onClick={handleArrowClick}
            className="transition-transform duration-300"
            style={{
              transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <img src={arrowIcon} alt="signIcon" className="mt-1" />
          </button>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-4   mt-6  ">
          <div className="bg-[#EDEEFC]  w-[202px] h-[112px] rounded-lg ml-[28px]">
            <div className="mx-6 mt-6">
              <p>Views</p>
            </div>
            <div className="mx-6 mb-6  flex items-center gap-3">
              <p className="text-[24px] font-semibold">7,265</p>
              <p>+11.01%</p>
              <img src={heroIcon} alt="iconHero" />
            </div>
          </div>

          <div className="bg-[#E6F1FD]  w-[202px] h-[112px]  rounded-lg  ml-[22px]">
            <div className="mx-6 mt-6">
              <p>Visits</p>
            </div>
            <div className="mx-6 mb-6  flex items-center gap-3">
              <p className="text-[24px] font-semibold">7,265</p>
              <p>+11.01%</p>
              <img src={heroIcon} alt="iconHero" />
            </div>
          </div>

          <div className="bg-[#EDEEFC]  w-[202px] h-[112px] rounded-lg ml-[16px]">
            <div className="mx-6 mt-6">
              <p>New users</p>
            </div>
            <div className="mx-6 mb-6  flex items-center gap-3">
              <p className="text-[24px] font-semibold">7,265</p>
              <p>+11.01%</p>
              <img src={heroIcon} alt="iconHero" />
            </div>
          </div>
          <div className="bg-[#E6F1FD]  w-[202px] h-[112px] rounded-lg  ml-[1px] ">
            <div className="mx-6 mt-6">
              <p>Active Users</p>
            </div>
            <div className="mx-6 mb-6  flex items-center gap-3">
              <p className="text-[24px] font-semibold">7,265</p>
              <p>+11.01%</p>
              <img src={heroIcon} alt="iconHero" />
            </div>
          </div>
        </div>
        <div className="flex  gap-[28px] mt-[28px] ">
          <div className="w-[662px] h-[330px] bg-[#F9F9FA] rounded-lg ">
            <div className="w-[614px] h-[20px] mt-[24px] mx-[24px]  rounded-lg ">
              <div className="flex ml-6 ">
                <div className="flex items-center justify-center gap-6 text-gray-600">
                  <button className="font-semibold text-black">
                    Total Users
                  </button>
                  <button>Total Projects</button>
                  <button>Operating Status</button>
                  <div>
                    <div className="flex items-start justify-center gap-6  ">
                      <button className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-black rounded-full"></span>
                        This year
                      </button>
                      <button className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#A0BCE8] rounded-full"></span>
                        Last year
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <AnalyticsChart />
              </div>
            </div>
          </div>

          <div className="w-[202px] h-[330px] bg-[#F9F9FA] rounded-lg ">
            <div className="flex items-center justify-start mt-[24px] text-black font-semibold ml-6">
              <p>Traffic by Website</p>
            </div>
            <div className="w-[154px] ml-6 mb-6 mr-6">
              <div className="flex flex-col gap-6">
                {/* Google */}
                <div className="flex items-center justify-between gap-3">
                  <p className="w-16 mt-3">Google</p>
                  <div className="flex gap-1 mt-3">
                    <div className="h-1.5 w-5 bg-gray-600 rounded"></div>
                    <div className="h-1.5 w-6 bg-gray-500 rounded"></div>
                    <div className="h-1.5 w-8 bg-gray-400 rounded"></div>
                  </div>
                </div>

                {/* YouTube */}
                <div className="flex items-center justify-between gap-3">
                  <p className="w-16">YouTube</p>
                  <div className="flex gap-1">
                    <div className="h-1.5 w-5 bg-gray-600 rounded"></div>
                    <div className="h-1.5 w-6 bg-gray-500 rounded"></div>
                    <div className="h-1.5 w-8 bg-gray-400 rounded"></div>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-center justify-between gap-3">
                  <p className="w-16">Instagram</p>
                  <div className="flex gap-1">
                    <div className="h-1.5 w-5 bg-gray-600 rounded"></div>
                    <div className="h-1.5 w-6 bg-gray-500 rounded"></div>
                    <div className="h-1.5 w-8 bg-gray-400 rounded"></div>
                  </div>
                </div>

                {/* Pinterest */}
                <div className="flex items-center justify-between gap-3">
                  <p className="w-16">Pinterest</p>
                  <div className="flex gap-1">
                    <div className="h-1.5 w-5 bg-gray-600 rounded"></div>
                    <div className="h-1.5 w-6 bg-gray-500 rounded"></div>
                    <div className="h-1.5 w-8 bg-gray-400 rounded"></div>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex items-center justify-between gap-3">
                  <p className="w-16">Facebook</p>
                  <div className="flex gap-1">
                    <div className="h-1.5 w-5 bg-gray-600 rounded"></div>
                    <div className="h-1.5 w-6 bg-gray-500 rounded"></div>
                    <div className="h-1.5 w-8 bg-gray-400 rounded"></div>
                  </div>
                </div>

                {/* Twitter */}
                <div className="flex items-center justify-between gap-3">
                  <p className="w-16">Twitter</p>
                  <div className="flex gap-1 ml-4">
                    <div className="h-1.5 w-5 bg-gray-600 rounded"></div>
                    <div className="h-1.5 w-6 bg-gray-500 rounded"></div>
                    <div className="h-1.5 w-8 bg-gray-400 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-start">
        <div className="flex mt-8 ml-0 gap-6">
          <div className=" ">
            <TrafficByDevice />
          </div>

          <div className="w-[432px] h-[280px] ">
            <TrafficByLocation />
          </div>
        </div>
       
      </div>
<div className="w-[892px] h-[0px] mt-8 ml-12 text-black font-semibold bg-[#F9F9FA] rounded-lg
    shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">

          <p>
            Marketing & SEO
          </p>
        </div>
    </div>
  );
};

export default heroSection;
