import Image from 'next/image'
import about from '/public/about.jpg'
import bakery from '/public/bakery.jpg'



export default function About() {
  return (
    <div className="h-screen">
   
    <div>
    <Image src={about} alt="image"  className=" -z-10 w-3/4 h-1/3 lg:h-1/3 "/> 
    <h1 className="absolute top-40 left-20 text-lg font-bold md:text-7xl">About</h1>
    <p className="absolute top-60 left-20 md:text-3xl"> Supplying <br />
          New Zealanders with<br />
          good baked goods<br />
          japanese style breads</p>

    </div>
    <div className="flex items-center justify-center">
    <Image src={bakery} alt="image"  className="md:hidden"/> 
    </div>
    <div>
      <h1 className="absolute bottom-7 left-20 font-bold text-4xl">Focus on Quality</h1>
    <p className="absolute bottom-12 left-20 font-bold  ">Our bakery specializes in artisanal sourdough bread,<br/>which is gentle on children and the elderly,<br/> and aims to provide a taste-focused, authentic bread experience</p>
    </div>

    </div>
)
}

 

