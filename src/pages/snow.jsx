import React, { useState, useEffect } from "react";
import SnowNavBar from "../components/snowNavBar.jsx";
import SnowSideBar from "../components/snowSideBar.jsx";
import SnowMainContant from "../components/snowMainContant.jsx";

const Snow = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    // Prevent background scrolling when sidebar is open on mobile
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <div
      className={`flex min-h-screen w-full transition-colors duration-300 ${
        darkMode ? "bg-[#0F172A] text-white" : "bg-gray-100 text-black"
      }`}
    >
      
      {/* Overlay (darkened on mobile) */}
      <div
        className={`
          fixed inset-0 bg-black/80 z-30 md:hidden transition-opacity duration-300
          ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <div
        className={`
          fixed z-40 top-0 left-0 h-full
          w-full sm:w-[220px] lg:w-[240px] xl:w-[260px]
          transition-transform duration-300 ease-in-out
          ${darkMode ? "bg-[#020817] md:bg-transparent" : "bg-white md:bg-transparent"}
          md:static md:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <SnowSideBar closeSidebar={closeSidebar} darkMode={darkMode} />
      </div>

     {/* Main Section */}
<div className="flex flex-col flex-1 min-w-0 h-screen overflow-hidden">

  {/* Navbar (Fixed) */}
  <div className="sticky top-0 z-30 flex-shrink-0">
    <SnowNavBar
      toggleSidebar={toggleSidebar}
      toggleDarkMode={toggleDarkMode}
      darkMode={darkMode}
    />
  </div>

  {/* Main Content (Scrollable with hidden scrollbar) */}
  <div className="flex-1 overflow-y-auto scrollbar-hide px-2 sm:px-4 lg:px-6 xl:px-8">
    <SnowMainContant darkMode={darkMode} />
  </div>

</div>

    </div>
  );
};

export default Snow;
