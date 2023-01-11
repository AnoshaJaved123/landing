import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Template = () => {
  
    
  return (
    <div>
 <div className="h-screen w-full bg-white relative flex overflow-hidden">
  {/* Sidebar */}
  <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
    {/* Profile */}
    <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
    </div>
    {/* Courses */}
    <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    </div>
    {/* Theme */}
    <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    </div>
    {/* Configuration */}
    <div className="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </div>
  </aside>
  <div className="w-full h-full flex flex-col justify-between">
    {/* Header */}
    <header className="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
      {/* Informação */}
      <div className="flex flex-shrink-0 items-center space-x-4 text-white">
        {/* Texto */}
        <div className="flex flex-col items-end ">
          {/* Nome */}
          <div className="text-md font-medium ">Unknow Unknow</div>
          {/* Título */}
          <div className="text-sm font-regular">Student</div>
        </div>
        {/* Foto */}
        <div className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400" />
      </div>
    </header>
    {/* Main */}
    <main className="max-w-full h-full flex relative overflow-y-hidden">
      {/* Container */}
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
<Link passHref={true} key={1} href={`/templates/${1}`} className="block relative h-70 rounded overflow-hidden">
  <Image alt='...' src={'/darktheme.PNG'} width={500} height={800} className='object-cover object-center w-full h-full block'/>
  </Link>
  <div className="mt-4">
    <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
    <h2 className="text-gray-900 title-font text-lg font-medium">Dark Theme</h2>
    <p className="mt-1">$16.00</p>
  </div>
</div>
 
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
<Link passHref={true} key={3} href={`/templates/${3}`} className="block relative h-70 rounded overflow-hidden">
  <Image alt='...' src={'/gymweb.png'} width={500} height={800} className='object-cover object-center w-full h-full block'/>
  </Link>
  <div className="mt-4">
    <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
    <h2 className="text-gray-900 title-font text-lg font-medium">Gym Website</h2>
    <p className="mt-1">$12.00</p>
  </div>
</div>
  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
<Link passHref={true} key={4} href={`/templates/${4}`} className="block relative h-70 rounded overflow-hidden">
  <Image alt='...' src={'/purpleweb.png'} width={500} height={800} className='object-cover object-center w-full h-full block'/>
  </Link>
  <div className="mt-4">
    <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
    <h2 className="text-gray-900 title-font text-lg font-medium">House Cleaning Website</h2>
    <p className="mt-1">$16.00</p>
  </div>
</div>
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
<Link passHref={true} key={5} href={`/templates/${5}`} className="block relative h-70 rounded overflow-hidden">
  <Image alt='...' src={'/mountainweb.png'} width={500} height={800} className='object-cover object-center w-full h-full block'/>
  </Link>
  <div className="mt-4">
    <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
    <h2 className="text-gray-900 title-font text-lg font-medium">Hicking Hills Web</h2>
    <p className="mt-1">$16.00</p>
  </div>
</div>
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
<Link passHref={true} key={6} href={`/templates/${6}`} className="block relative h-70 rounded overflow-hidden">
  <Image alt='...' src={'/landing.png'} width={500} height={800} className='object-cover object-center w-full h-full block'/>
  </Link>
  <div className="mt-4">
    <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
    <h2 className="text-gray-900 title-font text-lg font-medium">Digital Company Website</h2>
    <p className="mt-1">$16.00</p>
  </div>
</div>

    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
<Link passHref={true} key={2} href={`/templates/${2}`} className="block relative h-70 rounded overflow-hidden">
  <Image alt='...' src={'/foodweb.png'} width={600} height={1000} className='object-cover object-center w-full h-full block'/>
  </Link>
  <div className="mt-4">
    <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
    <h2 className="text-gray-900 title-font text-lg font-medium">Food Website</h2>
    <p className="mt-1">$19.00</p>
  </div>
</div>
   
    </div>
  </div>
</section>
    </main>
  </div>
</div>

    </div>
  )
}

export default Template