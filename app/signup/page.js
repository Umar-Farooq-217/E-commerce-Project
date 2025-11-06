import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Image from 'next/image'

export default function page() {
  return (
    <div>
       <div className=' bg-[#2b2b2b] text-white'>
              <Navbar/>
              <div className="grid lg:16 md:gap-11 gap-6 md:grid-cols-2 grid-cols-1">
      <div className="">
        <Image className='w-full lg:h-[691] md:h-[615px] h-[232px] object-cover ' src='/twoAstronauts.png' width={700} height={400} loading='lazy' alt='Image' />
      </div>
      <div className="md:py-20 py-10 md:px-0 px-5 ">
        <h1 className="lg:text-[51px] text-[38px] ">Create Account</h1>
        <p className="lg:text-[22px] text-[16px] pr-5 ">Welcome! enter your details and start creating, collecting and selling NFTs.</p>
        <div className="flex gap-2 items-center h-[41px]  md:w-[330px] w-full rounded-[20px] bg-white mt-8 ">
            <Image className='w-[20px] h-[20px]  ml-5 ' src='/User2.png' width={40} height={40} alt='Image' />
            <input className='text-black text-[16px]  outline-none  ' type="text" placeholder='Username' />
        </div>
        <div className="flex gap-2 items-center h-[41px]  md:w-[330px] w-full rounded-[20px] bg-white mt-4 ">
            <Image className='w-[20px] h-[20px]  ml-5 ' src='/mail.png' width={40} height={40} alt='Image' />
            <input className='text-black text-[16px]  outline-none  ' type="text" placeholder='Email Address' />
        </div>
        <div className="flex gap-2 items-center h-[41px]  md:w-[330px] w-full rounded-[20px] bg-white mt-4 ">
            <Image className='w-[20px] h-[20px]  ml-5 ' src='/LockKey.png' width={40} height={40} alt='Image' />
            <input className='text-black text-[16px]  outline-none  ' type="text" placeholder='Password' />
        </div>
        <div className="flex gap-2 items-center h-[41px]  md:w-[330px] w-full rounded-[20px] bg-white mt-4 ">
            <Image className='w-[20px] h-[20px]  ml-5 ' src='/LockKey.png' width={40} height={40} alt='Image' />
            <input className='text-black text-[16px]  outline-none  ' type="text" placeholder='Confirm Password' />
        </div>
        <button className=' h-[41px]  md:w-[330px] w-full rounded-[20px] bg-[#A259FF] mt-7'>Create Account</button>
      </div>
              </div>
      
              <Footer/>
            
          </div>
    </div>
  )
}
