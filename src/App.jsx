import React from "react";
import NavBar from "./components/navBar.jsx";
import SideBar from "./components/sideBar.jsx";
import NotiBar from "./components/noteBar.jsx";
import HeoSection from "./components/heroSection.jsx";
function App() {
  return (
    <>
      <div className="flex w-full h-screen">
        <SideBar />
        <div>
          <NavBar />
          <HeoSection />
        </div>

        <NotiBar />
      </div>
    </>
  );
}

export default App;
