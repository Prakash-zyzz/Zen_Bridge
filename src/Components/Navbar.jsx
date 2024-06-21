import React, {useState}  from 'react'
import {BsPerson} from "react-icons/bs"
import {BiSearch} from "react-icons/bi"
import {SiHomebridge} from "react-icons/si"
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import Logo from "../assets/logon.png"
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdArrowForwardIos } from "react-icons/md";


const Navbar = () => {

    const[nav,setNav] = useState(false)
   const[logo,setLogo]= useState(false)

   const handleNav = ()=>{
        setNav(!nav);
        setLogo(!nav)
   }

  return (
    <div className='flex border-b-2 border-black  m-auto w-full justify-between h-[100px] bg-[#170524] items-center px-4 absolute z-10 drop-shadow-lg  text-white'>
       <div className='flex'>
            <h1 onClick={handleNav} className={nav ? "hidden" : "block"} ><img className='lg:ml-20 sm:ml-12 cursor-pointer' src={Logo} /></h1>
            
       </div>

       <ul className='hidden md:flex px-4 cursor-pointer'>
            <li className='flex px-4'><span className='py-1'>About Us</span> <RiArrowDropDownLine size={30} /></li>
            <li className='flex px-4'><span className='py-1'>Products</span> <RiArrowDropDownLine size={30} /></li>
            <li className='flex px-4'><span className='py-1'>Solutions</span> <RiArrowDropDownLine size={30} /></li>
            <li className='flex'><span className='py-1'>Pricing</span>  </li>
            <li className='flex'><span className='py-1'>Developers </span></li>
            <li className='flex px-4'><span className='py-1'>Resources</span> <RiArrowDropDownLine size={30} /></li>

        </ul>

        <div className='hidden mr-40 md:flex justify-around cursor-pointer '>
            <button className='flex py-3 px-3 rounded-xl border-transparent bg-gradient-to-r from-[#E30069] to-[#F180B4]'>Contact Sales <MdArrowForwardIos className='mt-1 mx-2' /></button>
            <button className='px-4 py-2 ml-8 font-bold  border-[1px] border-[#C0C0C0] bg-gradient-to-r from-[#F180B4] to-[#E30069] bg-clip-text text-transparent'>
  Login
</button>

        </div>

         <div onClick={handleNav}  className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> :<AiOutlineMenu size={25} className='mr-4 cursor-pointer'  />}
        </div>

        

    </div>
  )
}

export default Navbar