import React from 'react'
import Image from "next/image";

const Trusted = () => {
  return (
    <section className="text-gray-600 body-font mt-10 bg-white">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className='text-5xl font-semibold text-gray-900 text-left mb-2'> Trusted <br className='text-emerald-500' /> By +5 Giants</h1>
          <p className="mb-8 leading-relaxed text-left">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>

        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 md:w-1/2 p-4 space-x-5 w-full flex ">
              <Image height={80} width={80} alt="ecommerce" className="object-cover object-center p-3 border-gray-50 border-2 w-28 h-28 " src={'/microsoft.png'} />
              <Image height={80} width={80} alt="ecommerce" className="object-cover object-center p-3 border-gray-50 border-2 w-28 h-28 " src={'/Amazon.png'} />
              <Image height={80} width={80} alt="ecommerce" className="object-cover object-center p-3 border-gray-50 border-2 w-28 h-28 " src={'/Google.png'} />
            </div>

          </div>
          <div className="flex flex-wrap -m-4 ">
            <div className="lg:w-1/3 md:w-1/2 p-4 space-x-5 w-full flex content-center ">
              <Image height={80} width={80} alt="ecommerce" className="object-cover object-center p-3 border-gray-50 border-2 w-28 h-28 " src={'/Google.png'} />
              <Image height={80} width={80} alt="ecommerce" className="object-cover object-center p-3 border-gray-50 border-2 w-28 h-28 " src={'/Amazon.png'} />
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}

export default Trusted
