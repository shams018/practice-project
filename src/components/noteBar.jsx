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
      <div className="min-h-screen w-64 xl:w-[280px] rounded-tr-3xl rounded-br-3xl shadow-lg bg-white">
        <div className="px-4 py-6">
          <div className="text-black text-sm">
            <h1 className="text-lg">Notifications</h1>
          </div>

          <div className="mt-4 space-y-4">
            <div className="flex items-start gap-3 rounded-md p-2 hover:bg-gray-100 cursor-pointer">
              <img src={notiIcon} alt="notification icon" className="w-6 h-6" />
              <div>
                <p>You fixed a bug.</p>
                <p className="text-xs text-gray-600">Just now</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-md p-2 hover:bg-gray-100 cursor-pointer">
              <img src={notiIcon1} alt="notification icon" className="w-6 h-6" />
              <div>
                <p>New user registered.</p>
                <p className="text-xs text-gray-600">59 minutes ago</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-md p-2 hover:bg-gray-100 cursor-pointer">
              <img src={notiIcon2} alt="notification icon" className="w-6 h-6" />
              <div>
                <p>You fixed a bug.</p>
                <p className="text-xs text-gray-600">12 hours ago</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-md p-2 hover:bg-gray-100 cursor-pointer">
              <img src={notiIcon3} alt="notification icon" className="w-6 h-6" />
              <div>
                <p>Andi Lane subscribed to you</p>
                <p className="text-xs text-gray-600">Today, 11:59 AM</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm">Activities</p>
            <div className="mt-3 space-y-3">
              <div className="flex items-start gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <img src={actiIcon} alt="Activities icon" className="w-6 h-6" />
                <div>
                  <p>Changed the style.</p>
                  <p className="text-xs text-gray-600">Just now</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <img src={actiIcon1} alt="Activities icon" className="w-6 h-6" />
                <div>
                  <p>Released a new version.</p>
                  <p className="text-xs text-gray-600">59 minutes ago</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <img src={actiIcon2} alt="Activities icon" className="w-6 h-6" />
                <div>
                  <p>Submitted a bug.</p>
                  <p className="text-xs text-gray-600">12 hours ago</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <img src={actiIcon3} alt="Activities icon" className="w-6 h-6" />
                <div>
                  <p>Modified A data in Page X.</p>
                  <p className="text-xs text-gray-600">Today, 11:59 AM</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <img src={actiIcon4} alt="Activities icon" className="w-6 h-6" />
                <div>
                  <p>Deleted a page in Project X.</p>
                  <p className="text-xs text-gray-600">Feb 2, 2026</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm">Contacts</p>
            <div className="mt-3 space-y-3">
              <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                <img src={contactIcon} alt="contact icon" className="w-6 h-6" />
                <p>Natali Craig</p>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                <img src={contactIcon1} alt="contact icon" className="w-6 h-6" />
                <p>Drew Cano</p>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                <img src={contactIcon2} alt="contact icon" className="w-6 h-6" />
                <p>Andi Lane</p>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                <img src={contactIcon3} alt="contact icon" className="w-6 h-6" />
                <p>Koray Okumus</p>
              </div>
              <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                <img src={contactIcon4} alt="contact icon" className="w-6 h-6" />
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
