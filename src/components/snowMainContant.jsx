import React from "react";
import heroIcon from "../assets/ArrowRise.svg";
import heroIcon1 from "../assets/ArrowFall.svg";
import arrowIcon from "../assets/ArrowLineDown2.svg";
import chatIcon from "../assets/ChartLine.svg";
import SmoothLineChart from "./snowSmoothLineChat.jsx";
import DeviceBarChart from "./snowDeviceBarChat.jsx";
import DeviceBarChart2 from "./snowDeviceBarChat2.jsx";
import ThinBarChart from "./snowThinChat.jsx";
import contactIcon from "../assets/contactIcon.svg";
import contactIcon1 from "../assets/contactIcon1.svg";
import contactIcon2 from "../assets/contactIcon2.svg";
import contactIcon3 from "../assets/contactIcon3.svg";
import contactIcon4 from "../assets/contactIcon4.svg";



const snowMainContant = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  mt-6  ">
        <div className="bg-[#007AFF]  w-full lg:w-[285px]  h-auto lg:h-[100px]   rounded-3xl text-white gap-2">
          <div className="mx-6 mt-6 flex justify-between items-center gap-2">
            <p>Views</p>
            <div className=" w-full lg:w-[40px]  h-auto lg:h-[28px] rounded-2xl bg-[#FFFFFF33] justify-center items-center flex">
              {" "}
              <img src={heroIcon} alt="iconHero" />
            </div>
          </div>
          <div className="mx-6 mb-6  flex justify-between items-center gap-2 ">
            <p className="text-[24px] font-semibold">7,265</p>
            <p>+11.01%</p>
          </div>
        </div>

        <div className="bg-black   w-full lg:w-[285px]  h-auto lg:h-[100px]  rounded-3xl   text-white gap-2">
          <div className="mx-6 mt-6 flex justify-between items-center gap-2">
            <p>Visits</p>
            <div className="w-full lg:w-[40px]  h-auto lg:h-[28px] rounded-2xl bg-[#FFFFFF33] justify-center items-center flex">
              {" "}
              <img src={heroIcon1} alt="iconHero" />
            </div>
          </div>
          <div className="mx-6 mb-6  flex justify-between items-center gap-2 ">
            <p className="text-[24px] font-semibold">3,671</p>
            <p>-0.03%</p>
          </div>
        </div>

        <div className="bg-[#007AFF]  w-full lg:w-[285px]  h-auto lg:h-[100px] rounded-3xl  text-white gap-2">
          <div className="mx-6 mt-6 flex justify-between items-center gap-2">
            <p>New users</p>
            <div className="w-full lg:w-[40px]  h-auto lg:h-[28px] rounded-2xl bg-[#FFFFFF33] justify-center items-center flex">
              {" "}
              <img src={heroIcon} alt="iconHero" />
            </div>
          </div>
          <div className="mx-6 mb-6  flex justify-between items-center gap-2 ">
            <p className="text-[24px] font-semibold">256</p>
            <p>+15.03%</p>
          </div>
        </div>
        <div className="bg-black   w-full lg:w-[285px]  h-auto lg:h-[100px] rounded-3xl text-white gap-2">
          <div className="mx-6 mt-6 flex justify-between items-center gap-2">
            <p>Active Users</p>
            <div className="w-full lg:w-[40px]  h-auto lg:h-[28px] rounded-2xl bg-[#FFFFFF33] justify-center items-center flex">
              {" "}
              <img src={heroIcon} alt="iconHero" />
            </div>
          </div>
          <div className="mx-6 mb-6  flex justify-between items-center gap-2 ">
            <p className="text-[24px] font-semibold">2,318</p>
            <p>+6.08%</p>
          </div>
        </div>
      </div>

      <div className="pt-6"></div>
      <div className="w-full lg:w-[1188px] max-w-[1188px] h-auto lg:h-[360px] bg-white mx-auto px-2 sm:px-4 mt-6 rounded-lg border-transparent border-2">
        <div className="w-full max-w-[1140px] h-auto lg:h-[40px] mx-auto px-2 sm:px-4 my-4 flex items-center justify-between">
          <div className="flex items-center justify-between gap-6 ">
            <button className="font-semibold text-[#AF52DE]">Users</button>
            <button> Projects</button>
            <button>Operating Status</button>
          </div>

          <div className="flex items-center justify-between gap-6 ">
            <button className="w-[120px] h-[40px]   rounded-xl bg-[#0000000A] flex justify-center items-center gap-4">
              Week
              <img src={arrowIcon} alt="icon" className="w-4 h-4" />
            </button>
            <button className="w-[80px] h-[40px] rounded-xl bg-[#0000000A] flex justify-center items-center gap-4">
              <img src={chatIcon} alt="icon" className="w-4 h-4" />
              <img src={arrowIcon} alt="icon" className="w-4 h-4" />
            </button>

            <button className="w-[40px] h-[40px] rounded-xl bg-[#0000000A] justify-center items-center flex">
              {" "}
              ...{" "}
            </button>
          </div>
        </div>

        <SmoothLineChart />
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mt-4 ml-0 sm:ml-4 px-2 sm:px-0">
        <div className="w-full lg:w-[586px] h-auto lg:h-[272px] bg-white rounded-xl">
          <div className="w-full max-w-[538px] h-[40px] mx-auto px-2 sm:px-4 my-4 flex items-center justify-between">
            <div className="flex items-center justify-between gap-6 ">
              <button className="font-semibold text-[#00C7BE]  hover:scale-110 active:scale-95 transition-all duration-100">
                Device Traffic
              </button>
            </div>

            <div className="flex items-center justify-between gap-6 ">
              <button className="w-[40px] h-[40px] rounded-xl bg-[#0000000A] flex items-center justify-center text-xl leading-none">
                &#8230;
              </button>
            </div>
          </div>
          <DeviceBarChart />
        </div>

        <div className="w-full lg:w-[586px] h-auto lg:h-[272px] bg-white rounded-xl">
          <div className="w-full max-w-[538px] h-[40px] mx-auto px-2 sm:px-4 my-4 flex items-center justify-between">
            <div className="flex items-center justify-between gap-6 ">
              <button className="font-semibold text-[#34C759]  hover:scale-110 active:scale-95 transition-all duration-100">
                Location Traffic
              </button>
            </div>

            <div className="flex items-center justify-between gap-6 ">
              <button className="w-[40px] h-[40px] rounded-xl bg-[#0000000A] flex items-center justify-center text-xl leading-none">
                &#8230;
              </button>
            </div>
          </div>
          <DeviceBarChart2 />
        </div>
      </div>

      <div className="pt-6"></div>
      <div className="w-full lg:w-[1188px] max-w-[1188px] h-auto lg:h-[344px] bg-white mx-auto px-2 sm:px-4 mt-6 rounded-lg border-transparent border-2">
        <div className="w-full max-w-[1140px] h-auto lg:h-[40px] mx-auto px-2 sm:px-4 my-4 flex items-center justify-between">
          <div className="flex items-center justify-between gap-6 ">
            <button className="font-semibold text-[#FF3B30] hover:scale-110 active:scale-95 transition-all duration-100">
              Product Traffic
            </button>
          </div>

          <div className="flex items-center justify-between gap-6 ">
            <button className="">
              <div className="rounded-full w-2 h-2 bg-[#000000] mr-2 inline-block"></div>
              All
            </button>
            <button>
              <div className="rounded-full w-2 h-2 bg-[#00000066] mr-2 inline-block"></div>{" "}
              SnowUI
            </button>
            <button>
              <div className="rounded-full w-2 h-2 bg-[#FF3B30] mr-2 inline-block"></div>{" "}
              Dashboard
            </button>

            <button className="w-[40px] h-[40px] rounded-xl bg-[#0000000A] flex items-center justify-center text-xl leading-none">
              &#8230;
            </button>
          </div>
        </div>
        <ThinBarChart />
      </div>

      <div className="pt-6"></div>
      <div className="w-full lg:w-[1188px] max-w-[1188px] h-auto lg:h-[424px] bg-white mx-auto px-2 sm:px-4 mt-6 rounded-lg border-transparent border-2">
        <div className="w-full max-w-[1140px] h-auto lg:h-[40px] mx-auto px-2 sm:px-4 mt-4 flex items-center justify-between">
          <div className="flex items-center justify-between gap-6 ">
            <button className="font-semibold text-[#00C7BE]  hover:scale-110 active:scale-95 transition-all duration-100">Projects</button>
          </div>

          <div className="flex items-center justify-between gap-6 ">
            <button className="w-[40px] h-[40px] rounded-xl bg-[#0000000A] flex items-center justify-center text-xl leading-none">
              &#8230;
            </button>
          </div>
        </div>
        <div className="w-full max-w-[1140px] h-auto lg:h-[320px] mx-auto px-2 sm:px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
          <div className="w-full h-[320px] p-4 flex flex-col">
            <p className="text-sm text-[#00000066] ml-2 mb-5">Manager</p>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3 h-[52px]">
                <img src={contactIcon} alt="contact icon" className="ml-2" />
                <p className="text-black text-sm">Natali Craig</p>
              </div>

              <div className="flex items-center gap-3 h-[52px]">
                <img src={contactIcon1} alt="contact icon" className="ml-2" />
                <p className="text-black text-sm">Drew Cano</p>
              </div>

              <div className="flex items-center gap-3 h-[52px]">
                <img src={contactIcon2} alt="contact icon" className="ml-2" />
                <p className="text-black text-sm">Andi Lane</p>
              </div>

              <div className="flex items-center gap-3 h-[52px]">
                <img src={contactIcon3} alt="contact icon" className="ml-2" />
                <p className="text-black text-sm">Koray Okumus</p>
              </div>

              <div className="flex items-center gap-3 h-[52px]">
                <img src={contactIcon4} alt="contact icon" className="ml-2" />
                <p className="text-black text-sm">Kate Morrison</p>
              </div>
            </div>
          </div>

          <div className="w-full h-[320px] p-4 flex flex-col">
            <p className="text-sm text-[#00000066] mb-5">Date</p>

            <div className="flex flex-col gap-1 ">
              <div className="flex items-center gap-3 h-[52px]">
                <p className="text-black text-sm">Jun 24, 2026</p>
              </div>

              <div className="flex items-center gap-3 h-[52px]">
                <p className="text-black text-sm">Mar 10, 2026</p>
              </div>

              <div className="flex items-center gap-3 h-[52px]">
                <p className="text-black text-sm">Nov 10, 2026</p>
              </div>

              <div className="flex items-center gap-3 h-[52px]">
                <p className="text-black text-sm">Dec 10, 2026</p>
              </div>

              <div className="flex items-center gap-3 h-[52px]">
                <p className="text-black text-sm">July 10, 2026</p>
              </div>
            </div>
          </div>

          <div className="w-full h-[320px] p-4 flex flex-col">
            <p className="text-sm text-[#00000066] mb-4">Amount</p>

            <div className="flex flex-col gap-1 ">
              <div className="flex items-center gap-3 h-[52px]">
                <p className="text-black text-sm">$942.00</p>
              </div>

              <div className="flex items-center gap-3 h-[52px]">
                <p className="text-black text-sm">$881.00</p>
              </div>

              <div className="flex items-center gap-3 h-[52px]">
                <p className="text-black text-sm">$409.00</p>
              </div>

              <div className="flex items-center gap-3 h-[52px]">
                <p className="text-black text-sm">$953.00</p>
              </div>

              <div className="flex items-center gap-3 h-[52px]">
                <p className="text-black text-sm">$907.00</p>
              </div>
            </div>
          </div>

