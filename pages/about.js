import Rightsection from './components/rightsection'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "tailwindcss/tailwind.css";
import Footer from '../pages/components/Footer'
import Trusted from './components/trusted';

function About() {
    return (
        <div>
            <>
                <section className=" bg-gray-100 mx-12 my-10 rounded-t-3xl ">
                    <header className="text-gray-600 text-lg font-semibold">
                        <div className="container mx-auto flex flex-wrap py-2 px-5 flex-col md:flex-row items-center">
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
                            <Link href={"/login"}>
                                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Start
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </Link>

                        </div>
                    </header>
                    <div className="px-12 pt-24 mx-auto max-w-7xl font-cursive4 py-24">
                        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center mt-16">
                            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                                <span>Experienced &</span>
                                <br />
                                <span>Professional Team</span>
                            </h1>
                            <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
                                You can relay on our amazing features list and also our customer
                                services will be great experience for you without doubt and in no-time.
                            </p>

                        </div>
                    </div>
                </section>

                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-white">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Image height={'800'} width={'800'} className="object-cover object-center" alt="hero2" src={'/Group 29.png'} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">

                        <div className="">
                            <div className="flex p-3 sm:flex-row flex-col">
                                <div className="w-24 h-24 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-white text-emerald-500 flex-shrink-0">
                                    <Image height={'60'} width={'60'} className="object-cover object-center" alt="hero" src={'/icon/Icon material-security.png'} />
                                </div>
                                <div className="flex-grow">
                                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-3 text-left">Security</h1>
                                    <p className="leading-relaxed text-base text-left">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="flex p-3 sm:flex-row flex-col">
                                <div className="w-24 h-24 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-white text-emerald-500 flex-shrink-0">
                                    <Image height={'60'} width={'60'} className="object-cover object-center" alt="hero" src={'/icon/Icon awesome-edit.png'} />
                                </div>
                                <div className="flex-grow">
                                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-3 text-left">Easy Editing</h1>
                                    <p className="leading-relaxed text-base text-left">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="flex p-3 sm:flex-row flex-col">
                                <div className="w-24 h-24 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-white text-emerald-500 flex-shrink-0">
                                    <Image height={'60'} width={'60'} className="object-cover object-center" alt="hero" src={'/icon/transparency.png'} />
                                </div>
                                <div className="flex-grow">
                                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-3 text-left">Transparency</h1>
                                    <p className="leading-relaxed text-base text-left">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* <Trusted /> */}
                <section className="text-gray-600 body-font mt-10 bg-gray-50">
                    <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className='text-5xl font-semibold text-gray-900 text-left mb-2'> Trusted <br className='text-emerald-500' /> By +5 Giants</h1>
                            <p className="mb-8 leading-relaxed text-left">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>

                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <div className="flex flex-wrap -m-4">
                                <div className="lg:w-1/3 md:w-1/2 p-4 space-x-5 w-full flex ">
                                    <Image height={80} width={80} alt="ecommerce" className="object-cover object-center p-3 border-gray-50 border-2 w-28 h-28 " src={'/microsoft.png'} />
                                    <Image height={80} width={80} alt="ecommerce" className="object-cover object-center p-3 border-gray-50 border-2 w-28 h-28 " src={'/Amazon.png'} />
                                    <Image height={80} width={80} alt="ecommerce" className="object-cover object-center p-3 border-gray-50 border-2 w-28 h-28 " src={'/Google.png'} />
                                </div>

                            </div>
                            <div className="flex flex-wrap -m-4 ">
                                <div className="lg:w-1/3 md:w-1/2 p-4 space-x-5 w-full flex content-center ">
                                    <Image height={80} width={80} alt="ecommerce" className="object-cover object-center p-3 border-gray-50 border-2 w-28 h-28 " src={'/Google.png'} />
                                    <Image height={80} width={80} alt="ecommerce" className="object-cover object-center p-3 border-gray-50 border-2 w-28 h-28 " src={'/Amazon.png'} />
                                </div>

                            </div>

                        </div>
                    </div>

                </section>


                <div className="w-full relative items-center justify-center bg-emerald-500 h-64 z-0 mx-auto rounded-3xl rounded-t-3xl mt-10 -mb-20 text-center md:w-10/12  ">
                    <div className='pt-20 items-center justify-center'>

                        <h1 className='text-white font-bold text-4xl'>Ready to go Buildr.</h1>
                        <Link href={'/login'}>
                            <button className="inline-flex text-emerald-500 bg-white border-0 py-2 px-6 mt-3 focus:outline-none hover:bg-white rounded-full text-lg">Let's Build a Website</button>
                        </Link>

                    </div>
                </div>
                <Footer />


            </>
        </div>
    )
}

export default About
