import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoicon from "../assets/Icon.svg";
import dashicon from "../assets/Icondash1.svg";
import VectorIcon from "../assets/Vecto.svg";
import dashicon2 from "../assets/Icondash2.svg";
import dashicon3 from "../assets/Icondash3.svg";
import pageicon from "../assets/pageicon.svg";
import pageicon1 from "../assets/pageicon1.svg";
import pageicon2 from "../assets/pageicon2.svg";
import pageicon3 from "../assets/pageicon3.svg";
import pageicon4 from "../assets/pageicon4.svg";
import arrowline from "../assets/ArrowLineRight-s.svg";
import snowUi from "../assets/SnowUI.svg";
import unionTxt from "../assets/Union.svg";
import unionT from "../assets/Union1.svg";


const sideBar = () => {
  const [ecommerceOpen, setEcommerceOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [userprofileOpen, setUserprofileOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [coporateOpen, setCorporateOpen] = useState(false);
  const[blogOpen,setBlogOpen]=useState(false);
  const[socialOpen,setSocialOpen]=useState(false);
  return (

    
    <div className="flex justify-start">
      <div className="min-h-screen w-64 lg:w-[212px] rounded-tl-3xl rounded-bl-3xl shadow-lg bg-white">
        <div className="py-6 px-4">
          <div className="flex items-center gap-3">
            <img src={logoicon} alt="mainlogicon" />
            <h1 className="text-black font-bold text-lg">ByeWind</h1>
          </div>

          <div className="flex gap-4 mt-4">
            <button className="text-gray-500">Favorites</button>
            <button className="text-gray-400">Recently</button>
          </div>

          <div className="mt-5 space-y-2">
            <div className="flex items-center gap-2">
              <img src={VectorIcon} alt="vector icon" className="w-1.5 h-1.5" />
              <button className="text-sm">Overview</button>
            </div>
            <div className="flex items-center gap-2">
              <img src={VectorIcon} alt="vector icon" className="w-1.5 h-1.5" />
              <button className="text-sm">Projects</button>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-gray-700 text-lg">Dashbaord</p>
            <div className="mt-3 flex flex-col gap-2">
              <button className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-200">
                <img src={dashicon} alt="dashboard icon" />
                <span>Overview</span>
              </button>

              <button onClick={() => setEcommerceOpen(!ecommerceOpen)} className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-200">
                <img src={arrowline} alt="arrow" className={`${ecommerceOpen ? 'rotate-90' : ''}`} />
                <img src={dashicon2} alt="icon" />
                <span>eCommerce</span>
              </button>
              {ecommerceOpen && <div className="pl-6 mt-1" />}

              <button onClick={() => setProjectsOpen(!projectsOpen)} className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-200">
                <img src={arrowline} alt="arrow" className={`${projectsOpen ? 'rotate-90' : ''}`} />
                <img src={dashicon3} alt="icon" />
                <span>Projects</span>
              </button>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-gray-700 text-lg">Pages</p>
            <div className="mt-3 space-y-2">
              <div>
                <button onClick={() => setUserprofileOpen(!userprofileOpen)} className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-200 w-full">
                  <img src={arrowline} alt="arrow" className={`${userprofileOpen ? 'rotate-90' : ''}`} />
                  <img src={pageicon} alt="page" />
                  <span>UserProfile</span>
                </button>
                {userprofileOpen && (
                  <div className="pl-6 mt-2 space-y-1 font-semibold">
                    <button className="w-full text-left text-sm text-gray-700 hover:bg-gray-100 rounded">Overview</button>
                    <button className="w-full text-left text-sm text-gray-700 hover:bg-gray-100">Projects</button>
                    <button className="w-full text-left text-sm text-gray-700 hover:bg-gray-100">Campaigns</button>
                    <button className="w-full text-left text-sm text-gray-700 hover:bg-gray-100">Documents</button>
                    <button className="w-full text-left text-sm text-gray-700 hover:bg-gray-100">Followers</button>
                  </div>
                )}
              </div>

              <button onClick={() => setAccountOpen(!accountOpen)} className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-200">
                <img src={arrowline} alt="arrow" className={`${accountOpen ? 'rotate-90' : ''}`} />
                <img src={pageicon1} alt="page" />
                <span>Account</span>
              </button>

              <button onClick={() => setCorporateOpen(!coporateOpen)} className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-200">
                <img src={arrowline} alt="arrow" className={`${coporateOpen ? 'rotate-90' : ''}`} />
                <img src={pageicon2} alt="page" />
                <span>Corporate</span>
              </button>

              <button onClick={() => setBlogOpen(!blogOpen)} className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-200">
                <img src={arrowline} alt="arrow" className={`${blogOpen ? 'rotate-90' : ''}`} />
                <img src={pageicon3} alt="page" />
                <span>Blog</span>
              </button>

              <button onClick={() => setSocialOpen(!socialOpen)} className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-200">
                <img src={arrowline} alt="arrow" className={`${socialOpen ? 'rotate-90' : ''}`} />
                <img src={pageicon4} alt="page" />
                <span>Social</span>
              </button>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-3">
              <Link to="/snow">
                <button aria-label="Open Snow page"><img src={snowUi} alt="plus icon" className="w-5 h-5" /></button>
              </Link>
              <img src={unionTxt} alt="union" />
              <img src={unionT} alt="union" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sideBar;
