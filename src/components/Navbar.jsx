import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {styles} from '../styles'
import {navLinks} from '../constants'
import {logo, menu, close} from '../assets'

const Navbar = ({display, setDisplay}) => {

  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={
      `${styles.paddingX} w-full fixed flex items-center py-8 top-0 z-20 bg-[#050408]`
    }>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2' onClick={()=>{setActive(""); window.scrollTo(0,0)}}>
          <img src={logo} alt='logo' className='w-15 h-14 object-fit'/>
          <p className='text-white text-[18px] font-bold cursor-pointer'>Jayia Reid <span className='sm: 
          block'> | Full Stack Developer</span></p>
        </Link>
        {display && <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link)=>(
            <li key={link.id}
            className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={()=>setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>}
        {display==false && <ul className='list-none hidden sm:flex flex-row gap-10'>

            <li 
            className={`text-secondary hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={()=>setDisplay(true)}>
              Open Laptop (See Portfolio)
            </li>
        </ul>}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={()=>setToggle(!toggle)}/>
        </div>
        {display && <div className={`${!toggle? 'hidden' : 'flex'} sm:hidden p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
        <ul className='list-none flex justify-end items-start flex-col gap-4'>
          {navLinks.map((link)=>(
            <li key={link.id}
            className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
            onClick={()=>{
              setActive(link.title)
              setToggle(!toggle)
            }}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        </div>}
        {display == false && 
        <div className={`${!toggle? 'hidden' : 'flex'} sm:hidden p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
        <ul className='list-none flex justify-end items-start flex-col gap-4'>
            <li
            className={`text-white font-poppins font-medium cursor-pointer text-[16px]`}
            onClick={()=>{
              setDisplay(true)
            }}>
              Open Laptop (See Portfolio)
            </li>
        </ul>
        </div>}
        {/* <p className='text-blue-500 hidden'>jcjr:pro</p> */}
      </div>
    </nav>
  )
}

export default Navbar