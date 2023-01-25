import Link from 'next/link'
import React from 'react'

const Hero4 = () => {
  return (
    <div className="example-box">
      <div className="background-shapes"></div>
      <div className="text-center text-black">
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">The best way to create Your Website<br />
         </h1>
   <ul>
    <li><h3 className='text-white'>Unlimited Websites</h3></li>
    <li><h3 className='text-white'>No Ads</h3></li>
    <li><h3 className='text-white'>Free SSL</h3></li>
    <li><h3 className='text-white'>Connect Your Domain</h3></li>
    <li><h3 className='text-white'>Website Builder</h3></li>

   </ul>
        <Link href={'/template'}><button className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Template</button></Link>
        <Link href={'/login'}><button className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Editor</button></Link>
      </div>
    </div>
  )
}

export default Hero4
