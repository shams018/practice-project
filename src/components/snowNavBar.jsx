import React, { useState } from 'react'
import navMenuIcon from '../assets/Navicon.svg'
import navNotificationIcon from '../assets/Icon5.svg'
import navSettingsIcon from '../assets/Navicon2.svg'
import navMessageIcon from '../assets/Navicon3.svg'
import navBellIcon from '../assets/Iconbell.svg'
import searchInputIcon from '../assets/IconSerch.svg'
import searchSubmitIcon from '../assets/Text.png'


const snowNavBar = ({ toggleSidebar }) => {   
  const [searchTerm, setSearchTerm] = useState('')
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleSearchChange = (e) => setSearchTerm(e.target.value)

  const toggleNavbar = () => setNavbarOpen(!navbarOpen)
  const closeNavbar = () => setNavbarOpen(false)

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    console.log('Search:', searchTerm)
  }

  return (
    <>
      {/* Mobile Header - 393px and below */}
      <div className="flex sm:hidden items-center justify-between px-4 py-3">
        {/* Sidebar Toggle Button - Left */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-200 transition-all duration-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navbar Toggle Button - Right */}
        <button
          onClick={toggleNavbar}
          className="p-2 rounded-lg hover:bg-gray-200 transition-all duration-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navbar Dropdown */}
      {navbarOpen && (
        <div className="sm:hidden bg-gray-50 border-t border-gray-200 p-4 space-y-3">
          <button
            onClick={closeNavbar}
            className="absolute top-4 right-4 p-1 rounded hover:bg-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex gap-3">
            <button className='cursor-pointer rounded-full border border-transparent hover:bg-gray-200 hover:border-gray-300 hover:scale-110 active:scale-95 transition-all duration-100'>
              <img src={navMenuIcon} alt="Menu Icon" className="w-5 h-5 mr-5" />
            </button>
            <button className='cursor-pointer rounded-full border border-transparent hover:bg-gray-200 hover:border-gray-300 hover:scale-110 active:scale-95 transition-all duration-100'>
              <img src={navNotificationIcon} alt="Notification Icon" className="w-5 h-5 mr-5" />
            </button>
          </div>

          <div className="flex gap-2">
            <button className="px-4 py-1 text-black rounded hover:bg-gray-200 text-sm font-Poppins">
              Dashboard
            </button>
            <button className="px-4 py-1 text-black rounded hover:bg-gray-200 text-sm font-Poppins">
              Overview
            </button>
          </div>

          <form onSubmit={handleSearchSubmit} className="relative flex items-center bg-gray-200 rounded-full py-1 pl-3 pr-3 cursor-pointer border border-transparent hover:bg-gray-300 hover:border-gray-300 transition-all duration-100">
            <img src={searchInputIcon} alt="Search icon" className="absolute left-3 w-4 h-4 hover:scale-110 active:scale-95" />
            <input
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="outline-none text-sm bg-transparent pl-10 pr-10 w-full"
            />
            <button type="submit" className="absolute right-3 flex items-center justify-center cursor-pointer rounded-full border border-transparent hover:bg-gray-200 hover:border-gray-300 hover:scale-110 active:scale-95 transition-all duration-100">
              <img src={searchSubmitIcon} alt="Search Submit" className="w-5 h-5" />
            </button>
          </form>

          <div className="flex gap-3">
            <button className='cursor-pointer rounded-full border border-transparent hover:bg-gray-200 hover:border-gray-300 hover:scale-110 active:scale-95 transition-all duration-100'>
              <img src={navMessageIcon} alt="Message Icon" className="w-7 h-7 mr-5" />
            </button>
            <button className='cursor-pointer rounded-full border border-transparent hover:bg-gray-200 hover:border-gray-300 hover:scale-110 active:scale-95 transition-all duration-100'>
              <img src={navSettingsIcon} alt="Settings Icon" className="w-7 h-7 mr-5" />
            </button>
            <button className='cursor-pointer rounded-full border border-transparent hover:bg-gray-200 hover:border-gray-300 hover:scale-110 active:scale-95 transition-all duration-100'>
              <img src={navBellIcon} alt="Bell Icon" className="w-7 h-7 mr-5" />
            </button>
          </div>
        </div>
      )}

      {/* Desktop Navbar - Original Style */}
      <div className="hidden sm:block w-full lg:w-[1180px] h-auto lg:h-[40px] mx-auto lg:mt-4">
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 lg:py-0">
          {/* left side div */}
          <div className='w-[268px] h-[28px] items-left gap-3 flex'>
            {/* side bar button */}
            <button
              onClick={toggleSidebar}
              className="lg:hidden mr-2 p-1 rounded hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <button className='cursor-pointer rounded-full border border-transparent hover:bg-gray-200 hover:border-gray-300 hover:scale-110 active:scale-95 transition-all duration-100'>
              <img src={navMenuIcon} alt="Menu Icon" className="w-5 h-5 mr-5" />
            </button>
            <button className='cursor-pointer rounded-full border border-transparent hover:bg-gray-200 hover:border-gray-300 hover:scale-110 active:scale-95 transition-all duration-100'>
              <img src={navNotificationIcon} alt="Notification Icon" className="w-5 h-5 mr-5" />
            </button>
            <button className="px-4 py-1 text-black rounded hover:bg-gray-200 text-sm font-Poppins">
              Dashboard
            </button>
            <button className="px-4 py-1 text-black rounded hover:bg-gray-200 text-sm font-Poppins">
              Overviw
            </button>
          </div>

          {/* Right side div */}
          <div className='w-[316px] h-[28px] flex items-center justify-end gap-3'>
            <form onSubmit={handleSearchSubmit} className="relative flex items-center bg-gray-200 rounded-full py-1 mr-3 pl-3 pr-3 cursor-pointer rounded-full border border-transparent hover:bg-gray-300 hover:border-gray-300 transition-all duration-100">
              <img src={searchInputIcon} alt="Search icon" className="absolute left-3 w-4 h-4 hover:scale-110 active:scale-95" />
              <input
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="outline-none text-sm bg-transparent pl-10 pr-10 w-[180px]"
              />
              <button type="submit" className="absolute right-3 flex items-center justify-center cursor-pointer rounded-full border border-transparent hover:bg-gray-200 hover:border-gray-300 hover:scale-110 active:scale-95 transition-all duration-100">
                <img src={searchSubmitIcon} alt="Search Submit" className="w-5 h-5" />
              </button>
            </form>

            <button className='cursor-pointer rounded-full border border-transparent hover:bg-gray-200 hover:border-gray-300 hover:scale-110 active:scale-95 transition-all duration-100'>
              <img src={navMessageIcon} alt="Message Icon" className="w-7 h-7 mr-5" />
            </button>
            <button className='cursor-pointer rounded-full border border-transparent hover:bg-gray-200 hover:border-gray-300 hover:scale-110 active:scale-95 transition-all duration-100'>
              <img src={navSettingsIcon} alt="Settings Icon" className="w-7 h-7 mr-5" />
            </button>
            <button className='cursor-pointer rounded-full border border-transparent hover:bg-gray-200 hover:border-gray-300 hover:scale-110 active:scale-95 transition-all duration-100'>
              <img src={navBellIcon} alt="Bell Icon" className="w-7 h-7 mr-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
  
}

export default snowNavBar;