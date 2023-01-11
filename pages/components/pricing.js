import React from 'react'
import Image from "next/image";

const Pricing = () => {
  return (
     
<div className="bg-slate-50">
  <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
    <div className="m-auto text-center lg:w-7/12">
      <h2 className="text-2xl text-sky-900 font-bold md:text-4xl font-serif">Best Pricing and Plans for you</h2>
    </div>
    <div className="mt-12 grid items-center gap-6 md:grid-cols-2 lg:flex lg:space-x-8">
      <div className="relative md:col-span-1 group lg:w-[32%]">
        <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110" />
        <div className="relative p-6 space-y-6">
          <h3 className="text-3xl text-gray-700 font-semibold text-center">Monthly</h3>
          <div className="relative flex justify-around">
            <div className="flex">
              <span className="-ml-6 mt-2 text-3xl text-sky-500 font-bold">$</span>
              <span className="text-8xl text-gray-800 font-bold leading-0">19</span>
            </div>
            <span className="absolute right-9 bottom-2 text-xl text-sky-500 font-bold">/ Month</span>
          </div>
          <ul role="list" className="w-max space-y-4 pb-6 m-auto text-gray-600">
            <li className="space-x-2">
              <span className="text-sky-500 font-semibold">✓</span>
              <span>First premium advantage</span>
            </li>
            <li className="space-x-2">
              <span className="text-sky-500 font-semibold">✓</span>
              <span>Second premium advantage</span>
            </li>
            <li className="space-x-2">
              <span className="text-sky-500 font-semibold">✓</span>
              <span>Third advantage</span>
            </li>
          </ul>
          <button type="submit" title="Submit" className="block w-full py-3 px-6 text-center rounded-xl transition bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus:bg-sky-500">
            <span className="text-white font-semibold">
              Start plan
            </span>
          </button>
        </div>
      </div>
      <div className="relative row-start-1 group md:col-span-2 lg:w-[36%]">
        <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110" />
        <div className="relative p-6 space-y-6">
          <h3 className="text-3xl text-gray-700 font-semibold text-center">Annual</h3>
          <div className="overflow-hidden">
            <div className="-mr-20 flex items-end justify-center">
              <div className="flex">
                <span className="-ml-6 mt-2 text-3xl text-sky-500 font-bold">$</span>
                <span className="text-8xl text-gray-800 font-bold leading-0">15</span>
              </div>
              <div className="mb-2">
                <span className="block text-xl font-bold">.56</span>
                <span className="block text-xl text-sky-500 font-bold">/ Month</span>
              </div>
            </div>
            <div className="text-center text-2xl font-medium">
              <span className="text-gray-400 line-through">$234</span>
              <span className="text-gray-700 font-semibold">$190</span>
            </div>
            <span className="block uppercase text-xs text-sky-500 text-center">BILLED YEARLY</span>
            <span className="block w-max mt-4 m-auto px-4 py-1 rounded-full bg-gradient-to-r from-yellow-300 to-pink-300 text-sm font-medium text-yellow-900">1 Discount applied</span>
          </div>
          <ul role="list" className="w-max space-y-4 pb-6 m-auto text-gray-600">
            <li className="space-x-2">
              <span className="text-sky-500 font-semibold">✓</span>
              <span>First premium advantage</span>
            </li>
            <li className="space-x-2">
              <span className="text-sky-500 font-semibold">✓</span>
              <span>Second premium advantage</span>
            </li>
            <li className="space-x-2">
              <span className="text-sky-500 font-semibold">✓</span>
              <span>Third advantage</span>
            </li>
            <li className="space-x-2">
              <span className="text-sky-500 font-semibold">✓</span>
              <span>Fourth organizations advantage</span>
            </li>
          </ul>
          <button type="submit" title="Submit" className="block w-full py-3 px-6 text-center rounded-xl transition bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus:bg-sky-500">
            <span className="text-white font-semibold">
              Start plan
            </span>
          </button>
        </div>
      </div>
      <div className="relative md:col-span-1 group lg:w-[32%]">
        <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110" />
        <div className="relative p-6 space-y-6">
          <h3 className="text-3xl text-gray-700 font-semibold text-center">Free</h3>
          <div className="relative flex justify-around">
            <div className="flex">
              <span className="-ml-2 mt-2 text-3xl text-sky-500 font-bold">$</span>
              <span className="text-8xl text-gray-800 font-bold leading-0">0</span>
            </div>
          </div>
          <ul role="list" className="w-max space-y-4 pb-6 m-auto text-gray-600">
            <li className="space-x-2">
              <span className="text-sky-500 font-semibold">✓</span>
              <span>First premium advantage</span>
            </li>
            <li className="space-x-2">
              <span className="text-sky-500 font-semibold">✓</span>
              <span>Second premium advantage</span>
            </li>
            <li className="space-x-2">
              <span className="text-sky-500 font-semibold">✓</span>
              <span>Third advantage</span>
            </li>
          </ul>
          <button type="submit" title="Submit" className="block w-full py-3 px-6 text-center rounded-xl bg-sky-100 transition hover:bg-sky-200 active:bg-sky-300 focus:bg-sky-200">
            <span className="text-sky-700 font-semibold">
              Create free account
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Pricing
