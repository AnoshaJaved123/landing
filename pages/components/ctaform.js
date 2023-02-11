import React from 'react'
import Image from 'next/image'
const Ctaform = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-left">Join Our Newsletter</h1>
            <p className="mb-8 leading-relaxed text-left">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                <p className="leading-7 text-sm text-left text-gray-600">Email:</p>
                <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-full text-lg">Subscribe</button>
            </div>

          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image height={800} width={800} className="object-cover object-center rounded-full" alt="hero" src={'/Group 49.png'} />
          </div>
        </div>
      </section>

    </>
  )
}

export default Ctaform