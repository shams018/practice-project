import React, { useState } from 'react'
import navMenuIcon from '../assets/Navicon.svg'
import navNotificationIcon from '../assets/Icon5.svg'
import navSettingsIcon from '../assets/Navicon2.svg'
import navMessageIcon from '../assets/Navicon3.svg'
import navBellIcon from '../assets/Iconbell.svg'
import searchInputIcon from '../assets/IconSerch.svg'
import searchSubmitIcon from '../assets/Text.png'


const navBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (e) => setSearchTerm(e.target.value)

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    console.log('Search:', searchTerm)
  }

  return (
  <div className="w-full max-w-[1140px] mx-auto px-3 sm:px-6 py-3 flex items-center justify-between shadow-sm sticky top-0 z-30 bg-white">     
    {/* left side div */}


  <div className='flex items-center gap-3'>
    <button>
          <img src={navMenuIcon} alt="Menu Icon" className="w-5 h-5 mr-5 " />
    </button>
    <button>
          <img src={navNotificationIcon} alt="Notification Icon" className="w-5 h-5  mr-5 " />
    </button>
    <button className="hidden sm:inline-block px-4 py-1 text-black rounded hover:bg-gray-200 text-sm font-Poppins">
      Dashboard
    </button>
    <button className="hidden sm:inline-block px-4 py-1 text-black rounded hover:bg-gray-200 text-sm font-Poppins">
      Default
    </button>

     
   
  </div>

   

     {/* Right side div */}

      <div className='flex items-center justify-end gap-3'>
        <form onSubmit={handleSearchSubmit} className="relative flex items-center bg-gray-200 rounded-full py-1 mr-3 pl-3 pr-3 hidden md:flex">
          <img src={searchInputIcon} alt="Search icon" className="absolute left-3 w-4 h-4" />
          <input
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="outline-none text-sm bg-transparent pl-10 pr-10 w-24 md:w-40 lg:w-48"
          />
          <button type="submit" className="absolute right-3 flex items-center justify-center">
            <img src={searchSubmitIcon} alt="Search Submit" className="w-5 h-5" />
          </button>
        </form>

        <button className="p-1">
          <img src={navMessageIcon} alt="Message Icon" className="w-6 h-6" />
        </button>
        <button className="p-1">
          <img src={navSettingsIcon} alt="Settings Icon" className="w-6 h-6" />
        </button>
        <button className="p-1">
          <img src={navBellIcon} alt="Bell Icon" className="w-6 h-6" />
        </button>
        <button className="p-1 sm:hidden">
          <img src={navMenuIcon} alt="Menu Icon" className="w-6 h-6" />
        </button>
      </div>

</div>
  )
}

export default navBar;