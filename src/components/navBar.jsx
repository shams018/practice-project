import React, { useState } from 'react'
import icon1 from '../assets/Navicon.svg'
import icon2 from '../assets/star.svg'
import icon3 from '../assets/Navicon2.svg'
import icon4 from '../assets/Navicon3.svg'
import icon5 from '../assets/bell.svg'
import icon from '../assets/searchIcon.svg'
import textIcon from '../assets/Text.png'


const navBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (e) => setSearchTerm(e.target.value)

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    console.log('Search:', searchTerm)
  }

  return (
   <div className="w-[948px] h-[68px]  mx-auto flex  items-center justify-between px-4 bg-gray-50">     
    {/* left side div */}


  <div className='w-[268px] h-[28px]  items-left gap-3 flex'>
    <button>
          <img src={icon1} alt="Icon 2" className="w-5 h-5 mr-5 " />
    </button>
    <button>
          <img src={icon2} alt="Icon 1" className="w-5 h-5  mr-5 " />
    </button>
  <button className="px-4 py-1 text-black rounded hover:bg-gray-200 text-sm">
      Dashboard
    </button>
    <button className="px-4 py-1  text-black rounded hover:bg-gray-200 text-sm">
      Default
    </button>

     
   
  </div>

   

     {/* Right side div */}

      <div className='w-[316px] h-[28px]  flex items-center justify-end gap-3'>
        <form onSubmit={handleSearchSubmit} className="flex items-center bg-gray-200 rounded-full py-1 mr-3">
          <img src={icon} alt="Search icon" className="w-4 h-4 mr-2" />
          <input
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="outline-none text-sm bg-transparent"
          />
          <button > <img src={textIcon} alt="Icon 3" className="w-5 h-5 mr-5 " /></button>
        </form>

        <button>
          <img src={icon4} alt="Icon 3" className="w-7 h-7 mr-5 " />
        </button>
        <button>
          <img src={icon3} alt="Icon 4" className="w-7 h-7  mr-5 " />
        </button>
        <button>
          <img src={icon5} alt="Icon 5" className="w-7 h-7  mr-5 " />
        </button>
        <button>
          <img src={icon1} alt="Icon 2" className="w-7 h-7 mr-5 " />
        </button>
      </div>

</div>
  )
}

export default navBar;