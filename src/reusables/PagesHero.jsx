import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { HiOutlineChevronDoubleRight } from 'react-icons/hi2'

const PagesHero = () => {
  return (
    <div className="bg-[url('/slide1.jpg')] bg-cover bg-no-repeat w-full h-[220px] sm:h-[355px] md:h-[435px] flex items-end absolute top-0">
      <div className="w-full h-[85px] sm:h-[122px] md:h-[155px] flex flex-col items-center font-[Roboto] capitalize">
        <div className="text-[22px] sm:text-[36px] md:text-[40px] font-bold text-white">about us</div>
        <div className="flex items-center gap-3 text-[#ffca08] text-sm font-bold font-[Roboto] p-1">
          <AiFillHome color='#ffca08' className="cursor-pointer" />
          <HiOutlineChevronDoubleRight />
          about us
        </div>  
      </div>
    </div>
  )
}

export default PagesHero