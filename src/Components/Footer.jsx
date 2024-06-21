import React from 'react'
import { SiLinkedin } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='bg-[#170524] text-white sm:px-24 lg:px-34 py-20 overflow-hidden'>
      <div className='w-full mx-auto grid grid-cols-2 lg:grid-cols-5 ml-12 gap-14'>
        {/* Products Section */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Solutions</h3>
          <div className='space-y-2 text-[grey] py-4'>
            <p className='py-2 cursor-pointer'>Developers</p>
            <p className='py-2 cursor-pointer'>EDI vs API</p>
            <p className='py-2 cursor-pointer'>API for EDI</p>
            <p className='py-2 cursor-pointer'>Security</p>
            <p className='cursor-pointer'>EDI Software - Decision</p>
            <p className='cursor-pointer'>making guide</p>
          </div>
        </div>

        {/* Integrations Section */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Integrations</h3>
          <div className='space-y-2 text-[grey] py-4 '>
            <p className='py-2 cursor-pointer'>NetSuite Integration</p>
            <p className='py-2 cursor-pointer'>Shopify Integration</p>
            <p className='py-2 cursor-pointer'>Quickbooks Integration</p>
            <p className='py-2 cursor-pointer'>Other ERP Integrations</p>
          </div>
        </div>

        {/* Standards Section */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Standards</h3>
          <div className='space-y-2 text-[grey] py-4'>
            <p className='py-2 cursor-pointer'>API for EDIFACT</p>
            <p className='py-2 cursor-pointer'>API for ANSI X12</p>
            <p className='py-2 cursor-pointer'>Pricing</p>
          </div>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Resources</h3>
          <div className='space-y-2 text-[grey] py-4'>
            <p className='py-2 cursor-pointer'>Blog</p>
            <p className='py-2 cursor-pointer'>Documentation</p>
          </div>
        </div>

        {/* Company Section */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Company</h3>
          <div className='space-y-2 text-[grey] py-4'>
            <p className='py-2 cursor-pointer'>Home</p>
            <p className='py-2 cursor-pointer'>About us</p>
            <p className='py-2 cursor-pointer'>Careers</p>
            <p className='py-2 cursor-pointer'>Insights</p>
            <p className='py-2 cursor-pointer'>Contact us</p>
          </div>
        </div>
      </div>
      <>
        <div className='flex flex-col items-center sm:flex-row sm:justify-start py-6 px-12 text-[gray]'>
          <div className='flex items-center'>
            <span className='py-1'>Follow us</span>
            <FaInstagram size={32} className='px-2 cursor-pointer' />
            <SiLinkedin size={32} className='px-2 cursor-pointer' />
            <FaFacebook size={32} className='px-2 cursor-pointer' />
            <RiTwitterXLine size={32} className='px-2 cursor-pointer' />
          </div>
        </div>
        <div className='text-center sm:text-left'>
          <p className='px-0 sm:px-12 text-[#ec559b] cursor-pointer'>&copy; 2024. All rights reserved.</p>
        </div>
      </>
    </div>
  )
}

export default Footer;
