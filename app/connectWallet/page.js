import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Image from 'next/image'

export default function page() {
  return (
    <div className='bg-[#2b2b2b] text-white'>
      <Navbar/>
<div className="grid lg:16 md:gap-11 gap-6 md:grid-cols-2 grid-cols-1">
    <div className="">
        <Image className='w-full lg:h-[691] md:h-[615px] h-[232px] object-cover ' src='/astroo.png' width={400} height={400} loading='lazy' alt='Image' />
    </div>
    <div className="md:py-20 py-10 md:px-0 px-5 ">
  <h1 className="lg:text-[51px] text-[38px] ">Connect Wallet</h1>
  <p className="lg:text-[22px] text-[16px] pr-5 ">Choose a wallet you want to connect. There are several wallet providers.</p>
 <div className="flex gap-2 items-center lg:h-[72px] h-[60px]  md:w-[330px] w-full rounded-[20px] bg-[#3B3B3B] mt-4  border-[2px] border-[#A259FF] ">
      <Image className='lg:w-[40px] lg:h-[40px] w-[32px] h-[32px]  ml-10 ' src='/MetaMask.png' width={40} height={40} alt='Image' />
      <p className=' text-[22px] font-semibold  pl-2'  >Metamask</p>
  </div>
 <div className="flex gap-2 items-center lg:h-[72px] h-[60px]  md:w-[330px] w-full rounded-[20px] bg-[#3B3B3B] mt-4  border-[2px] border-[#A259FF] ">
      <Image className='lg:w-[40px] lg:h-[40px] w-[32px] h-[32px]  ml-10 ' src='/WalletConnect.png' width={40} height={40} alt='Image' />
      <p className=' text-[22px] font-semibold  pl-2'  >Wallet Connect</p>
  </div>
 <div className="flex gap-2 items-center lg:h-[72px] h-[60px]  md:w-[330px] w-full rounded-[20px] bg-[#3B3B3B] mt-4  border-[2px] border-[#A259FF] ">
      <Image className='lg:w-[40px] lg:h-[40px] w-[32px] h-[32px]  ml-10 ' src='/Coinbase.png' width={40} height={40} alt='Image' />
      <p className=' text-[22px] font-semibold  pl-2'  >Coinbase</p>
  </div>
    </div>
</div>
      <Footer/>
    </div>
  )
}
