import React from 'react'
import Image from "next/image";

const Trusted = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="py-5 px-5 mx-auto sm:mt-5 bg-slate-50  backdrop-filter backdrop-blur-sm bg-opacity-50" >
      <div className=" m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-40 ">
        <div className="mb-8">
          <h6 className="text-2xl  text-gray-900 font-serif font-bold text-center">Trusted by +5 giants</h6>
        </div>
        <div className="overflow-x-auto scrollbar-transparent lg:overflow-hidden">
          <div className="-mx-6 px-6 flex space-x-6 lg:justify-between md:space-x-8">
            <div>
              <Image width={150} height={60} loading="lazy" className="px-4 grayscale transition hover:grayscale-0" alt='...' src={'/IBMlogo.png'} />
            </div>
            <div>
              <Image width={180} height={60} loading="lazy" className="px-4 grayscale transition hover:grayscale-0" alt='...' src={'/cloudinarylogo.png'} />
            </div>
            <div className="mt-2">
              <Image width={140} height={60} loading="lazy" className="px-4 grayscale transition hover:grayscale-0" alt='...' src={'/amazon2.png'} />
            </div>
            <div>
              <Image width={150} height={60} loading="lazy" className="px-4 grayscale transition hover:grayscale-0" alt='...' src={'/googlelogo.webp'} />
            </div>
            <div>
              <Image width={180} height={60} loading="lazy" className="px-4 grayscale transition hover:grayscale-0" alt='...' src={'/microsoftlogo.png'} />
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
  )
}

export default Trusted
