import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import Cookies from 'js-cookie'
import Header from './components/Header'
import Footer from './components/Footer'

const Login = () => {


  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (e) => {
    if (e.target.name == 'email') {
      setEmail(e.target.value)

    } else if (e.target.name == 'password')
      setPassword(e.target.value)
  }
  const handleSubmit = async () => {

    let url = `${process.env.NEXT_PUBLIC_HOST}/api/login`
    // const token = Cookies.get('token')
    const rawResponse = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ email: email, password: password })
    });
    const content = await rawResponse.json();
    // console.log('content',content)
    if (content.success == "true") {
      // localStorage.setItem('token',response.token)
      // localStorage.setItem('username',content[0].Name)
      // localStorage.setItem('useremail',content[0].Email)
      Cookies.set('token', content.token)
      Cookies.set('username', content.name)
      Cookies.set('useremail', content.email)
      toast.success('Successfully Logged In', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        router.push(`${process.env.NEXT_PUBLIC_HOST}/pageCreate`)
      }, 1000);
    }
    else {
      toast.error('Invalid Credentials', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }


    setEmail('')
    setPassword('')


  }
  return (
    <div>
      <Head>
        <title>Login</title>

      </Head>
      <Header />
      <section className=" body-font overflow-hidden">
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="px-8 h-screen text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="xl:ml-20 xl:w-3/12 lg:w-3/12 md:w-6/12 mb-12 md:mb-0 border border-neutral-600 p-10">
              <div className='text-center'>
                {/* <Link href={'/'}><a><Image src='/logo33.png' alt='img' width={100} height={100}></Image></a></Link> */}
                {/* <Image width={80} height={80} alt="logo" className="ml-20 mb-3" src={'/layers.png'} /> */}
                <h1 className="text-emerald-500 font-Roboto Mono space-x-5 font-semibold md:text-4xl">
                  Builder.
                </h1>
              </div>
              <form>
                <h1 className="text-center text-xl font-semibold mb-9 mt-2 font-serif">LOG IN</h1>


                {/* Email input */}
                <div className="mb-4">
                  <input value={email} onChange={handleChange} type="email" className="block w-full px-2 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-stone-600 focus:outline-none" name="email" placeholder="Email address" />
                </div>
                {/* Password input */}
                <div className="mb-4">
                  <input value={password} onChange={handleChange} type="password" className="block w-full px-2 py-1 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-stone-600 focus:outline-none" name="password" placeholder="Password" />
                </div>
                <div className="flex justify-between items-center mb-6">

                  {/* <Link href={'/forgot?token=123'} className="text-gray-800">Forgot password?</Link> */}
                </div>
                <div className="text-center lg:text-center">

                  <button onClick={handleSubmit} type="button" className="loginbutton font-serif inline-block bg-transparent text-md my-2 hover:bg-emerald-500 text-emerald-600 font-semibold hover:text-white py-1 px-4 border border-emerald-600 hover:border-transparent">
                    LOGIN
                  </button>


                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Do not have an account?
                    <Link className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out mx-2" href={'/signup'} >SIGN UP</Link>
                  </p>
                </div>
              </form>
            </div>

            {/* 
            <div className="xl:ml-20 xl:w-3/12 lg:w-3/12 md:w-6/12 mb-12 md:mb-0 border border-neutral-600 p-10">
              <form>
                <h1 className="text-center text-xl font-semibold mb-9">I AM NEW</h1>

                <div className="flex justify-between items-center mb-6">
                Create an account with just a couple of details and you will be able to process your order faster and find out about the latest trends and promotions by email!
                </div>
                <div className="text-center lg:text-center">
                
                  <button  onClick={handleSubmit} type="button" className="inline-block bg-transparent text-md my-2 hover:bg-black text-black font-semibold hover:text-white py-1 px-4 border border-black hover:border-transparent">
                  SIGNUP
                  </button>

                </div>
              </form>
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Login