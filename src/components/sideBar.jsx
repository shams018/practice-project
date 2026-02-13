import React, { useState } from "react";
import logoicon from "../assets/Icon.svg";
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
import snowUi from "../assets/snowUI.svg";
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
      <div className="h-[1024px] w-[212px] rounded-tl-3xl rounded-bl-3xl  shadow-lg">
        <div className=" h-[180px] w-[172px] flex flex-col items-start  bg-white mx-auto    ">
          <div className="w-[180px] h-[28px] flex flex-row  ml-2 mt-3 gap-2">
            <img src={logoicon} alt="mainlogicon" />
            <h1 className="text-black font-bold text-lg ">ByeWind</h1>
          </div>
          <div className="w-[180px] h-[28px] flex flex-row   mt-6 gap-5  ">
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

          <div className="w-[172px] flex flex-col items-start bg-white mx-auto mt-8 overflow-visible">
            <div className="w-[180px] h-[28px] flex flex-row  ml-2 mt-3 gap-2">
              <h1 className="text-gray-700   text-lg ml-2">Dashbaord</h1>
            </div>
            <div className="w-[180px] h-[28px] flex flex-row   mt-3 gap-2 bg-gray-200  rounded-lg ">
              <img src={dashicon} alt="dashboard icon" className="ml-8" />
              <button className="w-[61px] h-[20px] text-gray-500 ml-2">
                Overview
              </button>
            </div>
              

            <div 
              className="w-[180px] h-[28px] flex flex-row mt-3 gap-2 cursor-pointer"
              onClick={() => setEcommerceOpen(!ecommerceOpen)}
            >
              <img 
                src={arrowline} 
                alt="dashboard icon" 
                className={`ml-2 transition-transform ${ecommerceOpen ? 'rotate-90' : ''}`} 
              />
              <img src={dashicon2} alt="dashboard icon" className="ml-2" />
              <button className="w-[61px] h-[20px]">eCommerce</button>
            </div>
            
            {ecommerceOpen && (
              <div className="w-[180px] flex flex-col mt-2 bg-white">
               
              </div>
            )}

            <div 
              className="w-[180px] h-[28px] flex flex-row mt-3 gap-2 cursor-pointer"
              onClick={() => setProjectsOpen(!projectsOpen)}
            >
              <img 
                src={arrowline} 
                alt="dashboard icon" 
                className={`ml-2 transition-transform ${projectsOpen ? 'rotate-90' : ''}`} 
              />
              <img src={dashicon3} alt="dashboard icon" className="ml-2" />
              <button className="w-[61px] h-[20px]">Projects</button>
            </div>
            
            {projectsOpen && (
              <div className="w-[180px] flex flex-col mt-2 bg-white">
               
              </div>
            )}
          </div>

          <div className="w-[172px] flex flex-col items-start bg-white mx-auto mt-10 overflow-visible">
            <div className="w-[180px] h-auto flex flex-row  ml-2 mt-3 gap-2">
              <h1 className="text-gray-700  text-lg ml-2">Pages</h1>
            </div>
            <div className="w-[180px] h-[28px] flex flex-row mt-3 gap-2 cursor-pointer" onClick={() => setUserprofileOpen(!userprofileOpen)}>
              <img src={arrowline} alt="dashboard icon" className={`ml-2 transition-transform ${userprofileOpen ? 'rotate-90' : ''}`} />
              <img src={pageicon} alt="dashboard icon" className="ml-2" />
              <button className="w-[61px] h-[20px]">UserProfile</button>
            </div>

            {userprofileOpen && (
              <div className="w-[180px] flex flex-col mt-2 bg-white gap-2 ml-7 font-semibold">   
                <button className="w-full h-[32px] px-4 text-left text-sm text-gray-700 hover:bg-gray-100 rounded-t-lg">
                Overview
                </button>
                <button className="w-full h-[32px] px-4 text-left text-sm text-gray-700 hover:bg-gray-100">
                 Projects
                </button>
                <button className="w-full h-[32px] px-4 text-left text-sm text-gray-700 hover:bg-gray-100">
                  Campaigns
                </button>
                <button className="w-full h-[32px] px-4 text-left text-sm text-gray-700 hover:bg-gray-100 rounded-b-lg">
                 Documents
                </button>
                <button className="w-full h-[32px] px-4 text-left text-sm text-gray-700 hover:bg-gray-100 rounded-b-lg">
                  Followers
                </button>
              </div>
            )}

            <div className="w-[180px] h-[28px] flex flex-row mt-3 gap-2 cursor-pointer" onClick={() => setAccountOpen(!accountOpen)}>
              <img src={arrowline} alt="dashboard icon" className={`ml-2 transition-transform ${accountOpen ? 'rotate-90' : ''}`} />
              <img src={pageicon1} alt="dashboard icon" className="ml-2" />
              <button className="w-[61px] h-[20px]">Account</button>
            </div>
            {accountOpen && (
              <div className="w-[180px] flex flex-col mt-2 bg-white">
               
              </div>
            )}
            
            <div className="w-[180px] h-[28px] flex flex-row mt-3 gap-2 cursor-pointer" onClick={() => setCorporateOpen(!coporateOpen)}>
              <img src={arrowline} alt="dashboard icon" className={`ml-2 transition-transform ${coporateOpen ? 'rotate-90' : ''}`} />
              <img src={pageicon2} alt="dashboard icon" className="ml-2" />
              <button className="w-[61px] h-[20px]">Corporate</button>
            </div>
            {coporateOpen && (
              <div className="w-[180px] flex flex-col mt-2 bg-white">
              
              </div>
            )}

            <div className="w-[180px] h-[28px] flex flex-row mt-3 gap-2 cursor-pointer" onClick={() => setBlogOpen(!blogOpen)}>
              <img src={arrowline} alt="dashboard icon" className={`ml-2 transition-transform ${blogOpen ? 'rotate-90' : ''}`} />
              <img src={pageicon3} alt="dashboard icon" className="ml-2" />
              <button className="w-[61px] h-[20px]">Blog</button>
            </div>
            {blogOpen && (
              <div className="w-[180px] flex flex-col mt-2 bg-white">
               
              </div>
            )}

            <div className="w-[180px] h-[28px] flex flex-row mt-3 gap-2 cursor-pointer" onClick={() => setSocialOpen(!socialOpen)}>
              <img src={arrowline} alt="dashboard icon" className={`ml-2 transition-transform ${socialOpen ? 'rotate-90' : ''}`} />
              <img src={pageicon4} alt="dashboard icon" className="ml-2" />
              <button className="w-[61px] h-[20px]">Social</button>
            </div>
            {socialOpen && (
              <div className="w-[180px] flex flex-col mt-2 bg-white">
             
              </div>
            )}
            
              <div className="w-[180px] h-[36px] flex flex-row mt-80 ml-8   ">
                <div className="w-[75px] h-[20px] flex items-center justify-center mt-3 - ">
                    <button ><img src={snowUi} alt="plus icon" className="ml-2 w-[20px] h-[20px]" /></button>
              <img src={unionTxt} alt="dashboard icon" className="ml-3" />
              <img src={unionT} alt="dashboard icon" className="" />

                </div>
              
             
            </div>
             </div>



          </div>
        </div>
      </div>
    
  );
};

export default sideBar;
