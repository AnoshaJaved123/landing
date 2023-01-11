import Image from 'next/image'
import React from 'react'

const Library = () => {
  return (
                                    
<div className="relative py-10 flex flex-col items-center bg-cyan-900 overflow-hidden md:py-10">
  <div className="relative z-[1] container m-auto px-6 md:px-12">
    <div className="m-auto text-center md:w-8/12 lg:w-6/12">
      <h2 className="text-2xl text-white font-bold md:text-4xl font-serif">Our heroes <span className="text-sky-400">contribute</span> to the development of tailus</h2>
    </div>
    <div className="m-auto mt-16 md:w-11/12 lg:w-8/12 xl:w-7/12">
      <div className="flex flex-wrap justify-center gap-6">
        <div className="group py-2  px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
       <Image width={70} height={30} alt='...' src={'/googlelogo.webp'} className="contrast-0 mt-2 transition group-hover:contrast-100" loading="lazy"/> 
        </div>
        <div className="group py-2  px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
       <Image width={70} height={30} alt='...' src={'/IBMlogo.png'} className="contrast-0 mt-2 transition group-hover:contrast-100" loading="lazy"/> 
        </div>
        <div className="group py-2  px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
       <Image width={70} height={30} alt='...' src={'/amazon2.png'} className="contrast-0 mt-2 transition group-hover:contrast-100" loading="lazy"/> 
        </div>
        <div className="group py-2  px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
       <Image width={70} height={30} alt='...' src={'/microsoftlogo.png'} className="contrast-0 mt-2 transition group-hover:contrast-100" loading="lazy"/> 
        </div>
        <div className="group py-2  px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
       <Image width={70} height={30} alt='...' src={'/googlelogo.webp'} className="contrast-0 mt-2 transition group-hover:contrast-100" loading="lazy"/> 
        </div>
        <div className="group py-2  px-4 border border-opacity-10 rounded-xl bg-white bg-opacity-5 hover:bg-opacity-10">
       <Image width={70} height={30} alt='...' src={'/cloudinarylogo.png'} className="contrast-0 mt-2 transition group-hover:contrast-100" loading="lazy"/> 
        </div>
      </div>
    </div>
  </div>
  <div aria-hidden="true" className="absolute h-full inset-0 flex items-center">
    <div aria-hidden="true" className="bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl" />
  </div>
  <div aria-hidden="true" className="absolute inset-0 w-full h-full bg-[#020314] opacity-90" />
</div>

  )
}

export default Library
