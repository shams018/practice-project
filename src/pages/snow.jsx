import React, { useState } from "react";
import SnowNavBar from "../components/snowNavBar.jsx";
import SnowSideBar from "../components/snowSideBar.jsx";
import SnowMainContant from "../components/snowMainContant.jsx";

const Snow = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-gray-100">

      {/* Sidebar Overlay (Mobile) */}
      <div
        className={`fixed inset-0 bg-black/40 z-30 transition-opacity duration-300 md:hidden ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`
          fixed z-40 top-0 left-0 h-full w-[220px]  transform transition-transform duration-300
          md:static md:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <SnowSideBar closeSidebar={() => setSidebarOpen(false)} />
      </div>

      {/* Main Section */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Pass toggle button to navbar */}
        <SnowNavBar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <div className="overflow-y-auto h-[calc(100vh-80px)] scrollbar-hide">
          <SnowMainContant />


            {/* just for commit message on git account */}

        </div>
      </div>
    </div>
  );
};

export default Snow;
