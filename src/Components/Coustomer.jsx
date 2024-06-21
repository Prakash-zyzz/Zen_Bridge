import React from 'react';
import PHOTO from "../assets/Photo.png";
import Badge from "../assets/badge.png";

const Coustomer = () => {
  return (
    <div className='w-full h-full bg-[#170524] flex items-center justify-center py-32 px-4 sm:px-8 md:px-20'>
      <div className='flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-20 max-w-[1400px]'>
        
        <div className='flex-shrink-0 md:pt-3'>
          <img className='w-[200px] md:w-[250px] rounded-full mx-auto md:mx-0' src={PHOTO} alt="Photo" />
        </div>
        
        {/* Text Section */}
        <div className='text-white text-center md:text-left'>
          <h1 className='text-[20px] md:text-[25px] font-bold'>
            Not just our technology, we are loved for
          </h1>
          <h1 className='text-[20px] md:text-[25px] font-bold'>
            our <span className='bg-gradient-to-r from-[#E30069] to-[#F180B4] bg-clip-text text-transparent'>EDI</span> 
            <span className='bg-gradient-to-r from-[#E30069] to-[#a287b5] bg-clip-text text-transparent'> support</span> too
          </h1>
          
          <p className='pt-4 md:pt-8'>"We use Zenbridge as middleware for the end-to-</p>
          <p>end sales cycle. The customer service and</p>
          <p>developer resource(s) we have partnered with</p>
          <p>have been exceptional."</p>
          <p className='pt-4 md:pt-8 text-[#e82a82]'>Seth V, Senior Director, Operations and Logistics</p>
        </div>
        
        {/* Badges Section */}
        <div className='flex flex-col items-center space-y-4'>
      <div className='flex justify-center space-x-4'>
        <img src={Badge} alt="Badge" />
        <img src={Badge} alt="Badge" />
        <img src={Badge} alt="Badge" />
      </div>
      <div className='flex justify-center space-x-4'>
        <img src={Badge} alt="Badge" />
        <img src={Badge} alt="Badge" />
      </div>
    </div>
      </div>
    </div>
  );
};

export default Coustomer;
