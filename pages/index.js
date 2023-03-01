import React from 'react'
import "tailwindcss/tailwind.css";
import Image from "next/image";
import Link from "next/link";
// import { FloatingWhatsApp } from 'react-floating-whatsapp'
// import 'bootstrap/dist/css/bootstrap.css'
import Hero4 from './components/hero4'
import Rightsection from './components/rightsection'
import Leftsection from './components/leftsection'
import Footer from './components/Footer'
import Ctaform from './components/ctaform'
import Banner from './components/banner'
import Loadmore from './components/loadmore'
import Trusted from './components/trusted'

export default function Home() {
  return (
    <>
      <section className=" bg-gray-100 mx-12 my-10 rounded-t-3xl">
        <header className="text-gray-600 text-lg font-semibold">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link href={"/"}>
              <h2 className="text-emerald-500 font-Roboto Mono space-x-5 font-semibold md:text-xl">
                Builder.
              </h2>
            </Link>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <Link href={'/about'} className="mr-5 hover:text-gray-900">About</Link>
              <Link href={'/'} className="mr-5 hover:text-gray-900">How to use?</Link>
              <Link href={'/team'} className="mr-5 hover:text-gray-900">Team</Link>
            </nav>
            <Link href={"/template"}>
              <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Start
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </Link>

          </div>
        </header>

        <div className="px-12 pt-24 mx-auto max-w-7xl font-cursive4">
          <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
              <span>Let</span>{" "}
              <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-emerald-500 to-purple-500 lg:inline">
                Us Help You Cross
              </span>{" "}<br />
              <span>To Success</span>
            </h1>
            <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
              Start gaining the traction you've always wanted with our next-level
              templates and designs. Crafted to help you tell your story.
            </p>
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
              <Link
                href="/template"
                className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-emerald-500 rounded-full sm:w-auto sm:mb-0"
              >
                Get Started
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="w-full mx-auto mt-20 text-center md:w-10/12">
            <div className="relative z-0 w-full mt-8">
              <div className="relative overflow-hidden shadow-2xl rounded-t-3xl">

                <Image height={1200} width={1200} alt={'...'} src={'/header.png'} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Banner />
      <Leftsection />
      <Loadmore />
      <Rightsection />
      <Trusted />
      <Ctaform />


      {/* <FloatingWhatsApp
        phoneNumber="00923214920880"
        accountName="Help Center"
        allowEsc
        allowClickAway
        notification
        notificationSound
      /> */}
      <Footer />
    </>
  )
}
