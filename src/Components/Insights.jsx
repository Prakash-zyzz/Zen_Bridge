import React from 'react';
import Oracle from "../assets/oracle.jpg";
import Meta from "../assets/metas.jpg";
import Code from "../assets/code.jpg";

const Insights = () => {
  return (
    <div className="text-black w-full h-full justify-center py-16 items-center m-auto">
      <div className='items-center flex justify-center'>
        <h1 className="lg:text-5xl sm:text-9xl font-bold text-gray-900 mb-8 py-4">
          Insights from <span className='bg-gradient-to-r from-[#E30069] to-[#835e9c] bg-clip-text text-transparent'>Zen</span><span className='text-[#835e9c]'>bridge</span>
        </h1>
      </div>

      <div className='flex justify-center pb-12'>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        
          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <a href="#">
              <div className="w-full h-[288px] overflow-hidden">
                <img className="w-full h-full object-cover rounded-t-lg" src={Meta} alt="Best EDI Software for a Small Business" />
              </div>
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Best EDI Software for a Small Business</h5>
              </a>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-pink-600 hover:text-pink-700">
                Read article
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <a href="#">
              <div className="w-full h-[288px] overflow-hidden">
                <img className="w-full h-full object-cover rounded-t-lg" src={Code} alt="What's the best eDI software?" />
              </div>
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">What's the best eDI software?</h5>
              </a>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-pink-600 hover:text-pink-700">
                Read article
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow">
            <a href="#">
              <div className="w-full h-[288px] overflow-hidden">
                <img className="w-full h-full object-cover rounded-t-lg" src={Oracle} alt="NetSuite EDI integration - A complete setup guide" />
              </div>
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">NetSuite EDI integration - A complete setup guide</h5>
              </a>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-pink-600 hover:text-pink-700">
                Read article
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Insights;
