import React from 'react'
import map from '/public/222.jpg'
import Image from 'next/image'

export default function page() {
  return (
   <div
    id="cotact"
    className="container mt-52 mb-20 flex justify-between items-center mx-auto px-8 md:px-24 w-full">
      <div className="w-full">
        <h2 className="text-center text-5xl text-bold">contact</h2>
 
        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-16">
          <div className="space-y-12">
            <div>
              <label className="text-black block mb-6 text-xl font-bold">Name</label>
              <input type="text" pattern="^[0-9A-Za-z]+$" className="w-full border border-black bg-input px-4 py-4"></input>
            </div>
            <div>
              <label className="text-black block mb-6 text-xl font-bold">e-mail</label>
              <input type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" className="w-full border border-black bg-input px-4 py-4"></input>
            </div>
            <div>
              <label className="text-black block mb-6 text-xl font-bold">Adress</label>
              <input type="text" className="w-full border border-black bg-input px-4 py-4"></input>
            </div>
            <div>
              <label className="text-black block mb-6 text-xl font-bold">message</label>
              <input type="text" className="w-full border border-black bg-input px-4 py-4"></input>
            </div>
            <button className="px-8 py-3 bg-green-400 font-bold rounded-lg hover:bg-purple-600 transition-all duration-300">
        
            <span>Send</span>
          </button>
      
        </div>
        <div>
        <div className="h-[77.9rem] w-[48.5rem]">
  <div className="text-left align-top w-max font-bold">
    E-mail
  </div>
  <div className="text-left align-top w-max">
    info@xxx.co.nz
  </div>
  <div className="text-left align-top  w-max font-bold">
    Phone
  </div>
  <div className="text-left align-top   w-max">
    09-xxx-xxx
  </div>
  <div className="text-left align-top  w-max font-bold">
    Location
  </div>
  <div className="text-left align-top  w-max">
    New Lynn Auckland
  </div>
  <div className="text-left align-top  w-max font-bold">
    Map
  </div>
  <div>
  <Image src={map} alt="image"  width={700} height={400} />
  </div>
</div>
  </div>
  </div>
   </div>
   </div>
  )
}
