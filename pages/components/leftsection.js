import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Leftsection = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-100 mt-20">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <h1 className='text-5xl font-semibold text-emerald-500'> 100+ <br /> Templates <br className='text-gray-800' /> to Customize</h1>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">

          <p className="mb-4 leading-relaxed text-left">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
          <div className="flex justify-center">
            <Link href={'#'} className="text-gray-900 font-bold ">See More</Link>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Leftsection
