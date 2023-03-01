import React from 'react'
import { FiPaperclip } from 'react-icons/fi';
import { AiOutlineCloudUpload, AiOutlinePlusCircle } from 'react-icons/ai';



const Banner = () => {
    return (
        <section className="text-gray-600 body-font mt-20">
            <div className="container px-4 py-34 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-5xl font-medium title-font mb-4 text-gray-900 tracking-widest">Create a Website in 3 Steps</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                </div>
                <div className="flex ml-5">
                    <div className="p-1 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-start sm:justify-start justify-start text-start sm:text-left">

                            <div className='bg-red-100 w-20 h-20 rounded-md justify-center '>
                                <div className='p-3'>
                                    <FiPaperclip size={45} color={'red'} />

                                </div>
                            </div>
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-gray-900">Choose a Design</h2>
                                <p className="mb-4 text-gray-400">3valuate your online presence<br /> with custome-tailored templates.</p>

                            </div>
                        </div>
                    </div>

                    <div className="p-1 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-start sm:justify-start justify-start text-start sm:text-left">

                            <div className='bg-yellow-100 w-20 h-20 rounded-md justify-center '>
                                <div className='p-3'>
                                    <AiOutlinePlusCircle size={45} color={'yellow'} />

                                </div>
                            </div>
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-gray-900">Choose a Design</h2>
                                <p className="mb-4 text-gray-400">3valuate your online presence<br /> with custome-tailored templates.</p>

                            </div>
                        </div>
                    </div>

                    <div className="p-1 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-start sm:justify-start justify-start text-start sm:text-left">

                            <div className='bg-emerald-100 w-20 h-20 rounded-md justify-center '>
                                <div className='p-3'>
                                    <AiOutlineCloudUpload size={45} color={'emerald'} />

                                </div>
                            </div>
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-gray-900">Choose a Design</h2>
                                <p className="mb-4 text-gray-400">3valuate your online presence<br /> with custome-tailored templates.</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Banner
