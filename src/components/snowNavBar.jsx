import React, { useState } from 'react'
import icon1 from '../assets/Navicon.svg'
import icon2 from '../assets/Icon5.svg'
import icon3 from '../assets/Navicon2.svg'
import icon4 from '../assets/Navicon3.svg'
import icon5 from '../assets/Iconbell.svg'
import icon from '../assets/IconSerch.svg'
import textIcon from '../assets/Text.png'


const snowNavBar = ({ toggleSidebar }) => {   
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (e) => setSearchTerm(e.target.value)

  

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    console.log('Search:', searchTerm)
  }

  return (
   <div className=" w-full lg:w-[1180px]  h-auto lg:h-[40px]  mx-auto flex  items-center justify-between  mt-4">     
    {/* left side div */}


  <div className='w-[268px] h-[28px]  items-left gap-3 flex ml-5'>

     {/* side bar hidden for small screen */}
     <button
      onClick={toggleSidebar}
      className="md:hidden mr-2 p-1 rounded hover:bg-gray-200"
    >
      {/* Hamburger Icon */}
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
          <img src={icon1} alt="Icon 2" className="w-5 h-5 mr-5 " />
    </button>
    <button className='cursor-pointer rounded-full border border-transparent hover:bg-gray-200 hover:border-gray-300 hover:scale-110 active:scale-95 transition-all duration-100'>
          <img src={icon2} alt="Icon 1" className="w-5 h-5  mr-5 " />
    </button>
  <button className="px-4 py-1 text-black rounded hover:bg-gray-200 text-sm font-Poppins">
      Dashboard
    </button>
    <button className="px-4 py-1  text-black rounded hover:bg-gray-200 text-sm font-Poppins">
     Overviw
    </button>

     
   
  </div>

   

     {/* Right side div */}

      <div className='w-[316px] h-[28px]  flex items-center justify-end gap-3 mr-5'>
        <form onSubmit={handleSearchSubmit} className="relative flex items-center bg-gray-200 rounded-full py-1 mr-3 pl-3 pr-3 cursor-pointer rounded-full border border-transparent hover:bg-gray-300 hover:border-gray-300 transition-all duration-100">
          <img src={icon} alt="Search icon" className="absolute left-3 w-4 h-4 hover:scale-110 active:scale-95" />
          <input
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="outline-none text-sm bg-transparent pl-10 pr-10 w-[180px]"
          />
          <button type="submit" className="absolute right-3 flex items-center justify-center cursor-pointer rounded-full border border-transparent hover:bg-gray-200 hover:border-gray-300 hover:scale-110 active:scale-95 transition-all duration-100">
            <img src={textIcon} alt="Icon 3" className="w-5 h-5" />
          </button>
        </form>

        <button className='cursor-pointer rounded-full border border-transparent hover:bg-gray-200 hover:border-gray-300 hover:scale-110 active:scale-95 transition-all duration-100'>
          <img src={icon4} alt="Icon 3" className="w-7 h-7 mr-5 " />
        </button>
        <button className='cursor-pointer rounded-full border border-transparent hover:bg-gray-200 hover:border-gray-300 hover:scale-110 active:scale-95 transition-all duration-100'>
          <img src={icon3} alt="Icon 4" className="w-7 h-7  mr-5 " />
        </button>
        <button className='cursor-pointer rounded-full border border-transparent hover:bg-gray-200 hover:border-gray-300 hover:scale-110 active:scale-95 transition-all duration-100'>
          <img src={icon5} alt="Icon 5" className="w-7 h-7  mr-5 " />
        </button>
        
      </div>

</div>
  )
}

export default snowNavBar;