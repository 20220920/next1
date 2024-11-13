import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '/public/logo.png'

const Footer = () => {
  return (
    <div className="flex items-center justify-between px-8 py-6 bg-[#ecc08d] space-x-4">
      <div className="grid-flow-row gap-5">
    <Link href="/">
    <Image src={logo} alt="Logo" width={100} height={50} />
    </Link>
    <h1 className="text-base md:text-4xl font-bold mt-4">&copy; {new Date().getFullYear()}  All rights reserved.</h1>
    </div>
    <p><span className="font-bold">K.K FAMILY BAKERY.</span> <br />Making exceptional food <br />more accessible for<br/> New Zealand</p>
    
    <ul>
      <li className="text-lg font-bold">About</li>
      <li>Our Story</li>
      <li>Contact us</li>
    </ul>

    <ul>
      <li className="text-lg font-bold">Products</li>
      <li>Sweets</li>
      <li>Breads</li>
    </ul>
     
      
    </div>
  )
}

export default Footer