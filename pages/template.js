import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
const Template = () => {
  useEffect(() => {
    const burger = document.querySelectorAll(".navbar-burger");
    const menu = document.querySelectorAll(".navbar-menu");

    if (burger.length && menu.length) {
      for (var i = 0; i < burger.length; i++) {
        burger[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    // close
    const close = document.querySelectorAll(".navbar-close");
    const backdrop = document.querySelectorAll(".navbar-backdrop");

    if (close.length) {
      for (var i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    if (backdrop.length) {
      for (var i = 0; i < backdrop.length; i++) {
        backdrop[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }
  }, []);

  return (
    <>
      <div>
        <nav className="relative px-4 py-4 flex justify-between items-center bg-gray-800">
          <a className="text-3xl font-bold leading-none" href="#">
            <Image alt='...' src={'/layers.png'} width={50} height={50} />
          </a>
          <h2 className="text-xl font-semibold font-cursive2 text-white ml-5">Layers Web Builder</h2>
          <div className="lg:hidden">
            <button className="navbar-burger flex items-center text-blue-600 p-3">
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <a className="text-sm text-gray-200 hover:text-gray-100" href="#">
                Home
              </a>
            </li>
            <li className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <a className="text-sm text-blue-600 font-bold" href="#">
                About Us
              </a>
            </li>
            <li className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <a className="text-sm text-gray-200 hover:text-gray-100" href="#">
                Services
              </a>
            </li>
            <li className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <a className="text-sm text-gray-200 hover:text-gray-100" href="#">
                Pricing
              </a>
            </li>
            <li className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <a className="text-sm text-gray-200 hover:text-gray-100" href="#">
                Contact
              </a>
            </li>
          </ul>
          <a
            className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
            href="#"
          >
            Sign In
          </a>
          <a
            className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
            href="#"
          >
            Sign up
          </a>
        </nav>
        <div className="navbar-menu relative z-50 hidden">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="#">
                <Image alt='...' src={'/layers.png'} width={50} height={50} />

              </a>
              <button className="navbar-close">
                <svg
                  className="h-6 w-6 text-gray-200 cursor-pointer hover:text-gray-100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-200 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-200 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-200 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-200 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-200 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <a
                  className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                  href="#"
                >
                  Sign in
                </a>
                <a
                  className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                  href="#"
                >
                  Sign Up
                </a>
              </div>

              <p className="my-4 text-xs text-center text-gray-200">
                <span>Copyright © 2021</span>
              </p>
            </div>
          </nav>
        </div>
      </div>

      {/* GRID */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link passHref={true} key={1} href={`/templates/${1}`} className="block relative h-70 rounded overflow-hidden">
                <Image alt='...' src={'/darktheme.PNG'} width={500} height={800} className='object-cover object-center w-full h-full block' />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Dark Theme</h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link passHref={true} key={3} href={`/templates/${3}`} className="block relative h-70 rounded overflow-hidden">
                <Image alt='...' src={'/gymweb.png'} width={500} height={800} className='object-cover object-center w-full h-full block' />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Gym Website</h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link passHref={true} key={4} href={`/templates/${4}`} className="block relative h-70 rounded overflow-hidden">
                <Image alt='...' src={'/purpleweb.png'} width={500} height={800} className='object-cover object-center w-full h-full block' />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">House Cleaning Website</h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link passHref={true} key={5} href={`/templates/${5}`} className="block relative h-70 rounded overflow-hidden">
                <Image alt='...' src={'/mountainweb.png'} width={500} height={800} className='object-cover object-center w-full h-full block' />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Hicking Hills Web</h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link passHref={true} key={6} href={`/templates/${6}`} className="block relative h-70 rounded overflow-hidden">
                <Image alt='...' src={'/landing.png'} width={500} height={800} className='object-cover object-center w-full h-full block' />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Digital Company Website</h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link passHref={true} key={2} href={`/templates/${2}`} className="block relative h-70 rounded overflow-hidden">
                <Image alt='...' src={'/foodweb.png'} width={600} height={1000} className='object-cover object-center w-full h-full block' />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Food Website</h2>
                <p className="mt-1">$19.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link passHref={true} key={8} href={`/templates/${8}`} className="block relative h-70 rounded overflow-hidden">
                <Image alt='...' src={'/food2.png'} width={600} height={1000} className='object-cover object-center w-full h-full block' />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Food Lover Website</h2>
                <p className="mt-1">$19.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link passHref={true} key={7} href={`/templates/${7}`} className="block relative h-70 rounded overflow-hidden">
                <Image alt='...' src={'/portfolio.png'} width={600} height={1000} className='object-cover object-center w-full h-full block' />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Portfolio Webpage</h2>
                <p className="mt-1">$19.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link passHref={true} key={10} href={`/templates/${10}`} className="block relative h-70 rounded overflow-hidden">
                <Image alt='...' src={'/resume.png'} width={600} height={1000} className='object-cover object-center w-full h-full block' />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-100 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Resumer Webpage</h2>
                <p className="mt-1">$19.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Template;
