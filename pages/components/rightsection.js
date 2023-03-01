import Image from 'next/image'
import React from 'react'

const Rightsection = () => {
  return (
    <>

      <section className="text-gray-600 body-font mt-20 bg-gray-100">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className='text-5xl font-semibold text-emerald-500 text-left mb-2'> We Build <br className='text-gray-800' /> It, Your Own It</h1>
            <p className="mb-8 leading-relaxed text-left">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded-full text-lg">Get Started</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image height={'800'} width={'800'} className="object-cover object-center" alt="her1o" src={'/Group 22.png'} />
          </div>
        </div>


        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
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



      </section>

    </>

  )
}

export default Rightsection
