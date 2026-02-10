import React from "react";
import notiIcon from "../assets/notiIcon.svg";
import notiIcon1 from "../assets/notiIcon1.svg";
import notiIcon2 from "../assets/notiIcon2.svg";
import notiIcon3 from "../assets/notiIcon3.svg";  
import actiIcon from "../assets/actiIcon.svg";
import actiIcon1 from "../assets/actiIcon1.svg";
import actiIcon2 from "../assets/actiIcon2.svg";
import actiIcon3 from "../assets/actiIcon3.svg";
import actiIcon4 from "../assets/actiIcon4.svg";
import contactIcon from "../assets/contactIcon.svg";
import contactIcon1 from "../assets/contactIcon1.svg";
import contactIcon2 from "../assets/contactIcon2.svg";
import contactIcon3 from "../assets/contactIcon3.svg";
import contactIcon4 from "../assets/contactIcon4.svg";

const noteBar = () => {
  return (
    <div className="flex justify-end">
      <div
        className="h-[1024px] w-[280px] rounded-tr-3xl rounded-br-3xl bg-gray-50 shadow-lg"
      >
        <div className="h-[260px] w-[248px] flex flex-col items-start   mx-auto ">
          <div className="w-[248px] h-[36px] flex flex-row items-start  ml-2 mt-5  text-black text-sm ">

              <h1>Notifications</h1>
          </div>


          <div className="w-[248px] h-[52px] flex flex-row items-start  mt-5  text-black text-sm  gap-3 ">
          <img src={notiIcon} alt="notification icon" className="ml-2 mt-1" />
          <div>
            <p>You fixed a bug.</p>
            <p className="text-xs text-gray-600">Just now</p>
          </div>
          </div>

          <div className="w-[248px] h-[52px] flex flex-row items-start  mt-5  text-black text-sm  gap-3 ">
          <img src={notiIcon1} alt="notification icon" className="ml-2 mt-1" />
          <div>
            <p>New user registered.</p>
            <p className="text-xs text-gray-600">59 minutes ago</p>
          </div>
          </div>

          <div className="w-[248px] h-[52px] flex flex-row items-start  mt-5  text-black text-sm  gap-3 ">
          <img src={notiIcon2} alt="notification icon" className="ml-2 mt-1" />
          <div>
            <p>You fixed a bug.</p>
            <p className="text-xs text-gray-600">12 hours ago</p>
          </div>
          </div>

           <div className="w-[248px] h-[52px] flex flex-row items-start  mt-5  text-black text-sm  gap-3 ">
          <img src={notiIcon3} alt="notification icon" className="ml-2 mt-1" />
          <div>
            <p>Andi Lane subscribed to you</p>
            <p className="text-xs text-gray-600">Today, 11:59 AM</p>
          </div>
          </div>


 
        </div>
       


        <div className="h-[316px] w-[248px] flex flex-col items-start   mx-auto ">
          <div className="w-[248px] h-[36px] flex flex-row items-start  ml-2 mt-5  text-black text-sm ">

              <p>Activities</p>
          </div>


          <div className="w-[248px] h-[52px] flex flex-row items-start  mt-5  text-black text-sm  gap-3 ">
          <img src={actiIcon} alt="Activities icon" className="ml-2 mt-1" />
          <div>
            <p>Changed the style.</p>
            <p className="text-xs text-gray-600">Just now</p>
          </div>
          </div>

          <div className="w-[248px] h-[52px] flex flex-row items-start  mt-5  text-black text-sm  gap-3 ">
          <img src={actiIcon1} alt="Activities icon" className="ml-2 mt-1" />
          <div>
            <p>Released a new version.</p>
            <p className="text-xs text-gray-600">59 minutes ago</p>
          </div>
          </div>

          <div className="w-[248px] h-[52px] flex flex-row items-start  mt-5  text-black text-sm  gap-3 ">
          <img src={actiIcon2} alt="Activities icon" className="ml-2 mt-1" />
          <div>
            <p>Submitted a bug.</p>
            <p className="text-xs text-gray-600">12 hours ago</p>
          </div>
          </div>

           <div className="w-[248px] h-[52px] flex flex-row items-start  mt-5  text-black text-sm  gap-3 ">
          <img src={actiIcon3} alt="Activities icon" className="ml-2 mt-1" />
          <div>
            <p>Modified A data in Page X.</p>
            <p className="text-xs text-gray-600">Today, 11:59 AM</p>
          </div>
          </div>

          <div className="w-[248px] h-[52px] flex flex-row items-start  mt-5  text-black text-sm  gap-3 ">
          <img src={actiIcon4} alt="Activities icon" className="ml-2 mt-1" />
          <div>
            <p>Deleted a page in Project X.</p>
            <p className="text-xs text-gray-600">Feb 2, 2026</p>
          </div>
          </div>



           <div className="h-[316px] w-[248px] flex flex-col items-start   mx-auto ">
          <div className="w-[248px] h-[36px] flex flex-row items-start  ml-2 mt-5  text-black text-sm ">

              <p>Contacts</p>
          </div>


          <div className="w-[248px] h-[52px] flex flex-row items-start  mt-5  text-black text-sm  gap-3 ">
          <img src={contactIcon} alt="contact icon" className="ml-2 " />
          <div>
            <p>Natali Craig</p>
           
          </div>
          </div>

          <div className="w-[248px] h-[52px] flex flex-row items-start  mt-5  text-black text-sm  gap-3 ">
          <img src={contactIcon1} alt="contact icon" className="ml-2 " />
          <div>
            <p>Drew Cano</p>
           
          </div>
          </div>

          <div className="w-[248px] h-[52px] flex flex-row items-start  mt-5  text-black text-sm  gap-3 ">
          <img src={contactIcon2} alt="contact icon" className="ml-2 " />
          <div>
            <p>Andi Lane</p>
           
          </div>
          </div>

           <div className="w-[248px] h-[52px] flex flex-row items-start  mt-5  text-black text-sm  gap-3 ">
          <img src={contactIcon3} alt="contact icon" className="ml-2 " />
          <div>
            <p>Koray Okumus</p>
          
          </div>
          </div>

          <div className="w-[248px] h-[52px] flex flex-row items-start  mt-5  text-black text-sm  gap-3 ">
          <img src={contactIcon4} alt="contact icon" className="ml-2 " />
          <div>
            <p>Kate Morrison</p>
          
          </div>
          </div>
          </div>



 
        </div>
       
      </div>
    </div>
  );
};

export default noteBar;
