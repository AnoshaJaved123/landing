import React from 'react'
import Image from 'next/image'
const Library2 = () => {
  return (
                                   

<div className="py-16 bg-white">
  <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
    <div className="flex items-center justify-center -space-x-2">
      <Image loading="lazy" width={100} height={100} src={'/p2.png'}   alt="member photo" className="w-8 h-8 object-cover rounded-full" />
      <Image loading="lazy" width={150} height={150} src={'/p4.jpg'}  alt="member photo" className="w-12 h-12 object-cover rounded-full" />
      <Image loading="lazy" width={200} height={200} src={'/p3.jpg'}  alt="member photo" className="z-10 w-16 h-16 object-cover rounded-full" />
      <Image loading="lazy" width={150} height={150} src={'/p5.jpg'}  alt="member photo" className="relative w-12 h-12 object-cover rounded-full" />
      <Image loading="lazy" width={100} height={100} src={'/p1.webp'}   alt="member photo" className="w-8 h-8 object-cover rounded-full" />
    </div>
    <div className="m-auto space-y-6 md:w-8/12 lg:w-7/12">
      <h1 className="text-4xl text-gray-700 font-bold text-center md:text-5xl font-serif">Get Started now</h1>
      <p className="text-xl text-center">Be part of millions people around the world using tailus in modern User Interfaces.</p>
      <div className="flex flex-wrap justify-center gap-6">
        <a href="#" title="More" className="block w-full py-3 px-6 text-center rounded-xl bg-sky-100 transition hover:bg-sky-200 active:bg-sky-300 focus:bg-sky-200 sm:w-max">
          <span className="text-sky-700 font-semibold">
            More about
          </span>
        </a>
        <a href="#" title="Get started" className="block w-full py-3 px-6 text-center rounded-xl bg-sky-600 transition hover:bg-sky-700 active:bg-sky-800 focus:bg-sky-600 sm:w-max">
          <span className="text-white font-semibold">
            Get started
          </span>
        </a>
      </div>
    </div>
  </div>
</div>
                       
 
  )
}

export default Library2
