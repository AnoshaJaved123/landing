import React from 'react'
import Image from "next/image";

const Services = () => {
  return (
    <section className="text-gray-600 body-font" >
    <div className="container px-5 py-10 mx-auto md:w-4/6">
      <div className="text-center mb-10">
        <h1 className="sm:text-3xl text-2xl font-semibold font-serif title-font text-gray-900 mb-4">Our Popular Services for you</h1>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div className="p-4 md:w-1/3  flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
            <Image width={100} height={100} alt='...' src={'/email.png'}/>
          </div>
          <div className="flex-grow shadow-lg p-3 rounded-md">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        <div className="p-4 md:w-1/3  flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <Image width={100} height={100} alt='...' src={'/admin.png'}/>

          </div>
          <div className="flex-grow shadow-lg p-3 rounded-md">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        <div className="p-4 md:w-1/3  flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <Image width={100} height={100} alt='...' src={'/coding.png'}/>

          </div>
          <div className="flex-grow shadow-lg p-3 rounded-md">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>
            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Services
