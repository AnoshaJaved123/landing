import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import 'bootstrap/dist/css/bootstrap.css'
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
      <Hero4 />
      <Banner />
      <Leftsection />
      <Loadmore />
      <Rightsection />
      <Trusted />
      <Ctaform />


      <FloatingWhatsApp
        phoneNumber="00923214920880"
        accountName="Help Center"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
      <Footer />
    </>
  )
}
