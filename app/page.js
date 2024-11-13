import human from '/public/bread.jpg'
import kish from '/public/kish.jpg'
import sand from '/public/sand.jpg'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className=" flex-row md:flex">
<div className="box-content  md:flex md:flex-1 bg-[#120e0e] md:h-screen sm:h-1/3">
<div className="flex justify-center items-center h-2/4">
        <h1 className="mt-12 font-bold text-4xl text-center align-top text-white font-Oswald md:text-left ml-11 lg:text-7xl md:text-6xl ">
        Supplying <br />
        New Zealanders with<br />
        good baked goods</h1>
        </div>
</div>
<div className=" box-content  h-2/4 md:flex md:flex-1 bg-[#a6690d] md:h-screen sm:h-1/3">
<div className="flex justify-center items-center px-16 h-2/3 md:h-screen">
<Image src={human} alt="image"  width={700} height={400} />
      </div>
</div>
</div>

<div className="h-2/3-screen bg-[#fff1cd]">
<h1 className="text-lg md:text-5xl font-bold py-10 px-12" >Featured Products</h1>

<div className="py-7 px-12 grid grid-cols-2 md:grid-cols-4">
<div className="h-60  md:h-96 w-96 bg-gray-300 relative col-span-1 flex justify-center">
  <p className="text-sm md:text-lg font-bold text-center absolute top-1/2 transform -translate-y-1/2">
    Quiches
  </p>
</div>
<div className="h-60 md:h-96 w-96 bg-gray-600 relative col-span-1">
  <Image src={kish} alt="image"  width={1536} height={1536} />
</div>
<div className="h-60 md:h-96 w-96 bg-gray-300 relative col-span-1 flex justify-center">
  <p className="text-sm md:text-lg font-bold text-center absolute top-1/2 transform -translate-y-1/2">
    Savoury Bakes
  </p>
</div>
<div className="h-60 md:h-96 w-96 bg-gray-700 relative col-span-1">
<Image src={sand} alt="image"  max-width max-height />
</div>
</div>
</div>
</>
  )
}
