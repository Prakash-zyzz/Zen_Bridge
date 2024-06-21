import React from 'react'
import { IoFlashOutline } from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";
import { LuBookCopy } from "react-icons/lu";

const Plan = () => {
  return (
    <div className='bg-white flex justify-center py-[135px] px-8 lg:ml-32'>
      <div className="grid lg:grid-cols-2 gap-28 max-w-[1400px] w-full">
        
        {/* Text Section */}
        <div className='flex flex-col justify-center'>
          <h1 className='text-[40px] font-bold sm:whitespace-normal'>
            With our APIs, we are 
          </h1>
          <h1 className='text-[40px] font-bold py-2 sm:whitespace-normal'>
            challenging the status quo <span className='hidden lg:inline'>of</span>
          </h1>
          <h1 className='text-[40px] py-1 font-bold text-[#E30069] sm:whitespace-normal'>
            EDI <span className='bg-gradient-to-r from-[#E30069] to-[#a287b5] bg-clip-text text-transparent'>integrations</span> <span className='text-black'>?</span>
          </h1>
          <p className='mt-8 text-[20px] sm:whitespace-nowrap'>
            EDI integrations don't have to be slow, frustrating, or costly.
          </p>
          <p className='text-[20px] sm:whitespace-nowrap'>
            Invest in the fastest growing new age EDI technology and save
          </p>
          <p className='text-[20px] sm:whitespace-nowrap'>
            your company from EDI nightmares.
          </p>
        </div>
        
        {/* Icons Section */}
        <div className='flex flex-col justify-center space-y-8 sm:px-2 lg:px-24'>
          <div className='flex items-center space-x-8'>
            <LuBookCopy size={70} className='text-[#643684] p-3 border shadow-md rounded-lg' />
            <div>
              <h1 className='text-[24px] font-bold'>100 Million+</h1>
              <p>Transactions & counting</p>
            </div>
          </div>
          <div className='flex items-center space-x-8'>
            <IoFlashOutline size={70} className='text-[#643684] p-3 border shadow-md rounded-lg' />
            <div>
              <h1 className='text-[24px] font-bold'>3 - 4 Weeks</h1>
              <p>Fastest integration time</p>
            </div>
          </div>
          <div className='flex items-center space-x-8'>
            <TbMoneybag size={70} className='text-[#643684] p-3 border shadow-md rounded-lg' />
            <div>
              <h1 className='text-[24px] font-bold'>$ 0.05</h1>
              <p>Lowest transaction fee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plan
