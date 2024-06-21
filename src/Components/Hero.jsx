import React from 'react';
import Stake from "../assets/stake.png";
import Icon1 from "../assets/icon1.png";
import Icon2 from "../assets/icon2.png";
import Icon3 from "../assets/icon3.png";
import Arc from "../assets/arc.png";

const Hero = () => {
  return (
    <div className='w-full h-screen bg-[#170524] flex flex-col lg:flex-row justify-center relative sm:py-52 lg:py-0 pt-[260px] lg:pt-0'>

     
      <div className='hidden md:block absolute top-[45%] right-[97%] transform translate-x-[50%] -translate-y-[50%]'>
        <img className='size-5' src={Icon2} alt='icon2' />
      </div>

     
      <div className='hidden md:flex flex-col items-center lg:items-start'>
        <img src={Icon1} className='mt-40 ml-4 size-7 flex justify-center' alt='icon1' />
        <img src={Icon3} className='mt-[470px] ml-4 size-8 flex justify-center' alt='icon3' />
      </div>

      <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start w-full lg:w-auto'>
        <div className='text-white m-auto text-center lg:text-left'>
          <h1 className='text-[40px] lg:text-[60px] pt-12 pb-2 lg:py-8'>Slay Your EDI</h1>
          <h1 className='text-[40px] lg:text-[60px] pb-2 lg:pb-6 bg-gradient-to-r from-[#E30069] to-[#835e9c] bg-clip-text text-transparent'>
            <span className='bg-gradient-to-r from-[#E30069] to-[#835e9c] bg-clip-text text-transparent'>Integrate</span> 
            <span className='text-[#835e9c]'>Faster</span>
          </h1>
          <p className='text-base lg:text-xl pt-1 lg:pt-6'>Leverage the power of API technology - faster</p>
          <p className='text-base lg:text-xl'>integrations, greater data accuracy, global connectivity &</p>
          <p className='text-base lg:text-xl pb-3 lg:pb-12'>total automation.</p>
          <button className='px-20 py-3 lg:px-4 lg:py-3 bg-gradient-to-r from-[#E30069] to-[#F180B4] text-base lg:text-base'>Schedule a free demo</button>
        </div>

        <div className='w-full lg:w-auto'>
          <img className='mx-auto pb-32 sm:pb-32 lg:pb-0 lg:ml-24 lg:mt-12 w-3/4 lg:w-[700px]' src={Stake} alt='img' />
        </div>
      </div>

      
      <div className='hidden md:block absolute bottom-0 w-full h-[33%] overflow-hidden'>
        <img src={Arc} className='object-cover transform translate-x-10' alt='arc' />
      </div>
    </div>
  );
};

export default Hero;
