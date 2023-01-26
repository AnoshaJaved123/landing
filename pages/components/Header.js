import Link from "next/link";
import React from "react";
import Image from "next/image";

const Header = () => {
    return (
   <nav className="nav flex  flex-wrap items-center justify-between px-4 shadow-2xl relative ">
  <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
  <Image width={60} height={60} alt="logo" className="px-3" src={'/layers.png'} /> 
    <span className="font-semibold text-xl tracking-tight">Layers Web Builder</span>
  </div>
  <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
  <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" htmlFor="menu-btn">
    <span className="navicon bg-grey-darkest flex items-center relative" />
  </label>
  <ul className="menu text-black border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
    <li className="border-t md:border-none">
      <Link href="/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">Home</Link>
    </li>
    <li className="border-t md:border-none">
      <Link href="/login" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Editor</Link>
    </li>
    <li className="border-t md:border-none">
      <Link href="/template" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Template</Link>
    </li>
  </ul>
</nav>
        
    )
}

export default Header