{/* Column 4 - Status */}
<div className="flex flex-col">
  <p className="text-sm text-[#00000066]  ">Status</p>

  <div className="flex flex-col gap-1">
    <div className="flex items-center gap-3  h-[52px]">
      <button className="h-[28px] bg-[#D29BF0] rounded-2xl text-[#AF52DE] text-semibold px-4 mt-8">
        In Progress
      </button>
    </div>

    <div className="flex items-center gap-3 h-[52px]">
      <button className="h-[28px] bg-[#A3F2B0] rounded-2xl text-[#34C759] text-semibold px-4 mt-7">
        Complete
      </button>
    </div>

    <div className="flex items-center gap-3 h-[52px]">
      <button className="h-[28px] bg-[#80BFFF] rounded-2xl text-[#007AFF] text-semibold px-4 mt-7">
        Pending
      </button>
    </div>

    <div className="flex items-center gap-3 h-[52px]">
      <button className="h-[28px] bg-[#FFE680] rounded-2xl text-[#FFCC00] text-semibold px-4 mt-7">
        Approved
      </button>
    </div>

    <div className="flex items-center gap-3 h-[52px]">
      <button className="h-[28px] bg-[#00000066] rounded-2xl text-[#00000066] text-semibold px-4 mt-7">
        Rejected
      </button>
    </div>
  </div>
</div>


          </div>
        </div>
      

      <div className="w-full max-w-[1188px] h-[56px] mx-auto px-2 sm:px-4 mt-6 border-transparent border-2">
    <div className="w-full max-w-[1140px] h-[40px] mx-auto px-2 sm:px-4 my-4 flex items-center justify-between">
    
    {/* Left side */}
    <div className="flex items-center">
      <button className="text-[#00000066]">© 2026 SnowUI</button>
    </div>

    {/* Right side */}
    <div className="flex items-center justify-between gap-6 mt-0">
      <button className="text-[#00000066] cursor-pointer  hover:scale-110 active:scale-95 transition-all duration-100">About</button>
      <button className="text-[#00000066] cursor-pointer  hover:scale-110 active:scale-95 transition-all duration-100">Support</button>
      <button className="text-[#00000066] cursor-pointer  hover:scale-110 active:scale-95 transition-all duration-100">Contact Us</button>
    </div>

  </div>
</div>

    </>
  );
};

export default snowMainContant;
