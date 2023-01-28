// import PageCreate from "./pageCreate";
import 'bootstrap/dist/css/bootstrap.css'
import Hero4 from './components/hero4'
import Hero3 from './components/hero3'
import Trusted from './components/trusted'
import Rightsection from './components/rightsection'
import Leftsection from './components/leftsection'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Herotri from './components/herotri'
import Features from './components/Features'
import Templates from './components/templates'
import Ctaform from './components/ctaform'
export default function Home() {
  return (
    <>
{/* <Navbar/> */}
{/* <Header/> */}
 
      {/* <Hero4/> */}
      <Hero3/>

      {/* <Herotri/> */}
 
      {/* 2. Trusted */}
      <Features/>
      {/* <Trusted /> */}

      {/* 3.SERVICES SECTION*/}
      {/* <Services /> */}
      {/* <Rightsection/> */}
      <Leftsection/>
      <Templates/>
      <Ctaform/>
      {/*5.PRICING */}

      {/* <Pricing /> */}
      {/* 6.Library */}
      {/* <Library/> */}
      {/* <Library2/> */}
      <Footer/>
    </>
  )
}
