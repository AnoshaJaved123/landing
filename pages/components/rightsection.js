import Image from 'next/image'
import React from 'react'

const Rightsection = () => {
  return (
 
    <div className="block md:flex mb-10 mt-10 shadow-2xl shadow-gray-800">
   
    <div className="flex-1 flex justify-center items-center bg-white p-10 md:p-0">
      <div className="text-center md:text-left w-full md:w-5/6">
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
    <div className="flex-1 mr-10 py-5  " >
    <Image width={600} height={600} alt='...' src={'/editor.png'}/>
  
    </div>
  </div>
  

                                
  )
}

export default Rightsection
