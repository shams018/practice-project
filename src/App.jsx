import React from "react";
import NavBar from "./components/navBar.jsx";
import SideBar from "./components/sideBar.jsx";
import NotiBar from "./components/noteBar.jsx";
import HeoSection from "./components/heroSection.jsx";
import { Routes, Route } from "react-router-dom";
import Snow from "./pages/snow.jsx";

function MainLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row">

      {/* Sidebar */}
      <div className="w-64 shrink-0 hidden lg:block">
        <SideBar />
      </div>

      {/* Main Section */}
      <div className="flex flex-col flex-1 min-w-0 px-2 sm:px-4">
        <div className="sticky top-0 z-20 bg-white">
          <NavBar />
        </div>
        <div className="overflow-y-auto h-[calc(100vh-80px)] scrollbar-hide">
          <HeoSection />
        </div>
      </div>

      {/* Notification Bar */}
      <div className="w-80 shrink-0 hidden xl:block">
        <NotiBar />
      </div>

    </div>
  );
}

function App() {
  return (
    <>
     <div >
    <Routes>
         <Route element={<MainLayout />}>
        <Route path="/" element={<MainLayout />} />
        
      </Route>
      <Route path="/snow" element={<Snow />} />

    </Routes>
  </div>
   


     
 

     </>


  );
}

export default App;
