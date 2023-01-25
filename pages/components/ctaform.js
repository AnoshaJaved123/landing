import React from 'react'

const Ctaform = () => {
  return (
    <div className='mt-10 mb-10'>
{/* <div className="cta-2 bg-indigo-600 py-12">
  <div className="container px-4 mx-auto">
    <div className="md:flex md:-mx-4 md:items-center xl:py-4">
      <div className="md:w-1/2 px-4">
        <p className="text-2xl text-white">High quality FWR blocks are carefully crafted to let you create your website quickly and easily</p>
      </div>
      <div className="md:w-1/2 px-4 sm:text-center mt-12 md:mt-0">
        <button className="py-2 px-6 bg-white text-indigo-600 border-2 border-solid border-white hover:bg-transparent hover:text-white rounded mb-3 sm:mb-0 mx-auto sm:mx-2 block sm:inline-block transition-colors duration-300">Get Started</button>
        <button className="py-2 px-6 text-white border-2 border-solid border-white hover:bg-white hover:text-indigo-600 rounded mx-auto sm:mx-2 block sm:inline-block transition-colors duration-300">Learn More</button>
      </div>
    </div>
  </div>
</div> */}

   <div className="cta-1 mb-10 bg-gray-100 py-4 md:py-12">
  <div className="container mx-auto text-center px-4 py-6">
    <h1 className="text-2xl md:text-4xl font-medium">Sign Up now and get 20% off</h1>
    <form className="max-w-sm lg:max-w-none mx-auto my-12 lg:flex lg:justify-center">
      <div className="mb-4 lg:mb-0 lg:w-full lg:max-w-xs">
        <label className="sr-only" htmlFor="email">Your email address</label>
        <input type="text" id="email" placeholder="Email" className="py-2 px-3 border border-solid border-gray-400 rounded w-full" />
      </div>
      <div className="lg:ml-4 mb-4 lg:mb-0 lg:w-full lg:max-w-xs">
        <label className="sr-only" htmlFor="email">Your email address</label>
        <input type="password" id="password" placeholder="Create Password" className="py-2 px-3 border border-solid border-gray-400 rounded w-full" />
      </div>
      <div className="lg:ml-4 mt-6 lg:mt-0">
        <button className="px-4 py-2 lg:px-6 bg-gray-800 hover:bg-gray-900 rounded text-white">Sign Up</button>
      </div>
    </form>
    <p>By signing up, you agree to our
     </p>
  </div>
</div>
    </div>

  )
}

export default Ctaform