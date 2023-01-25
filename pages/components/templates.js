import React from 'react'
import Link from 'next/link'
const Templates = () => {
  return (
    <section className='mt-20 mb-20 ml-5 justify-center'>
      <h2 className="text-center text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-12">80+ HTML CSS Websites</h2>
      <div className="flip">
        <div className="front" style={{ backgroundImage: 'url(/purplewebfront-min.PNG)' }}>
          <h1 className="text-shadow">Home Cleaners</h1>
        </div>
        <div className="back">
          <h2>Website Home Cleaners Company</h2>
          <Link href={'/template'}><button className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Launch</button></Link>
        </div>
      </div>
      <div className="flip">
        <div className="front" style={{ backgroundImage: 'url(/food2front-min.png)' }}>
          <h1 className="text-shadow">Restraunt Website</h1>
        </div>
        <div className="back">
          <h2>Food Restraunt Website</h2>
          <Link href={'/template'}><button className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Launch</button></Link>
        </div>
      </div>
      <div className="flip">
        <div className="front" style={{ backgroundImage: 'url(/gymwebfront-min.png)' }}>
          <h1 className="text-shadow">Gym Website</h1>
        </div>
        <div className="back">
          <h2>Neon-Dark Theme GymSite</h2>
          <Link href={'/template'}><button className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Launch</button></Link>
        </div>
      </div>
      <div className="flip">
        <div className="front" style={{ backgroundImage: 'url(/foodwebfront-min.PNG)' }}>
          <h1 className="text-shadow">Pizza Shop</h1>
        </div>
        <div className="back">
          <h2>Pizza Home Delivery</h2>
          <Link href={'/template'}><button className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Launch</button></Link>
        </div>
      </div>
      <div className="flip">
        <div className="front" style={{ backgroundImage: 'url(/landingfront-min.png)' }}>
          <h1 className="text-shadow">Simple Landing</h1>
        </div>
        <div className="back">
          <h2>Landing Website</h2>
          <Link href={'/template'}><button className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Launch</button></Link>
        </div>
      </div>
      <div className="flip">
        <div className="front" style={{ backgroundImage: 'url(/portfoliofront-min.png)' }}>
          <h1 className="text-shadow">Portfolio Website</h1>
        </div>
        <div className="back">
          <h2>Portfolio Website</h2>
          <Link href={'/template'}><button className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Launch</button></Link>
        </div>
      </div>
      {/* <div className='content-center mt-10'>
<div>

  <Link href={'/template'}><button className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Load More</button></Link>
</div>
  </div> */}

    </section>
  )
}

export default Templates