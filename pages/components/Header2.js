import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'
import { BsCart4, BsBagCheck, BsCartDashFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { AiFillCloseCircle, AiOutlineUser } from 'react-icons/ai';

const Header = () => {
  const [dropdown, setdropdown] = useState(false)
  const [dropdown2, setdropdown2] = useState(false)
  const [login, setlogin] = useState()
  let temporyCart = 0
  const [user, setuser] = useState()
  useEffect(() => {
    setuser('anosha');
  }, [])
  const togglecart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')

    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')

    }

  }
  const ref = useRef()
  const loginrequired = () => {
    setlogin(true)
  }
  return (

    <div className='navbar relative z-10 flex flex-col md:flex-row md:justify-center justify-center items-center sticky py-1 top-0 bg-white'>
      <div className="logo ml-3 mt-3 mr-auto md:m-1 ">
        <Link href={'/'}><Image src='/layers.png' alt='img' width={40} height={40}></Image></Link>

      </div>
      <div className="nav justify-center">
        <ul className='flex items-center space-x-5 font-semibold md:text-lg'>
          <Link href={'/'}><p className=" hover:text-stone-600" >Home</p></Link>
          <Link href={'/about'}><p className=" hover:text-stone-600" >About</p></Link>

          <span className='relative z-[100]' onMouseOver={() => { setdropdown2(true) }} onMouseLeave={() => { setdropdown2(false) }}>
            {dropdown2 && <div onMouseOver={() => { setdropdown2(true) }} onMouseLeave={() => { setdropdown2(false) }} className='absolute z-10 items-center mt-6 ml-4  bg-white shadow-md font-semibold  px-5 py-4 w-32 rounded-md '>
              <ul>
                <a href={'/shirt'}> <li className='py-1 text-sm hover:text-stone-600'>Shirts</li></a>
                <a href={'/trouser'}><li className='py-1 text-sm hover:text-stone-600'>Trousers</li></a>
                <a href={'/shoes'}><li className='py-1 text-sm hover:text-stone-600'>Shoes</li></a>

              </ul>

            </div>}


            <Link href={'/products'}><p className=" hover:text-stone-600 " >Products</p></Link>
          </span>


          <Link href={'/contact'}><p className=" hover:text-stone-600" >Contact</p></Link>

        </ul>
      </div>




      <div className="cursor-pointer items-center cart absolute right-0 mx-5 flex">
        <span className='relative px-2' onMouseOver={() => { setdropdown(true) }} onMouseLeave={() => { setdropdown(false) }}>
          {dropdown && <div onMouseOver={() => { setdropdown(true) }} onMouseLeave={() => { setdropdown(false) }} className='absolute right-10 bg-white shadow-md font-semibold top-6 px-5 py-4 w-32 rounded-md '>
            <ul className='w-20'>
              <li className='py-1 text-sm hover:text-stone-600'>{user}</li>
              <a href={'/'}><li className='py-1 text-sm hover:text-stone-600'>Orders</li></a>
              <li className='py-1 text-sm hover:text-stone-600'>Log Out</li>
            </ul>

          </div>}


          {user &&
            <FaUserCircle className='text-xl md:text-2xl mr-5 hover:text-stone-700' />}
        </span>
        {!user && <Link href={'/login'} ><p>
          <AiOutlineUser className='text-xl md:text-2xl mr-5 hover:text-stone-600' />
        </p></Link>}





        <BsCart4 onClick={togglecart} className='text-xl md:text-2xl mr-5 hover:text-stone-600' />
        <div className="top-0 right-0 absolute text-xs w-5 h-5 bg-green-200 border-2 border-white dark:border-gray-800 rounded-full"><p className='text-center'></p></div>

      </div>

      <div ref={ref}
        className={`sidebar absolute top-0 right-0 p-10 overflow-y-scroll bg-white shadow-2xl px-8 py-30 h-[100vh] w-80 transform 
      transition-transform ${temporyCart !== 0 ? 'translate-x-0' : 'translate-x-full'}`}>

        <span onClick={togglecart} className='absolute text-2xl top-3 right-3 cursor-pointer text-red-400'><AiFillCloseCircle /></span>
        <h2 className='font-semibold text-lg text-center mb-3'>Shopping Cart</h2>
        <hr />

        <hr />
        <div className='total my-2 font-semibold'>Subtotal: PKR.  </div>
        <hr />


        {user && <>
          <div className="flex justify-between">
            <Link href={'/checkout'}><button className="flex mr-1 mt-11 bg-transparent text-sm my-2 hover:bg-black text-black font-semibold hover:text-white py-1 px-2 border border-black hover:border-transparent"><BsBagCheck className='my-1 mx-1' /><a>Checkout</a></button></Link>

            <button className="flex mr-1 mt-11 bg-transparent text-sm my-2 hover:bg-black text-black font-semibold hover:text-white py-1 px-2 border border-black hover:border-transparent"><BsCartDashFill className='my-1 mx-1' />ClearCart</button>
          </div>
        </>}
        {!user && <>
          <div className="flex justify-between">

            <button className="flex mr-1 mt-11 bg-transparent text-sm my-2 hover:bg-black text-black font-semibold hover:text-white py-1 px-2 border border-black hover:border-transparent"><BsCartDashFill className='my-1 mx-1' />ClearCart</button>
          </div>
        </>}
        {(!user && login != true) && <div className="text-red-600 text-sm mt-3 text-center">
          <Link href={'/login'}> <div className=''> LOG IN
            <button className=" font-medium  text-md px-1 py-0 text-center mr-1 mb-1 "><AiOutlineUser /></button>

          </div></Link>
        </div>}
      </div>
    </div>

  )
}

export default Header

