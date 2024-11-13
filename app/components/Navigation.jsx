'use client'

import Link from 'next/link'
import React, { useState } from 'react'

import logo from '/public/logo.png'
import Image from 'next/image'

function MobileNav({ open, setOpen }) {
  const closeMenu = () => {
      setOpen(false);
  };
  return (
    <div className={`fixed top-0 left-0 h-screen w-1/3 bg-white transform ${open ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter`}>
      <div className="flex flex-col justify-center items-center mt-28">
        <Link href="/" className="text-2xl font-bold text-red-500 my-4" onClick={closeMenu}>Home</Link>
        <Link href="/about" className="text-2xl font-bold text-red-500 my-4" onClick={closeMenu}>About</Link>
        <Link href="/product" className="text-2xl font-bold text-red-500 my-4"onClick={closeMenu}>Product</Link>
        <Link href="/contact" className="text-2xl font-bold text-red-500 my-4"onClick={closeMenu}>Contact</Link>
      </div>
    </div>
  );
}




export default function Navigation() {
  const [open , setOpen] = useState(false);
  return (
   
    <div className="flex items-center justify-between px-8 py-6 bg-[#ecc08d] space-x-4">
        <Link href="/">
        <Image src={logo} alt="Logo" width={100} height={50} />
        </Link>
    <ul className="hidden md:flex space-x-12 font-poppins text-lg">
      <li>
        <Link href="/">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about">
          About
        </Link>
      </li>
      <li>
        <Link href="/product">
          product
        </Link>
      </li>
      <li>
      <Link href="/contact">
            Contact
          </Link>
        </li>
      
        </ul>
        <div className="md:hidden"></div>
        <MobileNav open={open} setOpen={setOpen}/>
        <div className="md:hidden w-11/12 flex justify-end items-center">
       
    <div className="group z-50 relativ w-6 h-6 mt-10 cursor-pointer flex-col justify-between items-center flex"onClick={() =>{setOpen(!open)}} >
    {/*hamburger btn*/}
    <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5": ""}`}/>
        <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "w-0": "w-full"}`}/>
        <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate+45 -translate-y-2.5": ""}`}/>
    </div>
</div>

      
      
      </div>



  )
}
