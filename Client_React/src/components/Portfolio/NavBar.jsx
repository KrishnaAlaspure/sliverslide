import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';

const NavBar = () => {
    const [menu,setMenu]=useState(false);
    const [showMenu,setShowMenu]=useState(true)



  return (
    <header className='flex flex-wrap sticky top-0 z-50 justify-between md:items-center  text-white px-10 pt-6 pb-2 md:px-20 bg-zinc-900 bg-opacity-80 '>
      <span className='text-xl font-bold tracking-wide bg-gradient-to-r from-orange-400 to-orange-900 rounded-xl p-1'><a href="#home">Krishna Alaspure</a></span>
        <ul className={`${menu? "block" : "hidden"} mx-24 py-2 mt-4 font-semibold md:mt-5 px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
            <li className='text-lg transition-all duration-300 p-1 md:p-0 '><a href='#about' >About Me</a></li>
            <li className='text-lg transition-all duration-300 p-1 md:p-0'><a href="#experience">Experience</a></li>
            <li className='text-lg transition-all duration-300 p-1 md:p-0'><a href="#projects">Projects</a></li>
            <li className='text-lg transition-all duration-300 p-1 md:p-0'><a href="#skills">Skills</a></li>
            <li className='text-lg transition-all duration-300 p-1 md:p-0'><a href="#contact">Contact</a></li>
        </ul>
        {showMenu ? 
        ( <GiHamburgerMenu size={30} className='md:hidden absolute right-10 top-6 transition-all duration-300 ' onClick={()=>{setMenu(!menu); setShowMenu(!showMenu)}}/> )
        :
        (<IoCloseSharp size={30} className='md:hidden absolute right-10 top-6 transition-all duration-300 ' onClick={()=>{setMenu(!menu); setShowMenu(!showMenu)}}/>)
        }
    </header>
  )
}

export default NavBar
