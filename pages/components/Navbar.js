import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {

  return (
    <>

      <div>
        <nav className="nav">
          <input className="nav__trigger-input" type="checkbox" id="trigger" aria-label="open the navigation" />
          <label className="nav__trigger-finger" htmlFor="trigger">
            <span />
          </label>
          <ul className="nav__list">
            <li className="nav__item">
              <Link href={"/"} className="nav__link">
                <span className="nav__text">
                  Home
                </span>
              </Link>
            </li>
            <li className="nav__item">
              <Link href={'/template'} className="nav__link">
                <span className="nav__text">
                  Template
                </span>
              </Link>
              {/* <input className="nav__submenu-trigger-input" type="checkbox" id="submenu-trigger" />
        <label className="nav__submenu-trigger-finger" htmlFor="submenu-trigger" />
        <ul className="nav__list-child">
          <li className="nav__item">
            <Link href="#hoi" className="nav__link">
              <span className="nav__text">
                About me
              </span>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="#hoi" className="nav__link">
              <span className="nav__text">
                About meerkats
              </span>
            </Link>
          </li>
        </ul> */}
            </li>
            <li className="nav__item">
              <Link href={'/login'} className="nav__link">
                <span className="nav__text">
                  Editor
                </span>
              </Link>
            </li>
            <li className="nav__item">
              <Link href={'/signup'} className="nav__link">
                <span className="nav__text">
                  Register
                </span>
              </Link>
            </li>
          </ul>
        </nav>
     

      </div>

    </>
  )
}

export default Navbar


