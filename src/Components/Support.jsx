import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const Support = () => {
  return (
    <div className='bg-[#170524] w-full h-full justify-center items-center py-40 px-40 m-auto'>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
           <div>
             <h1 className='text-white text-5xl'>Why</h1>
             <h1 className='bg-gradient-to-r from-[#E30069] to-[#c1afce] bg-clip-text text-transparent text-5xl py-4'>Zenbridge <span className='text-white'>?</span></h1>
             <p className='text-white text-lg py-3'>Unmatched Pricing, Unparalleled Support.</p>
           </div>
           
            <div>
                <h2 className='text-white pb-4 text-2xl'>Nature of use</h2>
                <p className='text-white flex items-center py-2 text-[18px] whitespace-nowrap'><FaCheckCircle style={{ fill: 'url(#blue-gradient)' }} size={21} /><span className='px-4'>Self serve mode</span></p>
                <p className='text-white flex items-center py-2 text-[18px] whitespace-nowrap'><FaCheckCircle style={{ fill: 'url(#blue-gradient)' }} size={21} /><span className='px-4'>Fully managed mode</span></p> 
                <p className='text-white flex items-center py-2 text-[18px] whitespace-nowrap'><FaCheckCircle style={{ fill: 'url(#blue-gradient)' }} size={21} /><span className='px-4'>Fully customized implementation</span></p>
            </div>

           <div>
                <h2 className='text-white pb-4 text-2xl'>Support</h2>
                <p className='text-white flex items-center py-2 text-[18px] whitespace-nowrap'><FaCheckCircle style={{ fill: 'url(#blue-gradient)' }} size={21} /><span className='px-4'>Exclusive delivery manager</span></p>
                <p className='text-white flex items-center py-2 text-[18px] whitespace-nowrap'><FaCheckCircle style={{ fill: 'url(#blue-gradient)' }} size={21} /><span className='px-4'>Unlimited developer support hours</span></p> 
                <p className='text-white flex items-center py-2 text-[18px] whitespace-nowrap'><FaCheckCircle style={{ fill: 'url(#blue-gradient)' }} size={21} /><span className='px-4'>24*7 support via Chat, Email & Phone</span></p>
            </div>
            <svg width="0" height="0">
              <defs>
                <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop stopColor="#E30069" offset="0%" />
                  <stop stopColor="#A287b5" offset="100%" />
                </linearGradient>
              </defs>
            </svg>
        </div>
    </div>
  )
}

export default Support
