import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect } from "react";

const Hero3 = () => {
  useEffect(() => {
    var triggerMenu =  document.querySelector('.menu-trigger');

  function handleNavigation() {
    var body = document.querySelector('body');
    body.classList.toggle('is-navigation-open');
  }
  
  triggerMenu.addEventListener('click', handleNavigation);
  }, [])
  



  return (
  <div>
  <header className="header">
    <button className="menu-trigger">
      <span className="menu-trigger__line" />
      <span className="menu-trigger__line" />
      <span className="menu-trigger__line" />
    </button>
  </header>
  <div className="navigation mask-polygon-1">
    <div className="navigation__inner">
      <div className="navigation__info" />
      <nav className="menu">
        <ul>
          <li>
            <a href={"/"}>HOME</a>
          </li>
          <li>
            <a href={"/login"}>EDITOR</a>
          </li>
          <li>
            <a href={"/template"}>TEMPLATES</a>
          </li>
          <li className="current">
            <a href={"/signup"}>REGISTER</a>
          </li>
          {/* <li>
            <a href="#">Menu item</a>
          </li> */}
        </ul>
      </nav>
    </div>
  </div>
  <div className="hero mask-polygon-1">
    <div className="hero__caption">
      <h2>Create your <br /><strong>Website</strong> with a <strong>awesome</strong> Webbuilder.</h2>

   
      
      <Link href={'/template'}><button className="bg-transparent hover:bg-gray-500 text-white font-bold hover:text-black py-2 px-4 my-4 border border-gray-500 rounded inline-flex items-center">Template</button></Link>
    <Link href={'/login'}><button className="ml-4 bg-transparent hover:bg-gray-500 text-white font-bold hover:text-black py-2 px-4 my-4 border border-gray-500 rounded inline-flex items-center">Editor</button></Link>
    </div>
  </div>
</div>

  
  )
}

export default Hero3
