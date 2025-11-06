import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Image from 'next/image'
export default function page() {
  return (
    <div className=' bg-[#2b2b2b] text-white'>
        <Navbar/>
        <div className="grid lg:16 md:gap-11 gap-6 md:grid-cols-2 grid-cols-1">
<div className="bg-red-400">
  <Image className='w-full  md:h-full h-[232px] object-cover ' src='/twoAstronauts.png' width={700} height={400} loading='lazy' alt='Image' />
</div>
<div className="md:py-[58px] py-10 md:px-0 px-5 ">
  <h1 className="lg:text-[51px] text-[38px] ">Create  Account</h1>
  <p className="lg:text-[22px] text-[16px] pr-5 ">Welcome! enter your details and start creating, collecting and selling NFTs.</p>
  <div className="flex gap-2 items-center h-[41px]  md:w-[330px] w-full rounded-[20px] bg-white mt-8 ">
      <Image className='w-[20px] h-[20px]  ml-5 ' src='/User2.png' width={40} height={40} alt='Image' />
      <input className='text-black text-[16px]  outline-none  ' type="text" placeholder='Username' required />
  </div>
  <div className="flex gap-2 items-center h-[41px]  md:w-[330px] w-full rounded-[20px] bg-white mt-4 ">
      <Image className='w-[20px] h-[20px]  ml-5 ' src='/mail.png' width={40} height={40} alt='Image' />
      <input className='text-black text-[16px]  outline-none  ' type="text" placeholder='Email Address' required />
  </div>
  <div className="flex gap-2 items-center h-[41px]  md:w-[330px] w-full rounded-[20px] bg-white mt-4 ">
      <Image className='w-[20px] h-[20px]  ml-5 ' src='/LockKey.png' width={40} height={40} alt='Image' />
      <input className='text-black text-[16px]  outline-none  ' type="text" placeholder='Password' required />
  </div>
  <div className="flex gap-2 items-center h-[41px]  md:w-[330px] w-full rounded-[20px] bg-white mt-4 ">
      <Image className='w-[20px] h-[20px]  ml-5 ' src='/LockKey.png' width={40} height={40} alt='Image' />
      <input className='text-black text-[16px]  outline-none  ' type="text" placeholder='Confirm Password' />
  </div>
  <button className=' h-[41px]  md:w-[330px] w-full rounded-[20px] bg-[#A259FF] mt-4'>Sign Up</button>
  <p className="text-base pt-3 pl-1">If you already  Sign up </p>
   <button className=' h-[41px]  md:w-[330px] w-full rounded-[20px] bg-[#A259FF] mt-2'>Login</button>
</div>
        </div>

        <Footer/>
      
    </div>
  )
}
