import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome"
import {faBars,faXmark} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"



const Nav = () => {
    const [open , setOpen]=useState(false)
    console.log(open);
  return (
    <nav className='max-md:bg-white bg-none md:h-20 w-full flex items-center justify-between max-md:flex-col max-md:gap-9 max-md:py-5  fixed padding-x font-jost' >
        <img href='#home' src="/bilu_logo.png" className=' h-10' alt="" />
        <div onClick={()=>setOpen(!open)} className=' md:hidden  absolute right-16'>
        <FontAwesomeIcon size="2x" icon={open ? faBars:faXmark} />

        </div>
        <li className={` flex gap-9 max-md:flex-col max-md:items-center max-md:gap-9 text-xl font-regular ${open && `max-md:hidden`}`} >
            <ul href='#home' className='cursor-pointer'>Home</ul>
            <ul href='#services' className='cursor-pointer' >Services</ul>
            <ul href='#portfolios' className='cursor-pointer' >Portfolios</ul>
            <ul href='#testimonials' className='cursor-pointer' >Testimonials</ul>
        </li>
        <div className={`bg-yellow_primary px-10 py-2 rounded-full text-xl font-regular ${open && `max-md:hidden`}`}>Let's Talk</div>
    </nav>
  )
}

export default Nav