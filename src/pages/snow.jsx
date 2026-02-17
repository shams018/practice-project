import React, { useState } from "react";
import SnowNavBar from "../components/snowNavBar.jsx";
import SnowSideBar from "../components/snowSideBar.jsx";
import SnowMainContant from "../components/snowMainContant.jsx";

const Snow = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`flex min-h-screen w-full transition-colors duration-300 ${
        darkMode ? "bg-[#0F172A] text-white" : "bg-gray-100 text-black"
      }`}
    >
      
      {/* Overlay */}
      <div
        className={`
          fixed inset-0 bg-black/40 z-30 md:hidden transition-opacity duration-300
          ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <div
        className={`
          fixed z-40 top-0 left-0 h-full
          w-[200px] sm:w-[220px] lg:w-[240px] xl:w-[260px]
          transition-transform duration-300
          ${darkMode ? "bg-[#020817]" : ""}
          md:static md:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <SnowSideBar closeSidebar={closeSidebar} darkMode={darkMode} />
      </div>

      {/* Main Section */}
      <div className="flex flex-col flex-1 min-w-0 w-full">

        {/* Navbar */}
        <SnowNavBar
          toggleSidebar={toggleSidebar}
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
        />

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto scrollbar-hide px-2 sm:px-4 lg:px-6 xl:px-8">
          <SnowMainContant darkMode={darkMode} />
        </div>

      </div>

    </div>
  );
};

export default Snow;
