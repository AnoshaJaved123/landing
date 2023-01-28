import Image from 'next/image'
import React from 'react'

const Leftsection = () => {
  return (
   <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8 shadow-lg">
  {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
  <div className="lg:flex items-center justify-between">
    <div className="lg:w-1/3">
    <div className="text-center md:text-left w-full">
        <h2 className="font-serif text-2xl md:text-3xl">Easy to use Website Builder</h2>
        <p>Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find syour first customers.</p>
        <button className="bg-transparent hover:bg-gray-500 text-gray-700 font-bold hover:text-black py-2 px-4 my-4 border border-gray-500 rounded inline-flex items-center">
          <span>Find out more</span>
          <svg className="ml-2 w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
    <div className="lg:w-7/12 lg:mt-0 mt-8">
      <div className="w-full h-[60vh]">
        <Image width={800} height={1000} src={'/editor.png'} alt="Sample Page"  className="w-full sm:block hidden" />
        <Image width={800} height={1000} src={'/editor.png'} alt="Sample Page"  className="sm:hidden block w-full" />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
        <Image width={800} height={800} src={'/editor.png'} alt="Sample Page"  className="w-full"  />
        <Image width={800} height={800} src={'/editor.png'} alt="Sample Page"  className="w-full" />
      </div>
    </div>
  </div>
</div>
                     
  )
}

export default Leftsection
